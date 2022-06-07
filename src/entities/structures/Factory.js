const WorkingStructure = require('./WorkingStructure');
const config = require('../../config/config');
const weapons = require('../../config/weapons');
const assets = require('../../client/assets');
const utils = require('../../utils');

class Factory extends WorkingStructure {
	get weapon() {
		return weapons.weapons[this.structure.weaponIndex];
	}

	// Resources required to generate a single bullet
	get bulletResources() {
		return this.weapon.bulletResources || [0, 0, 0];
	}

	get laborDemand() {
		return this.weapon.laborDemand || 1;
	}

	get maxCount() {
		return this.weapon.maxAmmo;
	}

	get generationRate() {
		return this.weapon.generationRate || 1;
	}

	get generationSupply() {
		let minSupply = -1;
		for (let i = 0; i < this.depositedResources.length; i++) {
			let supply = -1;

			// Get the supply requirement
			let resourceRequirement = this.bulletResources[i];
			if (resourceRequirement !== 0) {
				supply = this.depositedResources[i] / resourceRequirement;
			}

			// Determine if it's a limiting factory
			if (supply !== -1 && (minSupply === -1 || supply < minSupply)) {
				minSupply = supply;
			}
		}

		return minSupply;
	}

	constructor(game) {
		super(game);
		this.isFactory = true;

		this.radius = 96;
		this.health = 4.0;

		this.depositedResources = [0, 0, 0];
	}

	onGenerate(count) {
		// Remove resources
		for (let i = 0; i < this.depositedResources.length; i++) {
			this.depositedResources[i] -= count * this.bulletResources[i];
		}
	}

	onCollision(entity, dt) {
		// Handle player colliding
		if (entity.isPlayer) {
			entity.visitingStructure = this;
		}

		super.onCollision(entity, dt);
	}

	onKilled(killer) {
		let client = utils.clientOwner(killer);
		if (client) {
			// Give client resources
			for (let i = 0; i < this.depositedResources.length; i++) {
				client.giveResources(i, this.depositedResources[i] * config.mineAndFactoryTransferOnDeath);
			}

			// Give client weapons
			client.giveAmmo(this.structure.weaponIndex, this.count * config.mineAndFactoryTransferOnDeath);
		}

		super.onKilled(killer);
	}

	render(ctx) {
		super.render(ctx);

		// Draw the image
		this.drawImage(ctx);

		// Draw the weapon icon on top of factory
		let iconY = 66.5;
		let iconSize = 16;
		ctx.save();
		ctx.translate(0, -this.radius + iconY);
		utils.drawImage(ctx, assets.iconUrl(this.weapon.icon), 0, 0, iconSize * 2, iconSize * 2);
		ctx.restore();

		super.postRender(ctx);
	}
}

Factory.addSyncKeys({
	key: 'depositedResources',
	type: 'int[]',
	update: true,
	sendMap: v => v.map(r => Math.floor(r))
});

module.exports = Factory;
