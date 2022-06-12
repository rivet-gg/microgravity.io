const Entity = require('./Entity');
const Bullet = require('./Bullet');
const config = require('../config/config');
const weapons = require('../config/weapons');
const utils = require('../utils');
const assets = require('../client/assets');
const upgrades = require('../config/upgrades');

class Player extends Entity {
	get killer() {
		if (this.killerId) {
			return this.game.entityForId(this.killerId);
		} else {
			return null;
		}
	}

	get weapon() {
		return weapons.weapons[this.weaponIndex];
	}

	get ship() {
		return config.ships[this.shipIndex];
	}

	get thrustAngle() {
		if (this.relativeMoveDir) {
			return this.moveDir - this.rot - Math.PI / 2;
		} else {
			return this.moveDir;
		}
	}

	get clientId() {
		return this.clientHandle ? this.clientHandle.id : this._clientId;
	}
	set clientId(id) {
		this._clientId = id;
	}

	get maxSprint() {
		return config.sprintTime * this.getPerkMultiplier('boostAmount');
	}
	get fireInterval() {
		let weapon = this.weapon;
		return weapon.fireInterval * this.getPerkMultiplier(weapon.normalizedId + 'Interval');
	}

	get maxAmmo() {
		return this.getMaxAmmo(this.weaponIndex);
	}
	getMaxAmmo(weaponIndex) {
		let weapon = weapons.weapons[weaponIndex];
		return Math.floor(weapon.maxAmmo * this.getPerkMultiplier(weapon.normalizedId + 'Ammo'));
	}

	constructor(game) {
		super(game);
		this.isPlayer = true;
		this.checkTrail = true;
		this.renderLayers = [5];

		// Handlers
		this.clientHandle = null;
		this.botHandle = null;

		// Configure entity
		this.radius = 20;
		this.checkCollisions = true;

		// Override behavior
		this.overrideTargetRot = null;
		this.useDrag = true; // This property can be overridden (e.g. by planet gravity) to prevent drag in the next frame
		this.useMaxVel = true; // ""
		/** @type {boolean} */ this.isLanded = false;

		// Collisions
		/** @type {?Planet} */ this.overlappingPlanet = null; // This isn't synchronized but can be derived from client
		/** @type {?Structure} */ this.visitingStructure = null; // This isn't synchronized but can be derived from client

		// Username and alliance
		this.username = 'unknown';
		this.shipIndex = Math.floor(Math.random() * config.ships.length);
		this.shipFill = 'white';
		this.allianceId = null;

		// Perks
		this.perks = [];

		// Health
		this.health = 1.0;
		this.lastDamageTime = Date.now(); // Set to now, so new players don't think they're healing on client
		this.healWaitTime = 5;
		this.healPerSecond = 0.075; // hp/s

		// Input data
		this.moveDir = 0;
		this.moveSpeed = 0;
		this.relativeMoveDir = false;
		this.targetRot = 0;
		this.firing = false;
		this.sprinting = false;

		// Weapons
		this.prevWeaponIndex = -1;
		this.weaponIndex = 0;
		this.fireTimer = 0;

		// Shield
		this.shieldTimer = 5.0;

		// Sprint
		this.sprint = this.maxSprint;
		this.lastSprintTime = Date.now();
		this.sprintRegenWait = 2;

		// Rendering
		this.renderLife = 0;

		// The player that killed this player
		this.killerId = null;

		// Thrust sounds
		if (config.isClient) {
			this.thrustVolume = 0;
			this.thrustSprintVolume = 0;
			this.thrustSoundId = assets.playSound('thrust', 0, 0, 0, true);
			this.thrustSprintSoundId = assets.playSound('thrust-sprint', 0, 0, 0, true);
		}
	}

	onInit() {
		if (config.isServer) this.isBot = this.botHandle != null;
	}

	beforeUpdate() {
		// TODO: Move this back; but it doesn't work since it's `isLanded` is send on collision, which is after the update
		// // Clear the planet
		// this.isLanded = false;
		// this.overlappingPlanet = null;
		// this.visitingStructure = null;
	}

	update(dt) {
		// Cap inputs
		this.moveDir = utils.modFix(this.moveDir, Math.PI * 2);
		this.moveSpeed = utils.clamp(this.moveSpeed, 0, 1);

		// Update shield
		this.shieldTimer = Math.max(this.shieldTimer - dt, 0);

		// Update sprint
		if (this.sprinting && this.moveSpeed > 0.1) {
			// Remove sprint
			this.sprint = Math.max(this.sprint - dt, 0);
			this.lastSprintTime = Date.now();
		} else if (this.isLanded || (Date.now() - this.lastSprintTime) / 1000 >= this.sprintRegenWait) {
			// Regen sprint if on planet or waited long enough since sprint
			this.sprint = Math.min(this.sprint + dt, this.maxSprint);
		}
		let isSprinting = this.sprinting && this.sprint > 0;

		// Heal if on planet or been long enouch since last damage
		if (
			config.isServer &&
			(this.isLanded || (Date.now() - this.lastDamageTime) / 1000 >= this.healWaitTime)
		) {
			this.health = Math.min(this.health + this.healPerSecond * dt, 1);
		}

		// Turn towards target
		let targetRot = this.targetRot;
		if (this.overrideTargetRot != null) {
			targetRot = this.overrideTargetRot;
			this.overrideTargetRot = null; // Clear for next update
		}
		this.setRotation(targetRot);

		// Apply movement
		let thrustAngle = this.thrustAngle;
		let thrustMultiplier =
			this.moveSpeed *
			(isSprinting
				? config.playerSprintingAcceleration * this.getPerkMultiplier('boostSpeed')
				: config.playerAcceleration * this.getPerkMultiplier('moveSpeed')) *
			dt;
		// if (this.isBot && !this.overlappingPlanet) thrustMultiplier *= 0.6;
		this.addVelocity(Math.cos(thrustAngle) * thrustMultiplier, Math.sin(thrustAngle) * thrustMultiplier);

		if (this.useDrag) {
			// Apply drag
			if (this.moveSpeed < 0.1) {
				this.addVelocity(-this.velX * config.playerDrag * dt, -this.velY * config.playerDrag * dt);
			}
		} else {
			// Set to true for next frame
			this.useDrag = true;
		}

		if (this.useMaxVel) {
			// Apply max velocity
			let velAngle = Math.atan2(this.velY, this.velX);
			let velMagnitude = utils.dist(this.velX, this.velY);
			let maxSpeed = isSprinting
				? config.playerMaxSprintVelocity * this.getPerkMultiplier('boostSpeed')
				: config.playerMaxVelocity * this.getPerkMultiplier('moveSpeed');
			if (this.overlappingPlanet) maxSpeed *= 2.5;
			if (velMagnitude > maxSpeed) {
				velMagnitude = utils.lerp(velMagnitude, maxSpeed, 3 * dt);
			}
			this.setVelocity(Math.cos(velAngle) * velMagnitude, Math.sin(velAngle) * velMagnitude);
		} else {
			// Set true for next fra,e
			this.useMaxVel = true;
		}

		// Update sound
		if (config.isClient) {
			let lerpSpeed = 4;
			let maxVolume = this.game.playerId === this.id || this.game.spectateId === this.id ? 0.2 : 0.4; // Make main player quieter

			// Get state
			let isThrusting = this.moveSpeed > 0.1;
			let isSprinting = this.sprinting && this.sprint > 0;

			// Update volume values
			this.thrustVolume = utils.lerp(
				this.thrustVolume,
				isThrusting && !isSprinting ? maxVolume : 0,
				lerpSpeed * dt
			);
			this.thrustSprintVolume = utils.lerp(
				this.thrustSprintVolume,
				isThrusting && isSprinting ? maxVolume : 0,
				lerpSpeed * dt
			);

			// Set volume and position
			assets.soundVol(this.thrustSoundId, this.thrustVolume, this.x, -this.y);
			assets.soundVol(this.thrustSprintSoundId, this.thrustSprintVolume, this.x, -this.y);
		}

		super.update(dt);

		// Reset fire timer if needed
		if (this.weaponIndex !== this.prevWeaponIndex) {
			this.prevWeaponIndex = this.weaponIndex;
			this.fireTimer = this.fireInterval;
		}

		// Fire bullets if not landed on planet
		let attemptFire = this.firing && !this.isLanded;
		this.fireTimer = this.fireTimer - dt;
		if (!attemptFire) this.fireTimer = Math.max(this.fireTimer, 0); // Don't let the fire timer go down
		while (this.fireTimer <= 0 && attemptFire) {
			// Fire enough bullets to make up for the lost bullets in the last tick
			this.fireBullet();
		}

		// TODO: Move this to `beforeUpdate`
		// Clear the data
		this.isLanded = false;
		this.overlappingPlanet = null;
		this.visitingStructure = null;
	}

	onRemove() {
		if (config.isClient) {
			assets.soundStop(this.thrustSoundId);
			assets.soundStop(this.thrustSprintSoundId);
		}
	}

	onCollision(entity) {
		if (entity.isPlayer) {
			this.damageFromCollision(entity);
			entity.damageFromCollision(this);
			this.collisionPerkDamage(entity);
			utils.repelEntities(this, entity); // Repelling has padding, so it won't happen again in the same update
		} else if (entity.isAsteroid) {
			this.damageFromCollision(entity);
			this.collisionPerkDamage(entity);
			utils.repelEntities(this, entity);
		} else if (entity.isBullet) {
			// Don't collide with self
			if (entity.shooterEntityId === this.id) return;

			// Destroy bullet; this happens even on the client so bullets don't pass through objects
			entity.destroyBullet();

			// Damage self
			if (config.isServer) {
				let shouldDamage = true;

				// Don't damage if friendly
				if (entity.isBullet && this.isFriendlyClientId(entity.shooterClientId)) shouldDamage = false;

				// Damage entity
				if (shouldDamage) utils.damageEntity(entity, this, entity.damage);
			}
		}
	}

	onDestroy() {
		if (config.isClient) {
			// Spawn explosion
			this.game.explosionManager.spawnExplosion(this.x, -this.y, 250);
		}
	}

	canDamage(damager, damage) {
		return this.shieldTimer <= 0;
	}

	onDamage(damager, damage) {
		this.lastDamageTime = Date.now();
	}

	onKilled(killer) {
		// Set the killer
		if (killer.isPlayer) {
			this.killerId = killer.id;
		} else if (killer.isBullet) {
			this.killerId = killer.shooterEntityId;
		}

		// Get properties
		let clientOwner = utils.clientOwner(killer);
		let killerLabel = utils.killerLabel(killer);

		// Notify killed
		if (clientOwner) {
			clientOwner.killedPlayer(this);
		}

		// Send notification
		if (this.clientHandle && killerLabel) {
			this.clientHandle.sendNotification(config.notificationTypes.DEATH, 'notification-death', [
				killerLabel
			]);
		}
	}

	fireBullet() {
		// Call before fire
		if (this.clientHandle) {
			this.clientHandle.beforeFire();
		}

		// Update timer
		this.fireTimer += this.fireInterval;
		let timeOffset = Math.max(-this.fireTimer, 0);

		// Fire bullet
		if (config.isServer) {
			// Fire bullets
			this.game.fireWeapon(this.weapon, this, timeOffset);
		}

		// Add kickback
		let kickback = this.weapon.kickback * config.playerAcceleration;
		if (kickback) {
			this.addVelocity(
				Math.cos(this.rot + Math.PI) * kickback,
				-Math.sin(this.rot + Math.PI) * kickback
			);
		}
	}

	damageFromCollision(source) {
		// We could find the absolute velocity difference, but we want to penalize the player at high velocities so
		// we just use the player's velocity
		let sourceVelocityBias = 0.2;
		let damageAmount =
			utils.dist(
				source.velX * sourceVelocityBias,
				source.velY * sourceVelocityBias,
				this.velX,
				this.velY
			) * config.playerDamagePerVelocity;
		utils.damageEntity(source, this, damageAmount);
	}

	collisionPerkDamage(target) {
		// Do damage from the collision perk
		if (target.health != null) {
			let collisionDamagePerVelocity = this.getPerkTotal('collisionDamage');
			if (collisionDamagePerVelocity === 0) return;
			let damageAmount =
				utils.dist(this.velX, this.velY, target.velX, target.velY) * collisionDamagePerVelocity;
			utils.damageEntity(this, target, damageAmount);
		}
	}

	isFriendlyClientId(clientId) {
		if (this.isBot) return false;
		if (config.isClient) {
			// Check if matches self
			if (clientId === this.clientId) return true;

			// Check if in same alliance
			if (this.allianceId) {
				let allianceData =
					this.game.allianceList[this.game.allianceList.findIndex(a => a[0] === this.allianceId)];
				if (!allianceData) return false;
				return allianceData[4].indexOf(clientId) !== -1;
			}

			// Not friendly
			return false;
		} else if (config.isServer) {
			return this.clientHandle && this.clientHandle.isFriendly(clientId);
		}
	}

	render(ctx, dt) {
		this.renderLife += dt;

		/* Draw Shield */
		if (this.shieldTimer > 0) {
			ctx.save();

			ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
			if (this.shieldTimer < 2) ctx.globalAlpha = this.shieldTimer % 0.3 > 0.15 ? 1.0 : 0.5; // Blink if needed

			ctx.beginPath();
			ctx.arc(0, 0, this.radius * 2.2, 0, Math.PI * 2);
			ctx.fill();

			ctx.restore();
		}

		/* Draw glow */
		utils.drawGlow(
			ctx,
			this.x,
			this.y,
			this.radius * 6,
			this.allianceId ? utils.getAllianceColor(this.allianceId) : null,
			this.allianceId ? 0.3 : 0.1
		);

		/* Draw body */
		ctx.save();

		// Rotate horizontally to make the XY coords easier to deal with
		ctx.rotate(Math.PI / 2);

		// Draw thrust
		if (this.moveSpeed > 0.1) {
			let fireDepth = this.radius * 1.1;
			let fireWidth = this.radius * 0.8;

			// Handle sprinting
			if (this.sprinting && this.sprint > 0) fireDepth *= 2;

			// Draw levels of the fire
			let fireDistance = this.ship.fireDistance != null ? this.ship.fireDistance : 0.95;
			ctx.save();
			ctx.translate(0, this.radius * fireDistance);
			ctx.fillStyle = '#8C090A';
			this.drawFire(ctx, fireDepth * utils.lerp(0.7, 1.0, Math.random()), fireWidth);
			ctx.fillStyle = '#F4892E';
			this.drawFire(ctx, fireDepth * utils.lerp(0.4, 0.7, Math.random()), fireWidth);
			ctx.fillStyle = 'white';
			this.drawFire(ctx, fireDepth * utils.lerp(0.2, 0.4, Math.random()), fireWidth);
			ctx.restore();
		}

		// Draw side thrust
		let moveCos = Math.cos(this.thrustAngle + this.rot + Math.PI / 2);
		if (Math.abs(moveCos) > 0.3 && this.moveSpeed > 0.1) {
			let sideThrustDepth = this.radius * utils.lerp(0.1, 0.4, Math.random());
			ctx.save();
			ctx.scale(-Math.sign(moveCos), 1);
			ctx.translate(this.radius * 0.7, -this.radius * 0.1);
			ctx.rotate((-Math.PI / 3) * 2);
			ctx.fillStyle = '#F4892E';
			this.drawFire(ctx, sideThrustDepth, this.radius * 0.4);
			ctx.restore();
		}

		// Draw body
		utils.drawShip(ctx, this.ship.id, 0, 0, 32, this.shipFill);

		ctx.restore();

		/* Draw stats */
		ctx.save();

		// Rotate so the name shows appropriately
		if (this.isLanded) {
			let planetAngle = Math.atan2(
				this.y - this.overlappingPlanet.y,
				this.x - this.overlappingPlanet.x
			);
			ctx.rotate(-this.rot - planetAngle + Math.PI / 2);
		} else {
			ctx.rotate(-this.rot);
		}

		// Render health
		utils.renderHealth(ctx, this, 1.0, false);

		// Render name
		let alliance =
			this.game.allianceList &&
			this.game.allianceList[this.game.allianceList.findIndex(a => a[0] === this.allianceId)];
		let allianceName = alliance && alliance[2];
		let fontSize = parseInt(ctx.font.split('px')[0]);
		let usernameWidth = ctx.measureText(this.username).width;
		let usernameY = -this.radius - 40;
		let allianceWidth = 0;
		if (alliance) {
			allianceWidth = ctx.measureText(allianceName).width;
		}
		let padding = alliance ? 10 : 0;
		let totalWidth = allianceWidth + padding + usernameWidth;
		if (alliance) {
			ctx.save();
			ctx.font = utils.generateFont(fontSize, 'bold');
			ctx.fillStyle = utils.getAllianceColor(alliance[0]);
			ctx.fillText(allianceName, allianceWidth / 2 - totalWidth / 2, usernameY);
			ctx.restore();
		}
		ctx.fillText(this.username, totalWidth - usernameWidth / 2 - totalWidth / 2, usernameY);

		ctx.restore();
	}

	drawFire(ctx, fireDepth, fireWidth) {
		let controlPointDistance = fireWidth * 0.3;
		ctx.beginPath();
		ctx.moveTo(-fireWidth / 2, 0);
		ctx.bezierCurveTo(
			-fireWidth / 2,
			0, // Left control point
			-controlPointDistance,
			fireDepth, // Bottom control point
			0,
			fireDepth // Bottom position
		);
		ctx.bezierCurveTo(
			controlPointDistance,
			fireDepth, // Bottom control point
			fireWidth / 2,
			0, // Right control point
			fireWidth / 2,
			0 // Right position
		);
		ctx.fill();
	}

	getPerkMultiplier(key) {
		let multiplier = 1;
		for (let perkIndex of this.perks) {
			let perk = upgrades.perks[perkIndex];
			if (perk[key]) {
				multiplier *= perk[key];
			}
		}

		return multiplier;
	}

	getPerkTotal(key) {
		let total = 0;
		for (let perkIndex of this.perks) {
			let perk = upgrades.perks[perkIndex];
			if (perk[key]) {
				total += perk[key];
			}
		}

		return total;
	}
}

Player.addSyncKeys(
	{ key: 'isBot', type: 'boolean', update: false },
	{ key: 'clientId', type: 'int', update: false },
	{ key: 'username', type: 'string', update: false },
	{ key: 'shipIndex', type: 'string', update: false },
	{ key: 'shipFill', type: 'string', update: false },
	{ key: 'allianceId', type: 'int', update: true },
	{ key: 'perks', type: 'int[]', update: true },
	{ key: 'health', type: 'float', update: true, quantize: config.quantize01 },
	{
		key: 'moveDir',
		type: 'float',
		update: true,
		sendMap: v => utils.modFix(v, Math.PI * 2)
	},
	{
		key: 'moveSpeed',
		type: 'float',
		update: true,
		quantize: config.quantize01
	},
	{ key: 'relativeMoveDir', type: 'boolean', update: true },
	{
		key: 'targetRot',
		type: 'float',
		update: true,
		sendMap: v => utils.modFix(v, Math.PI * 2)
	},
	{ key: 'firing', type: 'boolean', update: true },
	{ key: 'sprinting', type: 'boolean', update: true },
	{ key: 'weaponIndex', type: 'int', update: true },
	{
		key: 'shieldTimer',
		type: 'float',
		update: true,
		sendMap: v => utils.quantizeSimple(v, 1),
		receiveMap: v => utils.unquantizeSimple(v, 1)
	},
	{
		key: 'sprint',
		type: 'float',
		update: true,
		quantize: { min: 0, max: config.sprintTime * 4, bits: 8 }
	}
);

module.exports = Player;
