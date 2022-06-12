const Structure = require('./Structure');
const config = require('../../config/config');
const utils = require('../../utils');
const assets = require('../../client/assets');

class Flag extends Structure {
	constructor(game) {
		super(game);
		this.isFlag = true;

		this.radius = 128;
		this.health = 0.5;

		this.fill = 'auto';
	}

	render(ctx) {
		super.render(ctx);

		// Draw pole
		let poleWidth = 6;
		ctx.save();
		ctx.fillStyle = '#7c7c7c';
		ctx.fillRect(-poleWidth / 2, -this.radius, poleWidth, this.radius * 2);
		ctx.fillStyle = '#555555'; // Shading
		ctx.fillRect(-poleWidth / 2, -this.radius, poleWidth / 2, this.radius * 2);
		ctx.restore();

		// Draw flag
		let flagWidth = Math.floor(this.radius * 0.85);
		let flagHeight = Math.floor(flagWidth * 0.65);
		ctx.save();
		if (this.fill.startsWith('url:')) {
			let url = this.fill.slice(4);
			ctx.drawImage(
				assets.getImage(url, flagWidth, flagHeight),
				poleWidth / 2,
				-this.radius,
				flagWidth,
				flagHeight
			);
		} else {
			if (this.fill === 'auto') {
				ctx.fillStyle = this.ownerAllianceId ? utils.getAllianceColor(this.ownerAllianceId) : 'white';
			} else {
				ctx.fillStyle = this.fill;
			}
			ctx.fillRect(poleWidth / 2, -this.radius, flagWidth, flagHeight);
		}
		ctx.restore();

		super.postRender(ctx);
	}
}

Flag.addSyncKeys({ key: 'fill', type: 'string', update: false });

module.exports = Flag;
