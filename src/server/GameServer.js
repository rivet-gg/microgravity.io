const Game = require('../Game');
const ClientHandle = require('./ClientHandle');
const BotHandle = require('./BotHandle');
const Asteroid = require('../entities/Asteroid');
const Planet = require('../entities/Planet');
const Wormhole = require('../entities/Wormhole');
const utils = require('../utils');
const config = require('../config/config');
const Alliance = require('./Alliance');
const planetNames = require('../config/planet-names.json');
const stats = require('./stats');

/**
 * @callback queryCallback
 * @param {Entity} entity
 */

class GameServer extends Game {
	get playerCount() {
		return this.clients.length;
	}

	constructor() {
		super();

		/** @type {ClientHandle[]} */ this.clients = [];

		/** @type {BotHandle[]} */ this.bots = [];

		/** @type {Alliance[]} */ this.alliances = {};

		/** @type {number} */ this.entityIdCounter = 1; // Start at 1 so `!!` truthy can be used

		/** @type {number} */ this.lastUpdateDuration = 0; // How long did the last update loop take
		/** @type {number} */ this.lastUpdateInterval = 0; // How long between updates
		/** @type {number} */ this.lastUpdateStartTime = 0; // Used to determine if new update should fire and for `lastUpdateInterval`eS

		// Init world
		this.initWorld();

		// Add bots
		for (let i = 0; i < config.botCount; i++) {
			this.bots.push(new BotHandle(this));
		}

		// Start update loop
		setInterval(() => {
			// Execute the update in a safe block
			try {
				this.update(GameServer.dt);
			} catch (error) {
				console.error('Update error:', this.updateIndex);
				console.error(error);
			}
		}, GameServer.dt * 1000);
	}

	initWorld() {
		// Add planets before anything else for spawn point
		this.generatePlanets();

		// Add asteroids
		for (let i = 0; i < config.asteroidCount; i++) {
			this.spawnAsteroid();
		}
	}

	generatePlanets() {
		// Add center planet
		let centerPlanet = new Planet(this);
		centerPlanet.name = 'Terra';
		centerPlanet.radius = config.centerPlanetRadius;
		centerPlanet.atmosphereSize = config.centerPlanetAtmosphereSize; // Larger atmosphere
		centerPlanet.resourceMax = centerPlanet.resourceMax.map(() => config.centerPlanetResourceMap);
		centerPlanet.resourceGenerationRate = centerPlanet.resourceGenerationRate.map(
			() => config.centerPlanetResourceGenRate
		);
		this.insertEntity(centerPlanet);

		let planetCount = config.planetCount;
		let minPlanetRadius = config.minPlanetRadius;
		let maxPlanetRadius = config.maxPlanetRadius;
		let minDistance = centerPlanet.radius + maxPlanetRadius + 200;
		let maxDistance = config.mapSize / 2 - minPlanetRadius;
		let minTotalResourceMax = config.planetTotalResourceMaxMin;
		let maxTotalResourceMax = config.planetTotalResourceMaxMax;
		let minTotalGenRate = config.planetTotalRegenRateMin;
		let maxTotalGenRate = config.planetTotalRegenRateMax;

		// Add outer planets
		for (let i = 0; i < planetCount; i++) {
			let distanceProgress = i / (planetCount - 1);
			// distanceProgress = utils.easingFunctions.easeOutQuad(distanceProgress);
			distanceProgress = 1 - Math.pow(1 - distanceProgress, 1.3);
			let distance = utils.lerp(minDistance, maxDistance, distanceProgress);

			// Create planet
			let planet = new Planet(this);
			planet.name = planetNames[i];
			let radiusProgress = (1 - distanceProgress) * (1 - Math.random() * 0.8);
			planet.radius = utils.lerp(minPlanetRadius, maxPlanetRadius, radiusProgress);
			planet.atmosphereSize = Math.max(config.minPlanetAtmosphereSize, planet.radius * 0.2);

			// Choose max resources; this will choose max values that will all add up to `maxResourceMax`
			let totalResourceMax = utils.lerp(minTotalResourceMax, maxTotalResourceMax, 1 - distanceProgress);
			planet.resourceMax = planet.resourceMax.map(() => Math.random());
			let resourceMaxMultiplier = (1 / planet.resourceMax.reduce((t, n) => t + n)) * totalResourceMax;
			planet.resourceMax = planet.resourceMax.map(v => Math.floor(v * resourceMaxMultiplier));

			// Choose generation rate; same as for max values
			let totalGenRate = utils.lerp(minTotalGenRate, maxTotalGenRate, 1 - distanceProgress);
			planet.resourceGenerationRate = planet.resourceGenerationRate.map(() => Math.random());
			let resourceGenRateMultiplier =
				(1 / planet.resourceGenerationRate.reduce((t, n) => t + n)) * totalGenRate;
			planet.resourceGenerationRate = planet.resourceGenerationRate.map(
				v => v * resourceGenRateMultiplier
			);

			// Find angle to spawn planet
			let spawnAngle;
			while (true) {
				// Determine if collides
				spawnAngle = Math.random() * Math.PI * 2;

				// Update position
				planet.x = Math.cos(spawnAngle) * distance;
				planet.y = Math.sin(spawnAngle) * distance;

				// Check if collides
				planet._updateBound();
				let doesCollide = false;
				this.queryBound(planet.bound, entity => {
					// Flag as collides
					doesCollide = doesCollide || utils.entitiesCollide(entity, planet, false);
				});

				// If no collisions, stop
				if (!doesCollide) {
					break;
				}
			}

			if (config.wormholes[i]) {
				// Replace planet with wormhole
				let wormhole = new Wormhole(this);
				wormhole.x = planet.x;
				wormhole.y = planet.y;
				wormhole.radius = planet.radius;
				wormhole.timeMultiplier = config.wormholes[i];
				this.insertEntity(wormhole);
			} else {
				// Insert to world
				this.insertEntity(planet);
			}
		}
	}

	spawnAsteroid() {
		let asteroid = new Asteroid(this, true);
		[asteroid.x, asteroid.y] = this.chooseSpawnPoint(asteroid.radius);
		this.insertEntity(asteroid);
	}

	chooseSpawnPoint(radius = 0, spawnPadding = 5, infiniteTries = false) {
		let totalRadius = radius + spawnPadding;
		let mapSize = config.mapSize - totalRadius;

		// Attempt to choose point
		for (let i = 0; infiniteTries || i < 30; i++) {
			// Find a point
			let xPos = (Math.random() - 0.5) * mapSize;
			let yPos = (Math.random() - 0.5) * mapSize;

			// Check if in circle
			if (utils.dist(xPos, yPos) > mapSize / 2) {
				// This shouldn't count as a "try" since it's easy to get a point in a circle
				i--;

				// Next attempt
				continue;
			}

			// Check if it collides with any entity in the lobby
			let overlaps = false;
			this.queryCircle(xPos, yPos, totalRadius, entity => {
				overlaps = true;
			});
			if (overlaps) continue;

			// If not, return position
			return [xPos, yPos];
		}

		// Failed to find point
		console.trace('Failed to find spawn point.');
		return [0, 0];
	}

	playerToSpectate() {
		// Find all players
		let players = [];
		for (let entityId in this.entities) {
			let entity = this.entities[entityId];
			if (entity.isPlayer && entity.clientHandle) players.push(entity);
		}

		// Return random player
		return players[Math.floor(Math.random() * players.length)];
	}

	broadcastLeaderboard() {
		// Sort clients and serialize scores
		let leaderboard = this.clients
			.sort((a, b) => b.score - a.score)
			.map(client => {
				return [
					client.id,
					client.alliance ? client.alliance.id : null,
					client.username,
					client.score
				];
			});

		// Send leaderboard
		for (let client of this.clients) {
			client.sendLeaderboard(leaderboard);
		}
	}

	broadcastMinimap() {
		// Send to each client
		for (let client of this.clients) {
			client.sendMinimap();
		}
	}

	broadcastMessage(client, message) {
		let player = client.player;
		if (!player) {
			console.warn('No player.');
			return;
		}

		for (let client of this.clients) {
			client.sendMessage(player, message);
		}
	}

	update(dt) {
		// Get start time
		let updateStartTime = Date.now();

		// Calculate time different
		this.lastUpdateInterval = updateStartTime - this.lastUpdateStartTime;
		this.lastUpdateStartTime = updateStartTime;

		// Broadcast leaderboards
		if (this.updateIndex % 10 === 0) {
			this.broadcastLeaderboard();
		}

		// Broadcast minimap
		if (this.updateIndex % 30 === 0) {
			this.broadcastMinimap();
		}

		// Make sure there are enough asteroids
		if (this.updateIndex % 10 === 0) {
			// Count asteroids
			let asteroidCount = 0;
			for (let entityId in this.entities) {
				let entity = this.entities[entityId];
				if (entity.isAsteroid) asteroidCount++;
			}

			// Add required asteroids
			for (let i = 0; i < config.asteroidCount - asteroidCount; i++) {
				this.spawnAsteroid();
			}
		}

		// Clear entity serialization caches
		this._entitySerializeInitCache = {};
		this._entitySerializeUpdateCache = {};

		// Update clients
		for (let client of this.clients) {
			client.update(dt);
		}

		// Update bots
		for (let bot of this.bots) {
			bot.update(dt);
		}

		// Update super
		super.update(dt);

		// Send update to clients
		for (let client of this.clients) {
			client.sendUpdate();
		}

		// Clear pruned entities
		this.prunedEntities = {};

		// Save update time
		this.lastUpdateDuration = Date.now() - updateStartTime;
	}

	socketConnected(ws) {
		// Create and save client
		let client = new ClientHandle(ws, this);
		this.clients.push(client);
		return client;
	}

	/**
	 * @param {ClientHandle} client
	 */
	clientDisconnected(client) {
		// Remove from client
		let clientIndex = this.clients.indexOf(client);
		if (clientIndex !== -1) {
			this.clients.splice(clientIndex, 1);
		} else {
			throw new Error('Client does not exist.');
		}

		// Remove all structures
		for (let entityId in this.entities) {
			let entity = this.entities[entityId];

			// Destroy structures
			if (entity.isStructure && entity.clientOwner === client) {
				entity.destroy();
			}
		}
	}

	fireWeapon(weapon, shooter, timeOffset = 0) {
		// Fire the bullet
		let bullets = weapon.fire(shooter, timeOffset);

		// Insert the bullet(s) in to the game if exists
		if (bullets != null) {
			if (Array.isArray(bullets)) {
				// Insert all bullets
				for (let i = 0; i < bullets.length; i++) {
					let bullet = bullets[i];
					bullet.bulletSpawnIndex = i;
					this.insertEntity(bullet);
				}
			} else {
				// Single bullet returned
				bullets.bulletSpawnIndex = 0;
				this.insertEntity(bullets);
			}
		}

		// Tally
		stats.tallyFire(weapon.id);

		return bullets;
	}

	createAlliance(owner, name) {
		// Create alliance
		let alliance = new Alliance(this, owner, name);

		// Don't add if there's already an alliance with the name
		for (let allianceId in this.alliances) {
			if (this.alliances[allianceId].name === alliance.name) return null;
		}

		// Set alliance on owner
		owner.alliance = alliance;
		alliance.refreshState();

		// Save to alliance list
		this.alliances[alliance.id] = alliance;
		this.updateAlliances();

		return alliance;
	}

	generateAllianceData() {
		// Create data
		let alliances = [];
		for (let allianceId in this.alliances) {
			let alliance = this.alliances[allianceId];
			alliances.push([
				alliance.id,
				alliance.owner && alliance.owner.id,
				alliance.name,
				alliance.clients.length,
				alliance.clients.map(c => c.id)
			]);
		}
		alliances.sort((a, b) => b[2] - a[2]); // Sort from most to least players

		return alliances;
	}

	updateAlliances() {
		// Update alliances
		let needsListUpdate = false;
		for (let allianceId in this.alliances) {
			let alliance = this.alliances[allianceId];

			// Handles needs update
			if (alliance.needsUpdate) {
				alliance.needsUpdate = false;
				needsListUpdate = true;
			}

			// Remove alliance if needed
			if (alliance.clients.length === 0) {
				delete this.alliances[allianceId];
			}
		}

		// Send update to alliances
		if (needsListUpdate) {
			// Send to clients
			let alliances = this.generateAllianceData();
			for (let client of this.clients) {
				client.sendAllianceList(alliances);
			}
		}
	}

	spawnExplosion(x, y, radius, source, damage, velocity, cb) {
		// Find all affected entities
		let affectedEntities = []; // Store in a list, since we can't destroy entities while iterating through it
		this.queryCircle(x, y, radius, entity => {
			// Check if should affect
			let shouldAffect = cb ? cb(entity) : true;
			if (shouldAffect) affectedEntities.push(entity);
		});

		// Handle the entities
		for (let entity of affectedEntities) {
			// Push entity
			let angle = Math.atan2(entity.y - y, entity.x - x);
			entity.setVelocity(Math.cos(angle) * velocity, Math.sin(angle) * velocity);

			// Damage entity
			if (entity.health !== null) {
				utils.damageEntity(source, entity, damage);
			}
		}
	}

	/**
	 * Serializes an entity with an optional init flag. Serialized entity data is cached every update, so there isn't
	 * extra data serialized if an entity is being sent to many clients. This method will looked for any cached
	 * serialized data. If none exists, it will serialize the entity, cache it, and return the new data.
	 * @param {number} entityId
	 * @param {boolean} init
	 * @returns {Object}
	 */
	serializeEntity(entityId, init) {
		// Check for cached data for each entity serialization; if none, serialize, cache, and return new data
		if (init) {
			if (this._entitySerializeInitCache[entityId]) {
				// Return existing serialization
				return this._entitySerializeInitCache[entityId];
			} else {
				// Serialize, cache, and return new data
				let data = this.entities[entityId].serializeInit();
				this._entitySerializeInitCache[entityId] = data;
				return data;
			}
		} else {
			if (this._entitySerializeUpdateCache[entityId]) {
				// Return existing serialization
				return this._entitySerializeUpdateCache[entityId];
			} else {
				// Serialize, cache, and return new data
				let data = this.entities[entityId].serialize();
				this._entitySerializeUpdateCache[entityId] = data;
				return data;
			}
		}
	}
}

GameServer.dt = 1 / 12; // 12 ticks/s

module.exports = GameServer;
