const Player = require('../entities/Player');
const utils = require('../utils');
const weapons = require('../config/weapons');
const config = require('../config/config');

class BotHandle {
	constructor(game) {
		// Save game
		/** @type {Game} */ this.game = game;

		/** @type {?Player} */ this.player = null;

		// Generate username
		this.username = '';

		// Spawn timer
		this.spawnTimer = 0;

		// Targeting
		/** @type {?Player} */ this.target = null;
		this.retargetTimer = 0;
	}

	spawn() {
		// Find all valid weapons
		let validWeapons = weapons.weapons.filter(w => w.botWeapon);
		let chosenWeapon = validWeapons[Math.floor(Math.random() * validWeapons.length)];
		let weaponIndex = weapons.weapons.indexOf(chosenWeapon);

		// Create new player
		this.player = new Player(this.game);
		this.player.botHandle = this;
		this.player.username = this.username;
		this.player.shipIndex = config.shipIndexForId('alien');
		this.player.shipFill = '#C2FFDF';
		this.player.weaponIndex = weaponIndex; // Add random weapon
		[this.player.x, this.player.y] = this.game.chooseSpawnPoint(this.player.radius);
		this.game.insertEntity(this.player);

		// Reset spawn timer
		this.spawnTimer = 2 + Math.random() * 4;
		this.retargetTimer = 0;
		this.target = null;
	}

	seekTarget() {
		if (!this.player) return;

		// Find the closest player within range
		let closestDistance = null;
		let closestPlayer = null;
		this.game.queryCircle(this.player.x, this.player.y, config.viewDistanceX / 2, entity => {
			// Validate player
			if (!entity.isPlayer || entity.id === this.player.id) return;

			// Validate it's a client (comment this out to allow bots to fight each other)
			if (!entity.clientHandle) return;
			// Check if closer
			let dist = utils.dist(entity.x, entity.y, this.player.x, this.player.y);
			if (closestDistance == null || dist < closestDistance) {
				closestDistance = dist;
				closestPlayer = entity;
			}
		});

		// Set the target
		this.target = closestPlayer;
		this.retargetTimer = 3;
	}

	update(dt) {
		if (this.player && !this.player.destroyed) {
			// Retarget if needed
			this.retargetTimer = Math.max(this.retargetTimer - dt, 0);
			if (this.retargetTimer <= 0 || !this.target || this.target.destroyed) {
				this.seekTarget();
			}

			// Make sure the target exists
			if (!this.target) {
				this.player.moveDir = 0;
				this.player.moveSpeed = 0;
				this.player.firing = false;
				this.player.sprinting = false;
				return;
			}

			// Sprint when has target
			this.player.sprinting = config.aliens;

			// Turn towards target
			let targetDir = -Math.atan2(this.target.y - this.player.y, this.target.x - this.player.x);
			this.player.targetRot += utils.turnDir(this.player.targetRot, targetDir) * Math.PI * 0.1;

			// Move towards target
			let dist = utils.dist(this.player.x, this.player.y, this.target.x, this.target.y);
			let dirDiff = utils.dirDiff(this.player.rot, targetDir);
			let moveDir = -this.player.targetRot; // Move in a straight line
			if (dist > 300) {
				this.player.moveDir = moveDir;
				this.player.moveSpeed = 1;
			} else if (dist < 250) {
				this.player.moveDir = moveDir + Math.PI;
				this.player.moveSpeed = 1;
			} else {
				this.player.moveSpeed = 0;
			}

			// Determine if to fire if visible and aiming correctly
			this.player.firing = dist < config.viewportHeight * 0.75 && Math.abs(dirDiff) < Math.PI * 0.1;

			// Move away from planet if needed
			if (this.player.overlappingPlanet) {
				let planet = this.player.overlappingPlanet;
				this.player.targetRot = -Math.atan2(this.player.y - planet.y, this.player.x - planet.x);
				this.player.moveDir = Math.atan2(
					this.player.y - this.player.overlappingPlanet.y,
					this.player.x - this.player.overlappingPlanet.x
				);
				this.player.moveSpeed = 1;
			}
		} else {
			// Spawn if needed
			this.spawnTimer = Math.max(this.spawnTimer - dt, 0);
			if (this.spawnTimer <= 0) {
				this.spawn();
			}
		}
	}
}

module.exports = BotHandle;
