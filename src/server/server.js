const config = require('../config/config');
config.isServer = true;

const { RivetClient } = require('@rivet-gg/api');
const GameServer = require('./GameServer');
const url = require('url');
const crypto = require('crypto');

const express = require('express');
const WebSocket = require('ws');
var cors = require('cors');

const nocache = require('nocache');

let rivet = null;
if (config.isProd) {
	rivet = new RivetClient({
		environment: process.env.RIVET_API_ENDPOINT,
		token: process.env.RIVET_TOKEN
	});
	rivet.matchmaker.lobbies.ready({}).catch(err => {
		console.error('Failed to register lobby', err);
		process.exit(1);
	});
}

function sampleCPU(ms = 1000) {
	return new Promise(resolve => {
		// Get the starting usage
		const previousValue = process.cpuUsage();

		// Resolve result after x ms
		setTimeout(() => resolve(process.cpuUsage(previousValue)), ms);
	});
}

// Create game
const game = new GameServer();

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
	if (rivet) {
		if (playerToken) {
			try {
				await rivet.matchmaker.players.connected({ playerToken });
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

	// Add event on close
	client.onClosed = async () => {
		if (rivet) {
			try {
				await rivet.matchmaker.players.disconnected({ playerToken });
			} catch (err) {
				console.warn('Failed to disconnect player', err);
			}
		}
	};
});
wsServer.listen(wsPort, () => console.log(`WebSocket server listening on port ${wsPort}.`));
