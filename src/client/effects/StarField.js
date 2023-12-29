const utils = require('../../utils');

/**
 * @typedef {Object} StarData
 * @property {number} x
 * @property {number} y
 * @property {number} velX
 * @property {number} velY
 * @property {number} alpha
 */

class StarField {
	constructor(game) {
		this.game = game;
		this.stars = [];

		this.prevViewportX = null;
		this.prevViewportY = null;

		for (let i = 0; i < 300; i++) {
			this.addStar();
		}
	}

	addStar() {
		this.stars.push({
			x: 0,
			y: 0,
			depth: (Math.random() - 0.5) * 0.8,
			velX: (Math.random() - 0.5) * 10,
			velY: (Math.random() - 0.5) * 10,
			alpha: 0.25 + Math.random() * 0.3
		});
	}

	/**
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {number} dt
	 * @param {number} width
	 * @param {number} height
	 * @param {number} viewportX
	 * @param {number} viewportY
	 */
	render(ctx, dt, width, height, viewportX, viewportY) {
		// Playing around with adaptive FPS
		// if (game.averageFPS > 50) {
		//     for (let i = 0; i < 10; i++) {
		//         this.addStar();
		//     }
		// } else {
		//     this.stars.length--;
		// }
		// console.log(this.stars.length);

		// Calculate edges
		let leftEdge = viewportX - width / 2;
		let rightEdge = viewportX + width / 2;
		let topEdge = viewportY - height / 2;
		let bottomEdge = viewportY + height / 2;

		// Determine if needs repositioning
		let needsRecreation =
			this.prevViewportX == null ||
			this.prevViewportY == null ||
			Math.abs(this.prevViewportX - viewportX) > width / 2 ||
			Math.abs(this.prevViewportY - viewportY) > height / 2;

		// Update stars
		for (let star of this.stars) {
			// Warp dt
			let wdt = this.game.warpTime(star.x, star.y, 0, dt);

			// Move star
			star.x += star.velX * wdt;
			star.y += star.velY * wdt;

			// Adjust x and y position for parallax
			let px = star.x + (viewportX - star.x) * star.depth;
			let py = star.y + (viewportY - star.y) * star.depth;

			// Reposition star if out of range
			if (needsRecreation) {
				px = utils.lerp(leftEdge, rightEdge, Math.random());
				py = utils.lerp(topEdge, bottomEdge, Math.random());
			} else if (px < leftEdge || px > rightEdge || py < topEdge || py > bottomEdge) {
				if (Math.random() > 0.5) {
					star.x = utils.lerp(leftEdge, rightEdge, Math.random());
					star.y = Math.random() > 0.5 ? topEdge : bottomEdge;
				} else {
					star.x = Math.random() > 0.5 ? leftEdge : rightEdge;
					star.y = utils.lerp(topEdge, bottomEdge, Math.random());
				}
			}

			// Draw star
			ctx.save();
			ctx.globalAlpha = star.alpha;
			ctx.fillRect(px - 2, py - 2, 4, 4);
			ctx.restore();
		}

		// Save previous viewport
		this.prevViewportX = viewportX;
		this.prevViewportY = viewportY;
	}
}

module.exports = StarField;
