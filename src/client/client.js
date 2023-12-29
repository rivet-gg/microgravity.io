// Setup config
const config = require('../config/config');
config.init(false);

const GameClient = require('./GameClient');

// Parse the URL and clear the query
let params = new URLSearchParams(location.search);
let lobbyId = params.get('l');
console.log('Parsed URL params', { lobbyId });
window.history.replaceState({}, document.title, '/');

// Create game
const game = new GameClient();
game.autoJoinLobbyId = lobbyId;

window.addEventListener('load', () => game.start());
