const config = require('../config/config');
config.isServer = true;

const api = require('../api');
const GameServer = require('./GameServer');
const stats = require('./stats');
const url = require('url');
const crypto = require('crypto');

const express = require('express');
const WebSocket = require('ws');
var cors = require('cors');

const nocache = require('nocache');

let rivetServer = null;
if (config.isProd) {
	const rivet = require('@rivet-gg/matchmaker');
	rivetServer = new rivet.MatchmakerService({
		endpoint: process.env.RIVET_MATCHMAKER_API_URL,
		tls: true,
		requestHandler: api.requestHandlerMiddleware(process.env.RIVET_LOBBY_TOKEN)
	});
	rivetServer.lobbyReady({});
}

// Setup stats
stats.start('local', process.env.REDIS_URI || null);

// Log stats every 5 minutes
const serverKey = crypto.randomBytes(16).toString('base64');
async function getStats() {
	try {
		let totalPlayers = 0;
		// NOTE: Add the total player count from matchmaker here

		return {
			timestamp: Date.now(),
			playerCount: game.playerCount,
			totalPlayers: totalPlayers,
			updateDuration: game.lastUpdateDuration,
			updateInterval: game.lastUpdateInterval,
			entityCount: Object.keys(game.entities).length,
			uptime: process.uptime(),
			mem: process.memoryUsage(),
			cpu: await sampleCPU()
		};
	} catch (e) {
		return {
			timestamp: Date.now(),
			error: e.toString()
		};
	}
}

function sampleCPU(ms = 1000) {
	return new Promise(resolve => {
		// Get the starting usage
		const previousValue = process.cpuUsage();

		// Resolve result after x ms
		setTimeout(() => resolve(process.cpuUsage(previousValue)), ms);
	});
}

setInterval(async () => {
	stats.logServerStats(serverKey, await getStats());
}, 5 * 60 * 1000);

// Broadcast player count
function broadcastPlayerCount(count) {
	// NOTE: This is where you'd send the player count to the matchmaker
	console.log('New player count');
}

// Create game
const game = new GameServer();

// Create express server
const app = express();
app.use(cors());
if (!config.isProd) app.use(nocache());
app.use(/^\/$/, nocache()); // Only disable caching on the root, "/" will disable all sub-directories
app.use('/*.html', nocache());
app.use('/*.js', nocache());
app.use('/*.css', nocache());
app.use(
	express.static(__dirname + '/../../public', {
		immutable: true,
		maxAge: 1000 * 60 * 60 * 2 // 2 hours
	})
);
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/../../public/index.html');
});
app.get('/ping', nocache(), (req, res) => {
	res.send('Success');
});
app.get('/status', nocache(), (req, res) => {
	res.send('ok');
});
app.get('/server-stats', nocache(), async (req, res) => {
	res.send(await getStats());
});
app.get('/server-stats-history', nocache(), async (req, res) => {
	let results = await stats.fetchServerStatsHistory(serverKey, req.query.count || 1000);
	res.send(results);
});
app.get('/game-stats', nocache(), async (req, res) => {
	let results = await stats.fetchStats();

	let resultsMap = {};
	for (let result of results) {
		resultsMap[result[0]] = result[1];
	}

	res.send(resultsMap);
});

// Dev server
if (!config.isProd) {
	let port = 8080;
	app.listen(port, () => console.log(`Listening on port ${port}.`));
}

// Handle WebSocket CORS
const corsRegex = /^((.+\.|)microgravity\.io|microgravity.rivet.game)$/;
function isValidOrigin(origin) {
	if (!config.isProd) return true; // Allow from anywhere if dev
	return corsRegex.test(origin);
}

// Create WebSocket server
let wsPort = process.env.PORT ? parseInt(process.env.PORT) : 8008;
let wsServer = require('http').createServer();
const wss = new WebSocket.Server({ server: wsServer, path: '/' });
wss.on('connection', async (ws, req) => {
	// Don't allow connection if full
	if (game.playerCount >= config.maxPlayersHard) {
		ws.close();
		return;
	}

	// Validate origin
	if (!req.headers.origin) {
		console.warn('No origin header');
		ws.close();
		return;
	}
	let originUrlData = url.parse(req.headers.origin);
	if (!isValidOrigin(originUrlData.hostname)) {
		console.warn('Invalid origin', originUrlData.hostname);
		ws.close();
		return;
	}

	if (!req.url) {
		console.warn('Missing URL');
		ws.close();
		return;
	}
	let wsUrl = new url.URL(req.url, 'https://microgravity.io');
	let playerToken = wsUrl.searchParams.get('token');
	if (rivetServer) {
		if (playerToken) {
			try {
				await rivetServer.playerConnected({ playerToken });
			} catch (err) {
				console.warn('Failed to connect player', err);
				ws.close();
				return;
			}
		} else {
			console.warn('Missing token');
			ws.close();
			return;
		}
	}

	// Send to game
	let client = game.socketConnected(ws);

	// Update player count
	broadcastPlayerCount(game.playerCount);

	// Add event on close
	client.onClosed = async () => {
		broadcastPlayerCount(game.playerCount);

		if (rivetServer) {
			try {
				await rivetServer.playerDisconnected({ playerToken });
			} catch (err) {
				console.warn('Failed to disconnect player', err);
			}
		}
	};
});
wsServer.listen(wsPort, () => console.log(`WebSocket server listening on port ${wsPort}.`));
