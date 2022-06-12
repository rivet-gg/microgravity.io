const Structure = require('./Structure');
const config = require('../../config/config');
const utils = require('../../utils');

class Sign extends Structure {
	constructor(game) {
		super(game);
		this.isSign = true;

		this.radius = 64;
		this.health = 0.05;

		this.text = 'Hello, world!';
	}

	onInit() {
		super.onInit();

		if (config.isServer && !this.structure.planetItem) this.radius /= 2;
	}

	render(ctx) {
		super.render(ctx);

		ctx.save();
		ctx.font = utils.generateFont(this.structure.planetItem ? 60 : 40);
		ctx.fillText(this.text, 0, this.structure.planetItem ? -this.radius : 0, 600);
		ctx.restore();

		super.postRender(ctx);
	}
}

Sign.addSyncKeys({ key: 'text', type: 'string', update: false });

module.exports = Sign;
