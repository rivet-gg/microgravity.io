const Structure = require('./Structure');
const config = require('../../config/config');

class LaunchPad extends Structure {
	constructor(game) {
		super(game);
		this.isLaunchPad = true;

		this.radius = 96;
		this.health = 8.0;
	}

	render(ctx) {
		super.render(ctx);

		this.drawImage(ctx);

		super.postRender(ctx);
	}
}

module.exports = LaunchPad;
