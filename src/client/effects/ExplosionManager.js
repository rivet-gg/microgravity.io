const utils = require('../../utils');
const assets = require('../assets');
const settings = require('../settings');

/**
 * @typedef {Object} ExplosionData
 * @property {number} x
 * @property {number} y
 * @property {number} size
 * @property {number} life
 * @property {boolean} isDead
 */

class ExplosionManager {
	constructor(game) {
		/** @type {Game} */ this.game = game;
		this.explosions = [];
	}

	spawnExplosion(x, y, size, speed = 80) {
		let explosion;
		let isNewExplosion = false;

		// Reuse an explosion
		for (let deadExplosion of this.explosions) {
			if (deadExplosion.isDead) {
				explosion = deadExplosion;
				break;
			}
		}

		// Create new explosion
		if (explosion == null) {
			explosion = {};
			isNewExplosion = true;
		}

		// Assign values
		explosion.x = x;
		explosion.y = y;
		explosion.size = size;
		explosion.life = 0;
		explosion.isDead = false;
		explosion.speed = speed;

		// Insert if needed
		if (isNewExplosion) {
			this.explosions.push(explosion);
		}

		// Play sound
		let maxSmallSize = 50;
		let isLarge = size > maxSmallSize;
		let explosionMinVolumeSize = isLarge ? maxSmallSize : 0;
		let explosionMaxVolumeSize = isLarge ? 300 : maxSmallSize;
		let explosionMagnitude =
			(size - explosionMinVolumeSize) / (explosionMaxVolumeSize - explosionMinVolumeSize);
		explosionMagnitude = utils.clamp01(explosionMagnitude);
		let explosionVolume = utils.lerp(0.3, 0.6, explosionMagnitude);
		let explosionSpeed = utils.lerp(0.2, 1.5, 1 - explosionMagnitude);
		let soundId = assets.playSound(
			isLarge ? 'explosion-large' : 'explosion-small',
			explosionVolume,
			x,
			y
		);
		assets.soundRate(explosionSpeed, soundId); // Speed up
	}

	getScreenShake(x, y) {
		let explosionSizeMultiplier = 5;

		let shakeMagnitude = 0;
		for (let explosion of this.explosions) {
			if (explosion.isDead) continue;

			// Get the distance
			let dist = utils.dist(x, y, explosion.x, explosion.y);
			let totalLife = explosion.size / explosion.speed;
			let progress = 1 - explosion.life / totalLife; // Subtract form one, since it should be more intense at beginning

			// Get explosion size
			let explosionSize = explosion.size * progress * explosionSizeMultiplier;

			// Add to magnitude
			shakeMagnitude += Math.max(explosionSize - dist, 0);
		}

		return shakeMagnitude;
	}

	/**
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {number} dt
	 */
	render(ctx, dt) {
		for (let explosion of this.explosions) {
			if (explosion.isDead) continue;

			// Get explosion process
			explosion.life += this.game.warpTime(explosion.x, explosion.y, 0, dt);
			let totalLife = explosion.size / explosion.speed;
			let progress = explosion.life / totalLife;
			if (progress > 1) {
				explosion.isDead = true;
				continue;
			}

			// Ease out function
			progress = utils.easingFunctions.easeOutQuint(progress);

			// Get explosion size
			let explosionSize = progress * explosion.size;

			// Draw explosion
			if (!settings.fancyExplosions) {
				let innerRadius = Math.max(explosionSize - 20 * (1 - progress), 0);
				ctx.save();
				ctx.globalAlpha = 1 - progress;
				ctx.translate(explosion.x, explosion.y);
				ctx.beginPath();
				ctx.arc(0, 0, innerRadius, 0, Math.PI * 2);
				ctx.arc(0, 0, explosionSize, 0, Math.PI * 2);
				ctx.fill('evenodd');
				ctx.restore();
			} else {
				ctx.save();
				ctx.lineWidth = Math.min(20 * (1 - progress), explosionSize * 2);
				ctx.translate(explosion.x, explosion.y);
				ctx.beginPath();
				ctx.arc(0, 0, explosionSize, 0, Math.PI * 2);
				ctx.stroke();
				ctx.restore();
			}
		}
	}
}

module.exports = ExplosionManager;
