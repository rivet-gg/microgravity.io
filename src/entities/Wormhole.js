const Entity = require('./Entity');
const utils = require('../utils');

class Wormhole extends Entity {
	constructor(game) {
		super(game);
		this.isWormhole = true;
		this.renderLayers = [-5];

		// Configure entity
		this.radius = 10;
		this.timeMultiplier = 0.25;
	}

	update(dt) {
		// Keep static
		this.setVelocity(0, 0);

		super.update(dt);
	}

	render(ctx, dt) {
		// Set style
		ctx.fillStyle = '#4000cd';
		ctx.globalAlpha = 0.06;

		// Draw shrinking circles
		let t = (Date.now() / 1000) * this.timeMultiplier * 0.2;
		let phaseCount = 4;
		for (let i = 0; i < 5; i++) {
			// Get the progress
			let progress = i / (phaseCount - 1);
			progress = (progress + t) % 1;
			progress = Math.sin(progress * Math.PI * 2) / 2 + 0.5;

			// Draw the circle
			let radius = utils.lerp(this.radius * 0.85, this.radius, progress);
			ctx.beginPath();
			ctx.arc(0, 0, radius, 0, Math.PI * 2);
			ctx.fill();
		}
	}
}

Wormhole.addSyncKeys({ key: 'timeMultiplier', type: 'float', update: false });

module.exports = Wormhole;
