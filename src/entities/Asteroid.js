const Entity = require('./Entity');
const config = require('../config/config');
const utils = require('../utils');
const resources = require('../config/resources');
const assets = require('../client/assets');
const stats = require('../server/stats');

class Asteroid extends Entity {
	constructor(game, isLarge = false) {
		super(game);
		this.isAsteroid = true;

		// Save is large
		this.isLarge = isLarge; // Not synchronized

		// Configure entity
		if (isLarge) {
			this.radius = 50 + Math.random() * 20;
			this.health = 0.75;
		} else {
			this.radius = 15 + Math.random() * 10;
			this.health = 0.1;
		}
		this.radius = Math.floor(this.radius / 5) * 5; // Quantize to every 5 pixels
		this.checkCollisions = true;

		// Rotational velocity
		this.rotVel = (Math.random() - 0.5) * 2 * config.maxAsteroidRotateSpeed;

		// Random velocity
		let velMag = 10 + Math.random() * 60;
		let velAngle = Math.random() * Math.PI * 2;
		this.velX = Math.cos(velAngle) * velMag;
		this.velY = Math.sin(velAngle) * velMag;
	}

	update(dt) {
		// Rotate
		this.rot += this.rotVel * dt;

		super.update(dt);
	}

	onCollision(entity) {
		if (entity.isAsteroid) {
			utils.repelEntities(this, entity, -1); // Use natural collisions
		} else if (entity.isBullet) {
			entity.destroyBullet();
			utils.damageEntity(entity, this, entity.damage);
		}
	}

	onKilled(killer) {
		if (config.isServer) {
			// Find the killer
			let killerClient = utils.clientOwner(killer);

			if (killerClient) {
				// // Award points
				killerClient.awardPoints(
					this.isLarge
						? config.pointRewardTypes.ASTEROID_LARGE
						: config.pointRewardTypes.ASTEROID_SMALL,
					this.isLarge ? config.pointRewards.ASTEROID_LARGE : config.pointRewards.ASTEROID_SMALL
					// this.x,  // Don't show +x
					// this.y   // ^
				);

				// Award resources
				let resourceIndex = Math.floor(Math.random() * resources.resources.length);
				let resourceCount = Math.floor(
					utils.lerp(
						config.asteroidMinResources,
						this.isLarge ? config.asteroidLargeMaxResources : config.asteroidSmallMaxResources,
						Math.random()
					)
				);
				killerClient.giveResources(resourceIndex, resourceCount, this.x, this.y);
			}

			// Break apart asteroid
			if (this.isLarge) {
				// Break apart
				let shardCount = 2 + Math.floor(Math.random() * 4);
				let spawnDistance = 30;
				let ejectSpeed = 50;

				// Spawn shards
				for (let i = 0; i < shardCount; i++) {
					// Get the angle
					let angle = ((Math.PI * 2) / shardCount) * i;

					// Create an insert shard
					let shard = new Asteroid(this.game, false);
					shard.x = this.x + Math.cos(angle) * spawnDistance;
					shard.y = this.y + Math.sin(angle) * spawnDistance;
					shard.velX = this.velX + Math.cos(angle) * ejectSpeed;
					shard.velY = this.velY + Math.sin(angle) * ejectSpeed;
					this.game.insertEntity(shard);
				}
			}

			// Tally
			stats.tallyAsteroidDestroy();
		}
	}

	onDestroy() {
		if (config.isClient) {
			this.game.explosionManager.spawnExplosion(this.x, -this.y, this.radius);
		}
	}

	render(ctx) {
		// // Render shape
		// let points = config.asteroidShapes[this.id % config.asteroidShapes.length];
		// ctx.fillStyle = "black";
		// ctx.beginPath();
		// ctx.moveTo(points[0][0] * this.radius, points[0][1] * this.radius);
		// for (let point of points) {
		//     ctx.lineTo(point[0] * this.radius, point[1] * this.radius);
		// }
		// ctx.closePath();
		// ctx.fill();
		// ctx.stroke();

		// Draw the graphic
		let graphicSize = 64;
		let graphicBoundingSize = 56;
		let drawSize = (graphicSize / graphicBoundingSize) * this.radius * 2;
		utils.drawImage(ctx, assets.asteroidUrl('asteroid-small-1'), 0, 0, drawSize, drawSize);
	}
}

Asteroid.addSyncKeys(
	{ key: 'isLarge', type: 'boolean', update: false },
	{
		key: 'rotVel',
		type: 'float',
		update: false,
		quantize: {
			min: -config.maxAsteroidRotateSpeed,
			max: config.maxAsteroidRotateSpeed,
			bits: 7
		}
	},
	{ key: 'health', type: 'float', update: true, quantize: config.quantize01 }
);

module.exports = Asteroid;
