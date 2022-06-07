const Structure = require('./Structure');
const config = require('../../config/config');

class BoostPad extends Structure {
	constructor(game) {
		super(game);
		this.isTrap = true;

		this.radius = 48;
		this.health = 2.0;
		this.spaceStructureCollisions = false;

		this.boostSpeed = 2500;

		this.boosted = {}; // {<entity id>: <time remaining>}
	}

	update(dt) {
		super.update(dt);

		// Update rot to reflect the player
		if (config.isServer && !this.isConstructed) {
			if (this.clientOwner.player) this.rot = this.clientOwner.player.rot;
		}

		// Remove drag
		for (let stringId in this.boosted) {
			// Check if done boosting
			this.boosted[stringId] -= dt;
			if (this.boosted[stringId] <= 0) delete this.boosted[stringId];

			// Get the entity
			let id = parseInt(stringId);
			let entity = this.game.entityForId(id);
			if (!entity) continue;

			// Update the entity
			if (entity.isPlayer) {
				entity.useDrag = false;
				entity.useMaxVel = false;
			}
		}
	}

	onCollision(entity) {
		// Don't destroy bullets
		if (!(entity.isBullet && entity.explosionRadius > 0)) {
			super.onCollision(entity);
		}

		if (this.isConstructed) {
			// Update the entity
			entity.setVelocity(Math.cos(this.rot) * this.boostSpeed, -Math.sin(this.rot) * this.boostSpeed);
			if (entity.isPlayer) {
				entity.useDrag = false;
				entity.useMaxVel = false;
			}

			// Set boost timer
			this.boosted[entity.id] = 0.15;
		}
	}

	render(ctx) {
		super.render(ctx);

		this.drawImage(ctx);

		super.postRender(ctx);
	}
}

module.exports = BoostPad;
