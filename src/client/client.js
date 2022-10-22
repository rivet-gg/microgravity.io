// Setup config
const config = require('../config/config');
config.init(false);

const GameClient = require('./GameClient');

// Parse the URL and clear the query
let params = new URLSearchParams(location.search);
let partyAlias = params.get('p');
let lobbyId = params.get('l');
console.log('Parsed URL params', { partyAlias, lobbyId });
window.history.replaceState({}, document.title, '/');

// Create game
const game = new GameClient();
game.autoJoinPartyAlias = partyAlias;
game.autoJoinLobbyId = lobbyId;

window.addEventListener('load', () => game.start());
