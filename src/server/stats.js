const config = require('../config/config');
let redis;
if (config.isServer) {
	redis = require('redis');
}

module.exports = {
	gameScheme: '',
	redisUrl: null,
	pendingTallies: {},
	pendingHashTallies: [],

	get isActive() {
		return this.redisUrl != null;
	},

	start(gameScheme, redisUrl) {
		if (redisUrl == null) {
			console.log('Stat tracking is disabled');
		}

		// Save the config
		this.gameScheme = gameScheme;
		this.redisUrl = redisUrl;

		// Start the timer to commit changes
		setInterval(() => {
			try {
				this.commit();
			} catch (e) {
				console.error('Error committing stats:');
				console.error(e);
			}
		}, 15 * 1000);
	},

	commit() {
		if (!this.isActive) return;

		// Create a client
		let client = redis.createClient(this.redisUrl);

		// Increment the tallies
		let multi = client.multi();
		for (let key in this.pendingTallies) {
			let count = this.pendingTallies[key];
			multi.incrby(key, count);
		}

		// Increment the hash tallies
		for (let [key, hashKey, count] of this.pendingHashTallies) {
			multi.hincrby(key, hashKey, count);
		}

		// Commit
		multi.exec((err, replies) => {
			if (err) console.error('Redis responded with error:', err);
			client.quit();
		});

		// Clear the tallies
		this.pendingTallies = {};
		this.pendingHashTallies = [];
	},

	fetchStats() {
		if (!this.isActive) return Promise.resolve([]);

		return new Promise((resolve, reject) => {
			// Create a client
			let client = redis.createClient(this.redisUrl);

			// Get the keys
			client.keys(this.getKey('*'), (err, statKeys) => {
				if (err) {
					client.quit();
					reject(err);
					return;
				}

				client.mget(statKeys, (err, statValues) => {
					if (err) {
						client.quit();
						reject(err);
						return;
					}

					// Map the keys to the values
					let responses = statValues.map((v, i) => [statKeys[i], v]);

					// Find the keys that are missing and get the hash map
					let pendingValues = 0;
					let pendingCompleted = 0;
					for (let i = 0; i < responses.length; i++) {
						let response = responses[i];
						let key = response[0];
						if (response[1] != null) continue; // Skip this since it has a value
						if (key.indexOf('server-stats') !== -1) continue; // Skip server stats, since that's a list

						// TODO: Use `TYPE` to get the type and read appropriate data

						// Assume that value is a hash instead and get all the values
						client.hgetall(key, (err, hashMap) => {
							if (err) {
								client.quit();
								reject(err);
								return;
							}

							// Save to responses
							response[1] = hashMap;

							// Completed
							pendingCompleted++;

							// Handle complete
							if (pendingCompleted === pendingValues) {
								client.quit();
								resolve(responses);
							}
						});

						// Add to pending
						pendingValues++;
					}

					// response.sort((a, b) => a[0] - b[0]);  // Sort alphabetically

					// Resolve immediately if no values pending
					if (pendingValues === 0) {
						client.quit();
						resolve(responses);
					}
				});
			});
		});
	},

	logServerStats(serverKey, data) {
		if (!this.isActive) return;

		// Create a client
		let client = redis.createClient(this.redisUrl);

		// Get the keys
		client.lpush(this.getKey(`server-stats:${serverKey}`), JSON.stringify(data), err => {
			if (err) console.error('Log server stats error:', err);
			client.quit();
		});
	},

	fetchServerStatsHistory(serverKey, length) {
		return new Promise((resolve, reject) => {
			// Create a client
			let client = redis.createClient(this.redisUrl);

			// Get the stats
			client.lrange(this.getKey(`server-stats:${serverKey}`), 0, length, (err, statKeys) => {
				if (err) {
					client.quit();
					reject(err);
					return;
				}

				statKeys = statKeys.map(k => JSON.parse(k));
				client.quit();
				resolve(statKeys);
			});
		});
	},

	getKey(key) {
		return `mg-stats:${this.gameScheme}:${key}`;
	},

	tally(key, count = 1) {
		// Get the redis key
		key = this.getKey(key);

		// Update the pending tallies
		if (this.pendingTallies[key]) {
			this.pendingTallies[key] += count;
		} else {
			this.pendingTallies[key] = count;
		}
	},

	hashTally(key, hashKey, count = 1) {
		// Get the redis key
		key = this.getKey(key);

		// Save the tally
		this.pendingHashTallies.push([key, hashKey, count]);
	},

	tallyPlay(username, selectedShip, selectedFill) {
		this.tally('plays');
		this.tally(`ships:${selectedShip}`);
		this.tally(`fills:${selectedFill}`);
		this.tally(`ship-fills:${selectedShip}:${selectedFill}`);
		this.hashTally('usernames', username);
	},
	tallyAdReward() {
		this.tally('ad-rewards');
	},
	tallyPlayerKill() {
		this.tally('player-kills');
	},
	tallyBotKill() {
		this.tally('bot-kills');
	},
	tallyAsteroidDestroy() {
		this.tally('asteroid-destroys');
	},
	tallyFire(weaponId) {
		this.tally(`fire:${weaponId}`);
	},
	tallyPoints(type, points) {
		this.tally(`points:${type}`, points);
	},
	tallyBuild(structureId) {
		this.tally(`build:${structureId}`);
	},
	tallyCreateAlliance(name) {
		this.tally('alliances-created');
		this.hashTally('alliance-names', name);
	},
	tallyJoinAlliance() {
		this.tally('alliance-joins');
	},
	tallyMessage() {
		this.tally('messages');
	},
	tallyAdminFails() {
		this.tally('admin-fails');
	},
	tallyUpgrade(rank, index) {
		this.tally(`upgrades:${rank}:${rank}`);
	}
};
