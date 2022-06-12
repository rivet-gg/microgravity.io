const Structure = require('./Structure');
const config = require('../../config/config');

class WorkingStructure extends Structure {
	get customText() {
		return `${Math.floor(this.count)}/${Math.floor(this.maxCount)}`;
	}

	// How much this structure demands
	get laborDemand() {
		throw new Error('Unimplemented.');
	}

	// Max amount of production units
	get maxCount() {
		throw new Error('Unimplemented.');
	}

	// How much to product per person per labor demand unit; e.g. if labor available == 2 * labor demand, then
	// gen rate is 2x this value
	get generationRate() {
		throw new Error('Unimplemented.');
	}

	// How much more can be generated; for example, resources left on a planet; -1 is infinite
	get generationSupply() {
		return -1;
	}

	// Amount of the labor required by this factory that is being fulfilled
	get percentLaborFulfilled() {
		// Cached value
		if (this._percentLaborFulfilled != null) return this._percentLaborFulfilled;

		if (this.hostPlanet.totalLaborDemand === 0 || this.laborDemand === 0) {
			// No data yet
			return 0;
		} else {
			// Calculate labor fulfilled
			let percentLaborDemand = this.laborDemand / this.hostPlanet.totalLaborDemand;
			let laborAllotted = percentLaborDemand * this.hostPlanet.totalLaborAvailable;
			return Math.min(laborAllotted / this.laborDemand, 1);
		}
	}
	set percentLaborFulfilled(v) {
		this._percentLaborFulfilled = v;
	}

	// The generation rate to be used
	get adjustedGenerationRate() {
		// Cached value
		if (this._adjustedGenerationRate != null) return this._adjustedGenerationRate;

		// Computed value
		return this.generationRate * this.percentLaborFulfilled;
	}
	set adjustedGenerationRate(v) {
		this._adjustedGenerationRate = v;
	}

	constructor(game) {
		super(game);
		this.isWorkingStructure = true;

		// State
		this.count = 0;
		this.allianceSharing = false;
	}

	update(dt) {
		// Increase count
		if (config.isServer && this.isConstructed) {
			// Add to count
			let generateCount = this.adjustedGenerationRate * dt;
			let generationSupply = this.generationSupply;
			if (generationSupply !== -1) generateCount = Math.min(generateCount, generationSupply); // Cap how much can be generated
			this.count = Math.min(this.count + generateCount, this.maxCount);

			// Notify on generation
			this.onGenerate(generateCount);
		}

		super.update(dt);
	}

	onGenerate(count) {
		// Overridable method
	}

	onCollision(entity, dt) {
		// Handle player colliding
		if (entity.isPlayer) {
			entity.visitingStructure = this;
		}

		super.onCollision(entity, dt);
	}

	isOwner(clientId) {
		return this.clientOwnerId === clientId;
	}

	canInteract(clientId) {
		// Can interact if owner
		if (this.isOwner(clientId)) return true;

		// Check for sharing alliance
		if (this.allianceSharing) {
			if (config.isServer) {
				return (
					this.clientOwner.alliance &&
					this.clientOwner.alliance.clients.findIndex(m => m.id === clientId) !== -1
				);
			} else if (config.isClient) {
				return (
					this.game.allianceData &&
					this.game.allianceData[3].findIndex(m => m[0] === clientId) !== -1
				);
			}
		}

		// Can't interact
		return false;
	}
}

WorkingStructure.addSyncKeys(
	{ key: 'count', type: 'int', update: true, sendMap: v => Math.floor(v) },
	{
		key: 'percentLaborFulfilled',
		type: 'float',
		update: true,
		quantize: config.quantize01
	},
	{
		key: 'adjustedGenerationRate',
		type: 'float',
		update: true,
		quantize: { min: 0, max: 1 << 8, bits: 8 }
	},
	{ key: 'allianceSharing', type: 'boolean', update: true }
);

module.exports = WorkingStructure;
