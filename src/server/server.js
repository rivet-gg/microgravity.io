// Since we can't inherit the cert from mkcert
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const config = require('../config/config');
config.init(true);

const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const utils = require('./utils');
const GameServer = require('./GameServer');
const stats = require('./stats');
const url = require('url');
const crypto = require('crypto');

const express = require('express');
const WebSocket = require('ws');
var cors = require('cors');

const nocache = require('nocache');

let RIVET = require('@rivet-gg/api');
let rivet = new RIVET.RivetClient({
	environment: process.env.RIVET_API_ENDPOINT,
	token: process.env.RIVET_TOKEN,
});

console.log("Setting lobby ready");
rivet.matchmaker.lobbies.ready()
	.then(() => console.log('Lobby ready'))
	.catch(err => {
		console.log('Failed to set lobby ready', JSON.stringify(err));
		process.exit(1);
	});

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

// Handle WebSocket CORS
const corsRegex = /^((.+\.|)microgravity\.io|microgravity\.rivet\.game|microgravity\.rivet-game\.test)$/;
function isValidOrigin(origin) {
	// if (!config.isProd) return true; // Allow from anywhere if dev
	// return corsRegex.test(origin);
	return true;
}

// Create WebSocket server
let wsPort = process.env.PORT ? parseInt(process.env.PORT) : 5001;
let wsServer = require('http').createServer();
const wss = new WebSocket.Server({ host: '0.0.0.0', server: wsServer, path: '/' });
wss.on('connection', async (ws, req) => {
	// Don't allow connection if full
	if (game.playerCount >= config.maxPlayersHard) {
		console.warn('Game full, kicking player');
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
	if (playerToken) {
		ws.addListener('close', async () => {
			try {
				await rivet.matchmaker.players.disconnected({ playerToken });
				console.log("Player disconnected", playerToken);
			} catch (err) {
				console.warn('Failed to disconnect player', err);
			}
		});

		try {
			await rivet.matchmaker.players.connected({ playerToken });
			console.log("Player connected", playerToken);
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

	// Send to game
	let client = game.socketConnected(ws, playerToken);

	// Update player count
	broadcastPlayerCount(game.playerCount);
	client.onClosed = () => {
		broadcastPlayerCount(game.playerCount);
	};
});
wsServer.listen(wsPort, () => console.log(`WebSocket server listening on port ${wsPort}.`));
