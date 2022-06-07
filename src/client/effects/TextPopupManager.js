const utils = require('../../utils');

/**
 * @typedef {Object} TextPopupData
 * @property {string} text
 * @property {boolean} isMultiline
 * @property {number} x
 * @property {number} y
 * @property {number} life
 * @property {boolean} isDead
 */

class TextPopupManager {
	constructor(game) {
		/** @type {Game} */ this.game = game;
		/** @type {TextPopupData} */ this.texts = [];

		this.moveSpeed = 80; // px/s
	}

	spawnText(string, x, y, icon = null, life = 2.5) {
		let text;
		let isNewText = false;

		// Reuse an explosion
		for (let deadText of this.texts) {
			if (deadText.isDead) {
				text = deadText;
				break;
			}
		}

		// Create new text
		if (text == null) {
			text = {};
			isNewText = true;
		}

		// Assign values
		text.text = string;
		text.isMultiline = string.indexOf('\n') !== -1;
		text.icon = icon;
		text.x = x;
		text.y = y;
		text.life = 0;
		text.textLife = life;
		text.isDead = false;

		// Insert if needed
		if (isNewText) {
			this.texts.push(text);
		}
	}

	/**
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {number} dt
	 */
	render(ctx, dt) {
		ctx.save();
		let fontSize = 40;
		ctx.font = utils.generateFont(fontSize);
		ctx.textAlign = 'center';

		for (let text of this.texts) {
			if (text.isDead) continue;

			// Get text progress
			text.life += this.game.warpTime(text.x, text.y, 0, dt);
			let progress = text.life / text.textLife;
			if (progress > 1) {
				text.isDead = true;
				continue;
			}

			// Ease out function
			progress = utils.easingFunctions.easeInQuint(progress);

			ctx.save();

			// Draw text
			ctx.globalAlpha = 1 - progress;
			let textY = text.y - this.moveSpeed * text.life;
			let textWidth = ctx.measureText(text.text).width;
			if (text.isMultiline) {
				utils.fillMultilineText(ctx, text.text, text.x, textY);
			} else {
				ctx.fillText(text.text, text.x, textY);
			}

			// Draw the icon
			if (text.icon) {
				let iconSize = fontSize * 0.8;
				utils.drawImage(
					ctx,
					text.icon,
					text.x - textWidth / 2 - iconSize / 2 - 10,
					textY,
					iconSize,
					iconSize
				);
			}

			ctx.restore();
		}

		ctx.restore();
	}
}

module.exports = TextPopupManager;
