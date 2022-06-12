const Entity = require('./Entity');
const config = require('../config/config');
const utils = require('../utils');
const assets = require('../client/assets');
const bullets = require('../config/bullets');

class Bullet extends Entity {
	get bulletPrefab() {
		return bullets.bullets[this.bulletIndex];
	}

	// Properties
	get bulletCheckCircle() {
		return this.bulletPrefab.checkCircle || false;
	}
	get bulletRadius() {
		return this.bulletPrefab.radius || 4;
	}
	get bulletSpeed() {
		return this.bulletPrefab.bulletSpeed || 0;
	}
	get bulletDrag() {
		return this.bulletPrefab.bulletDrag || 0;
	}
	get bulletAcceleration() {
		return this.bulletPrefab.bulletAcceleration || 0;
	}
	get bulletAccelerationDelay() {
		return this.bulletPrefab.bulletAccelerationDelay || 0;
	}
	get damage() {
		return (
			(this.bulletPrefab.damage || 0) *
			this.getPerkMultiplier(this.bulletPrefab.normalizedId + 'Damage')
		);
	}
	get life() {
		return (
			(this.bulletPrefab.life || 0.8) * this.getPerkMultiplier(this.bulletPrefab.normalizedId + 'Life')
		);
	}

	// Explosion
	get explosionRadius() {
		return (this.bulletPrefab.explosionRadius || 0) * this.getPerkMultiplier('explosionRadius');
	}
	get explosionSpeed() {
		return this.bulletPrefab.explosionSpeed || 80;
	}
	get explosionDamage() {
		return this.bulletPrefab.explosionDamage || 0;
	}
	get explosionVelocity() {
		return this.bulletPrefab.explosionVelocity || 0;
	}

	// Rendering
	get renderType() {
		return this.bulletPrefab.renderType || 'trail';
	}
	get trailLength() {
		return this.bulletPrefab.trailLength || 20;
	}
	get blinkInterval() {
		return this.bulletPrefab.blinkInterval || -1;
	}
	get pulseInterval() {
		return this.bulletPrefab.pulseInterval || -1;
	}
	get renderIcon() {
		return this.bulletPrefab.renderIcon || null;
	}
	get renderColor() {
		return this.bulletPrefab.renderColor || 'white';
	}

	// Sound
	get shootSound() {
		return this.bulletPrefab.id || 'machine-gun';
	}
	get shootVolume() {
		return this.bulletPrefab.volume || 1.0;
	}

	// Client
	get shooterEntityId() {
		return this.shooterEntity ? this.shooterEntity.id : this._shooterEntityId;
	}
	set shooterEntityId(id) {
		this._shooterEntityId = id;
	}
	get shooterClientId() {
		return this.shooterClient ? this.shooterClient.id : this._shooterClientId;
	}
	set shooterClientId(id) {
		this._shooterClientId = id;
	}

	getPerkMultiplier(key) {
		if (this.shooterEntityId) {
			let shooter = this.game.entityForId(this.shooterEntityId);
			return shooter && shooter.isPlayer ? shooter.getPerkMultiplier(key) : 1;
		} else {
			return 1;
		}
	}

	constructor(game, bulletId = 'machine-gun') {
		super(game);
		this.isBullet = true;
		this.checkCircle = false;
		this.checkTrail = true;

		// Get the bullet index
		this.bulletIndex = -1;
		for (let i = 0; i < bullets.bullets.length; i++) {
			if (bullets.bullets[i].id === bulletId) {
				this.bulletIndex = i;
				break;
			}
		}

		// The index of the bullet that was spawned; e.g. in a shotgun, the three bullets would be 0, 1, and 2
		this.bulletSpawnIndex = -1;

		// Configure entity
		this.sendUpdates = false;
		this.jumpsWalls = false;
		this.ignoreGravity = false;

		// Configure bullet
		this.angleOffset = 0;

		// Render properties
		this.renderLife = 0;

		// Shooter of the bullet
		this.shooterEntity = null;
		this.shooterClient = null;
		this.shooterBot = null;
	}

	/**
	 * @param {Player} entity
	 * @param {number} timeOffset
	 * @param {boolean} fromBack
	 */
	fireFrom(entity, timeOffset = 0, fromBack = false) {
		timeOffset = Math.max(timeOffset, 0);

		let aimDir;
		if (entity.isPlayer) {
			// Set shooter
			this.shooterEntity = entity;
			this.shooterClient = entity.clientHandle;
			this.shooterBot = entity.botHandle;

			// Set rotation
			aimDir = entity.rot;
		} else if (entity.isTurret) {
			// Jump walls
			this.jumpsWalls = true;

			// Set shooter
			this.shooterEntity = entity;
			this.shooterClient = entity.clientOwner;

			// Set rotation
			aimDir = entity.aimDir;
		}
		this.rot = aimDir + this.angleOffset;

		// Set position
		this.x = entity.x + Math.cos(aimDir) * entity.radius * (fromBack ? -1 : 1);
		this.y = entity.y - Math.sin(aimDir) * entity.radius * (fromBack ? -1 : 1);

		// Set velocity
		this.velX = Math.cos(this.rot) * this.bulletSpeed;
		this.velY = -Math.sin(this.rot) * this.bulletSpeed;

		// Offset velocity by time offset
		this.x += this.velX * timeOffset;
		this.y += this.velY * timeOffset;
	}

	update(dt) {
		// Update rotation
		this.rot = Math.atan2(-this.velY, this.velX);
		this.rotServer = this.rot; // Override the server rotation so there's no lerping issues

		// Update delay
		this.bulletAccelerationTimer = Math.max(this.bulletAccelerationTimer - dt, 0);

		// Accelerate in the appropriate direction
		if (this.bulletAccelerationTimer <= 0 && this.bulletAcceleration > 0) {
			// Update velocity
			this.addVelocity(
				Math.cos(this.rot) * this.bulletAcceleration * dt,
				-Math.sin(this.rot) * this.bulletAcceleration * dt
			);

			// Update thrust sound
			if (config.isClient) {
				assets.soundVol(this.thrustSoundId, 0.2, this.x, -this.y);
			}
		}

		// Apply drag
		this.addVelocity(-this.velX * this.bulletDrag * dt, -this.velY * this.bulletDrag * dt);

		super.update(dt);

		// Remove from world if dead
		this.lifeRemaining -= dt;
		if (this.lifeRemaining <= 0) {
			this.destroy();
		}
	}

	onInit() {
		// Set ignore gravity
		if (config.isServer && this.shooterEntity.isTurret && this.shooterEntity.structure.planetItem) {
			this.ignoreGravity = true;
		}

		// Configure bullet
		this.checkCircle = this.bulletCheckCircle;
		this.radius = this.bulletRadius;
		this.lifeRemaining = this.life;
		this.bulletAccelerationTimer = this.bulletAccelerationDelay;

		// Add thrust sound
		if (config.isClient && this.bulletAcceleration > 0) {
			this.thrustSoundId = assets.playSound('thrust-sprint', 0, 0, 0, true);
		}
	}

	onInsert() {
		if (config.isClient && this.bulletSpawnIndex === 0) {
			assets.playSound(this.shootSound, this.shootVolume, this.x, -this.y);
		}
	}

	onRemove() {
		if (this.thrustSoundId) {
			assets.soundStop(this.thrustSoundId);
		}
	}

	destroyBullet() {
		// Destroy self
		this.destroyedData = [true]; // Set destroyed from collision
		this.destroy();

		// Show explosion
		if (config.isClient) {
			if (this.explosionRadius) {
				// Show larger explosion
				this.game.explosionManager.spawnExplosion(
					utils.lerp(this.x, this.prevX, 0.5),
					-utils.lerp(this.y, this.prevY, 0.5),
					this.explosionRadius,
					this.explosionSpeed
				);
			} else {
				// Show basic explosion
				this.game.explosionManager.spawnExplosion(
					utils.lerp(this.x, this.prevX, 0.5),
					-utils.lerp(this.y, this.prevY, 0.5),
					15
				);
			}
		}

		// Damage entities
		if (config.isServer && this.explosionRadius) {
			this.game.spawnExplosion(
				this.x,
				this.y,
				this.explosionRadius,
				this,
				this.explosionDamage,
				this.explosionVelocity,
				e => {
					if (e === this) return false; // Don't damage if this
					if (this.bulletPrefab.id === 'nuke' && e.isPlanet) {
						// Remove resources from planet
						for (let i = 0; i < e.resources.length; i++) {
							e.resources[i] = Math.max(e.resources[i] - 6000, 0);
						}
						return false;
					}
					let clientOwner = utils.clientOwner(e); // Get the owner of the entity
					if (clientOwner && this.shooterClient && this.shooterClient.isFriendly(clientOwner.id))
						return false; // Don't damage friendlies
					if (this.shooterEntity && this.shooterEntity.isTurret && e.isStructure) return; // Don't damage structures from turrets
					return true;
				}
			);
		}
	}

	onDestroy() {
		// Check if collided
		let [collided] = this.destroyedData || [];

		// Do destroy effect on client
		if (config.isClient && collided) {
			this.destroyBullet();
		}
	}

	render(ctx, dt) {
		// Increase render life
		this.renderLife += dt;

		// Update line width
		ctx.lineWidth = this.radius * 2;
		ctx.lineCap = 'round';

		// Blink the entity
		if (this.blinkInterval !== -1) {
			ctx.globalAlpha = (this.renderLife / this.blinkInterval) % 1 > 0.5 ? 1 : 0.75;
		}

		// Pulse the entity
		if (this.pulseInterval !== -1) {
			let t = Math.cos((this.renderLife * Math.PI * 2) / this.pulseInterval);
			let scale = 1 + t * 0.1;
			ctx.scale(scale, scale);
		}

		if (
			this.renderType === 'trail' ||
			(this.renderType === 'triangle' && this.bulletAccelerationTimer <= 0)
		) {
			// Draw trail
			let imageTrailLength = this.renderType === 'trail' ? this.trailLength * 6 : 30;
			let imageTrailWidth = ctx.lineWidth;
			ctx.save();
			ctx.globalAlpha = 0.5;
			ctx.globalCompositeOperation = 'screen';
			utils.drawImage(
				ctx,
				assets.effectUrl('gradient-trail'),
				-imageTrailLength / 2,
				0,
				imageTrailLength,
				imageTrailWidth
			);
			ctx.restore();
		}

		// Render entity
		ctx.fillStyle = this.renderColor;
		switch (this.renderType) {
			case 'trail':
				// Draw line
				ctx.beginPath();
				ctx.moveTo(0, 0);
				ctx.lineTo(-this.trailLength, 0);
				ctx.stroke();

				break;
			case 'circle':
				ctx.beginPath();
				ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
				ctx.fill();
				break;
			case 'triangle':
				// Draw the arrow
				let angleSpread = Math.PI * 0.3;
				ctx.beginPath();
				ctx.moveTo(this.radius, 0);
				ctx.lineTo(
					Math.cos(Math.PI + angleSpread) * this.radius,
					Math.sin(Math.PI + angleSpread) * this.radius
				);
				ctx.lineTo(
					Math.cos(Math.PI - angleSpread) * this.radius,
					Math.sin(Math.PI - angleSpread) * this.radius
				);
				ctx.fill();

				// Draw thrust
				if (this.bulletAccelerationTimer <= 0) {
					let depth = Math.cos(Math.PI + angleSpread) - 0.15;
					ctx.beginPath();
					ctx.moveTo(-(1.0 + Math.random() * 0.8) * this.radius, 0);
					ctx.lineTo(depth * this.radius, 0.4 * this.radius);
					ctx.lineTo(depth * this.radius, -0.4 * this.radius);
					ctx.fill();
				}
				break;
			default:
				console.error(`Unknown error type ${this.renderType}.`);
		}

		// Render icon
		if (this.renderIcon) {
			utils.drawImage(
				ctx,
				assets.iconUrl(this.renderIcon),
				0,
				0,
				this.bulletRadius * 1.5,
				this.bulletRadius * 1.5
			);
		}
	}
}

Bullet.addSyncKeys(
	{ key: 'shooterEntityId', type: 'int', update: false },
	{ key: 'shooterClientId', type: 'int', update: false },
	{ key: 'bulletIndex', type: 'int', update: false },
	{ key: 'bulletSpawnIndex', type: 'int', update: false },
	{ key: 'jumpsWalls', type: 'bool', update: false },
	{ key: 'ignoreGravity', type: 'bool', update: false }
);

module.exports = Bullet;
