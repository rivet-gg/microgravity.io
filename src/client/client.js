// Setup config
const config = require('../config/config');
config.isClient = true;

const api = require('../api');
const GameClient = require('./GameClient');

let matchmaker = require('@rivet-gg/matchmaker');
const matchmakerApi = new matchmaker.MatchmakerService({
	endpoint: process.env.RIVET_MATCHMAKER_API_URL ?? 'https://matchmaker.api.rivet.gg/v1',
	tls: true,
	maxAttempts: 0,
	requestHandler: api.requestHandlerMiddleware(process.env.RIVET_CLIENT_TOKEN ?? null),
});

// Create game
const game = new GameClient();

// Start connection
function start() {
	connectToLobby();
}

window.addEventListener('load', start);

function connectToLobby(captcha = null) {
	document.querySelector('#hCaptcha').style.display = 'none';

	matchmakerApi
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
