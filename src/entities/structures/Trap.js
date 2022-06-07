const Structure = require('./Structure');
const config = require('../../config/config');

class Trap extends Structure {
	constructor(game) {
		super(game);
		this.isTrap = true;

		this.radius = 64;
		this.health = 2.0;
		this.spaceStructureCollisions = false;

		this.trappedId = null; // Id of entity that is trapped
	}

	update(dt) {
		super.update(dt);

		// Update the trapped player positions
		let trappedEntity = this.game.entityForId(this.trappedId);
		if (trappedEntity) {
			trappedEntity.x = this.x;
			trappedEntity.y = this.y;
			trappedEntity.setVelocity(0, 0);
		} else {
			this.trappedId = null;
		}
	}

	onCollision(entity) {
		// Trap the entity
		if (
			config.isServer &&
			this.isConstructed &&
			!this.trappedId &&
			entity.isPlayer &&
			!entity.isFriendlyClientId(this.clientOwnerId)
		) {
			this.trappedId = entity.id;
		}

		super.onCollision(entity);
	}

	render(ctx) {
		// Render if friendly, if in same alliance, if player is trapped, or health is < max
		let isFriendly =
			this.game.currentPlayer && this.game.currentPlayer.isFriendlyClientId(this.clientOwnerId);
		if (!this.isConstructed || isFriendly || this.trappedId || this.health < this.maxHealth) {
			super.render(ctx);

			this.drawImage(ctx, 1.4);

			super.postRender(ctx);
		}
	}
}

Trap.addSyncKeys({ key: 'trappedId', type: 'int', update: true });

module.exports = Trap;
