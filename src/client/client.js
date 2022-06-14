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
		let mm = require('@rivet-gg/matchmaker');

		const clientApi = new mm.MatchmakerService({
			endpoint: ENV_API_MATCHMAKER_URL ?? 'https://matchmaker.api.rivet.gg/v1',
			tls: true,
			maxAttempts: 0,
			requestHandler: api.requestHandlerMiddleware()
		});

		connectToLobby(clientApi);
	} else {
		// Create dev socket
		game.connectSocket('127.0.0.1', 8008, false, 0);
	}
}

window.addEventListener('load', start);

function connectToLobby(clientApi, captcha) {
	document.querySelector('#hCaptcha').style.display = 'none';

	clientApi
		.findLobby({
			gameModes: ['default'],
			preventAutoCreateLobby: false,
			captcha
		})
		.then(res => {
			console.log('Found lobby', res);
			if (!res.lobby) throw 'Missing lobby';
			let port = res.lobby.ports['default'];
			game.connectSocket(port.hostname, port.port, port.isTls, 0, res.lobby.player.token);
		})
		.catch(err => {
			// Request captcha on error
			if (err.code == 'CAPTCHA_REQUIRED') {
				document.querySelector('#hCaptcha').style.display = 'flex';

				hcaptcha.render('hCaptcha', {
					sitekey: err.metadata.hcaptcha.site_id,
					callback: clientResponse => {
						connectToLobby(clientApi, {
							hcaptcha: {
								clientResponse
							}
						});
					}
				});
			} else {
				console.error('Failed to find lobby:', err);

				delete err.$metadata;
				alert('Failed to find lobby:' + JSON.stringify(err));
			}
		});
}
