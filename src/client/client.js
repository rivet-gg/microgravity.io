// Setup config
const config = require("../config/config");
config.isClient = true;

const GameClient = require("./GameClient");

// Create game
const game = new GameClient();

// Start connection
function start() {
    // Update socket
    game.connectSocket("127.0.0.1", 8008, 0);
}

window.addEventListener("load", start);
