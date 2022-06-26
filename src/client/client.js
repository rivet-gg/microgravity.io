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

// Parse the URL and clear the query
let params = new URLSearchParams(location.search);
console.log(params);
let partyCode = params.get("p");
let lobbyId = params.get("l");
console.log('Parsed URL params', {partyCode, lobbyId});
window.history.replaceState({}, document.title, "/");

// Create game
const game = new GameClient(partyCode);
game.autoJoinPartyCode = partyCode;

// Start connection
function start() {
	connectToLobby(lobbyId);
}

window.addEventListener('load', start);

async function connectToLobby(lobbyId, captcha = null) {
	document.querySelector('#hCaptcha').style.display = 'none';

	let lobby = null;
	try {
		if (lobbyId) {
			console.log('Joining lobby', lobbyId);
			let res = await matchmakerApi.joinLobby({
				lobbyId,
				captcha,
			});
			lobby = res.lobby;

			// TODO: Handle lobby not found
		} else {
			console.log('Finding lobby');
			let res = await matchmakerApi
				.findLobby({
					gameModes: ['default'],
					preventAutoCreateLobby: false,
					captcha,
				});
			lobby = res.lobby;
		}
	} catch (err) {
		// Request captcha on error
		if (err.code == 'CAPTCHA_REQUIRED') {
			document.querySelector('#hCaptcha').style.display = 'flex';

			hcaptcha.render('hCaptcha', {
				sitekey: err.metadata.hcaptcha.site_id,
				callback: clientResponse => {
					connectToLobby(lobbyId, clientApi, {
						hcaptcha: {
							clientResponse
						}
					});
				}
			});
		} else {
			console.error('Failed to find lobby:', err);
			alert(`Failed to find lobby: ${err.code}`);
		}
	}

	if (!lobby) throw 'Missing lobby';
	console.log('Found lobby', lobby);
	game.connectSocket(lobby);
}

