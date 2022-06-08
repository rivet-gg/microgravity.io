// Setup config
const config = require('../config/config');
config.isClient = true;

const api = require('../api');
const GameClient = require('./GameClient');

// Create game
const game = new GameClient();

// Start connection
function start() {
	if (config.isProd) {
		// Find lobby
		let rivet = require('@rivet-gg/matchmaker');

		const clientApi = new rivet.MatchmakerService({
			endpoint: ENV_API_MATCHMAKER_URL ?? 'https://matchmaker.api.rivet.gg/v1',
			tls: true,
			requestHandler: api.requestHandlerMiddleware()
		});

		let res = clientApi
			.findLobby({
				gameModes: ['default'],
				preventAutoCreateLobby: false
			})
			.then(res => {
				console.log('Found lobby', res);
				if (!res.lobby) throw 'Missing lobby';
				let port = res.lobby.ports['default'];
				game.connectSocket(port.hostname, port.port, port.isTls, 0, res.lobby.player.token);
			})
			.catch(err => {
				console.error('Failed to find lobby:', err);
				alert('Failed to find lobby:' + JSON.stringify(err));
				return;
			});
	} else {
		// Create dev socket
		game.connectSocket('127.0.0.1', 8008, false, 0);
	}
}

window.addEventListener('load', start);
