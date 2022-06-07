const WorkingStructure = require('./WorkingStructure');
const config = require('../../config/config');
const resources = require('../../config/resources');
const utils = require('../../utils');

class Mine extends WorkingStructure {
	get resource() {
		return this.structure.resource;
	}
	get resourceIndex() {
		return resources.resources.indexOf(this.resource);
	}

	get laborDemand() {
		return this.resource.laborDemand;
	}

	get maxCount() {
		return resources.mineMaxCount;
	}

	get generationRate() {
		return this.resource.generationRate;
	}

	get generationSupply() {
		return this.hostPlanet.resources[this.resourceIndex];
	}

	constructor(game) {
		super(game);
		this.isMine = true;

		this.radius = 96;
		this.health = 3.0;
	}

	onInit() {
		// Copy the structure's radius
		if (this.structure.mineRadius) {
			this.radius = this.structure.mineRadius;
		}

		super.onInit();
	}

	update(dt) {
		super.update(dt);
	}

	onGenerate(amount) {
		this.hostPlanet.resources[this.resourceIndex] -= amount;
	}

	onKilled(killer) {
		let client = utils.clientOwner(killer);
		if (client) {
			// Give the resources
			client.giveResources(this.resourceIndex, this.count * config.mineAndFactoryTransferOnDeath);
		}

		super.onKilled(killer);
	}

	render(ctx) {
		super.render(ctx);

		this.drawImage(ctx);

		super.postRender(ctx);
	}
}

module.exports = Mine;
