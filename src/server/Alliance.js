class Alliance {
	constructor(game, owner, name) {
		/** @type {number} */ this.id = Alliance._idCounter++;

		/** @type {GameServer} */ this.game = game;

		/** @type {string} */ this.name = name.slice(0, 5);

		/** @type {ClientHandle} */ this.owner = owner;

		/** @type {ClientHandle[]} */ this.joinRequests = [];

		/** @type {ClientHandle[]} */ this.clients = [owner];

		this.needsUpdate = true;
	}

	refreshState() {
		// Remove old clients
		for (let i = this.clients.length - 1; i >= 0; i--) {
			let client = this.clients[i];
			if (client.alliance !== this) {
				this.clients.splice(i, 1);
				this.needsUpdate = true;
			}
		}

		// Add missing clients
		for (let client of this.game.clients) {
			if (client.alliance === this && this.clients.indexOf(client) === -1) {
				this.clients.push(client);
				this.needsUpdate = true;
			}
		}

		// Check if owner still in list
		if (this.clients.indexOf(this.owner) === -1) {
			this.owner = this.clients[0];
			this.needsUpdate = true;
		}

		// Send new alliance
		if (this.needsUpdate) {
			for (let client of this.clients) {
				client.sendAllianceData();
			}
		}
	}

	addJoinRequest(client) {
		// Make sure not already in it
		if (this.joinRequests.indexOf(client) !== -1) return;

		// Add request
		this.joinRequests.push(client);

		// Send new requests
		this.owner.sendAllianceJoinRequest();
	}

	resolveJoinRequest(clientId, accept) {
		let index = this.joinRequests.findIndex(c => c.id === clientId);
		if (index === -1) return; // Not in requests
		let client = this.joinRequests[index];
		this.joinRequests.splice(index, 1); // Remove request
		this.owner.sendAllianceJoinRequest(); // Send new requests
		if (client.alliance) return; // Already in alliance

		// Join alliance
		if (accept) client.joinAlliance(this);
	}
}

Alliance._idCounter = 1;

module.exports = Alliance;
