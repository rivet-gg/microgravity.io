const Structure = require('./Structure');
const config = require('../../config/config');

class IED extends Structure {
	constructor(game) {
		super(game);
		this.isIED = true;

		this.radius = 48;
		this.health = 1.0;

		this.explosionRadius = 150;
		this.explosionDamage = 1.0;
		this.explosionVelocity = 1000;
	}

	onCollision(entity, dt) {
		// Destroy on collision with player
		if (entity.isPlayer && !entity.isFriendlyClientId(this.clientOwnerId)) {
			this.destroy();
			return;
		}

		super.onCollision(entity, dt);
	}

	onDestroy() {
		super.onDestroy();

		// Show explosion
		if (this.isConstructed) {
			if (config.isClient) {
				this.game.explosionManager.spawnExplosion(this.x, -this.y, this.explosionRadius);
			} else if (config.isServer) {
				this.game.spawnExplosion(
					this.x,
					this.y,
					this.explosionRadius,
					this,
					this.explosionDamage,
					this.explosionVelocity,
					e => {
						if (e === this) return false; // Don't damage this
						if (!e.isPlayer && !e.isAsteroid) return false; // Make sure it's a player or asteroid
						return true; // Affect all other entities
					}
				);
			}
		}
	}

	render(ctx) {
		super.render(ctx);

		// Pulsate the turret
		let t = (Date.now() / 1000) * 1.5 * (1 + (this.id % 100) / 100);
		let s = 1 + Math.sin(t) * 0.05;
		ctx.save();
		ctx.scale(s, s);
		this.drawImage(ctx);
		ctx.restore();

		super.postRender(ctx);
	}
}

module.exports = IED;
