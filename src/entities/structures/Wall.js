const Structure = require('./Structure');
const config = require('../../config/config');
const utils = require('../../utils');
const assets = require('../../client/assets');

class Wall extends Structure {
	get isStrong() {
		return this.structure.id === 'wall-strong';
	}

	constructor(game) {
		super(game);
		this.isWall = true;

		this.radius = 40;
		this.health = 1;

		this.connectedWalls = [];
		this.connectedPositions = []; // [<wall id>, <x>, <y>][]
		this.justEvaluated = false;

		this.lastBounceTimes = {}; // { <connected wall ID>: <time ms> }
		this.bounceFadeTime = 0.5;
	}

	onInit() {
		if (this.structure.planetItem) {
			this.health = 4;
			this.radius = 40;
		} else {
			this.health = this.isStrong ? 20 : 7.5;
			this.radius = 16;
		}

		super.onInit();
	}

	update(dt) {
		if (config.isServer) {
			// Handle on just evaluated
			if (this.justEvaluated) {
				this.justEvaluated = false;

				// Remove all non-mutual connections
				for (let i = this.connectedWalls.length - 1; i >= 0; i--) {
					let wall = this.connectedWalls[i];

					// Check if connected
					let isMutuallyConnected = wall.connectedWalls.indexOf(this) !== -1;

					// Remove connection
					if (!isMutuallyConnected) {
						this.connectedWalls.splice(i, 1);
					}
				}

				// Update connected positions
				this.connectedPositions.length = 0;
				for (let wall of this.connectedWalls) {
					this.connectedPositions.push([wall.id, wall.x, wall.y]);
				}
			}
		}

		// Handle collisions
		for (let [id, x, y] of this.connectedPositions) {
			// Only do collisions once or if there is no ID for the connection
			if (id != null && id < this.id) continue;

			// Get the wall angle
			let wallAngle = Math.atan2(y - this.y, x - this.x);

			// Collide entities with line
			this.game.queryMinMax(
				Math.min(this.x, x),
				Math.max(this.x, x),
				Math.min(this.y, y),
				Math.max(this.y, y),
				entity => {
					// Don't collide with walls, friendly players, or bullets jumping walls
					if (
						entity.isWall ||
						entity.isPlanet ||
						entity.isWormhole ||
						(entity.isPlayer && entity.isFriendlyClientId(this.clientOwnerId)) ||
						(entity.isBullet && entity.jumpsWalls)
					)
						return;

					// Don't collide with structures
					if (entity.isStructure) return;

					// Check that collides
					let circleCollides =
						entity.checkCircle &&
						utils.testCircleLine(entity.x, entity.y, entity.radius, this.x, this.y, x, y);
					let trailCollides =
						entity.checkTrail &&
						utils.testLineLine(
							this.x,
							this.y,
							x,
							y,
							entity.prevX,
							entity.prevY,
							entity.x,
							entity.y
						);
					if (!circleCollides && !trailCollides) return; // No collision

					// Destroy IEDs touching line
					if (config.isServer && entity.isIED) {
						entity.destroy();
						return;
					}

					/* Update bounce time */
					this.lastBounceTimes[id] = Date.now();

					/* Determine which way to move */
					// Find which side of line entity is on based on its previous position; https://stackoverflow.com/a/1560510/2016800
					// let sideSign = -Math.sign((x - this.x) * entity.velY - (y - this.y) * entity.velX);
					let sideSign = Math.sign(
						(x - this.x) * (entity.prevY - this.y) - (y - this.y) * (entity.prevX - this.x)
					);

					/* Move on to line */
					// Adapted from `utils.testCircleLine`

					// Form line vectors
					let line = [x - this.x, y - this.y];

					// Get the position along the line
					let lineLength = utils.dist(...line);
					let c1Circle = [entity.x - this.x, entity.y - this.y]; // Get the perpendicular distance to the ball
					let c1CircleOnLine = utils.project(...c1Circle, ...line) / lineLength; // Project point on line and normalize

					// Move the circle on the line
					entity.x = this.x + c1CircleOnLine * line[0];
					entity.y = this.y + c1CircleOnLine * line[1];

					// Move the entity to have its edge on the line
					let moveAngle = wallAngle + (Math.PI / 2) * sideSign;
					let movePadding = 20;
					entity.x += Math.cos(moveAngle) * (entity.radius + movePadding);
					entity.y += Math.sin(moveAngle) * (entity.radius + movePadding);

					// Copy the previous values so the entity can't jump through; otherwise, the previous value will be
					// saved to
					entity.prevX = entity.x;
					entity.prevY = entity.y;

					/* Bounce off wall */
					let bounceVel = Math.max(utils.dist(entity.velX, entity.velY), 750);
					entity.setVelocity(Math.cos(moveAngle) * bounceVel, Math.sin(moveAngle) * bounceVel);

					/* Sound */
					if (config.isClient) {
						let soundId = assets.playSound('force-field', 1.0, entity.x, -entity.y);
						assets.soundRate(3, soundId);
					}
				}
			);
		}

		super.update(dt);
	}

	onInsert() {
		this.reevaluateConnectedWalls();
	}

	onDestroy() {
		super.onDestroy();

		if (config.isServer) {
			// Disconnect from all walls
			for (let wall of this.connectedWalls) {
				let wallIndex = wall.connectedWalls.indexOf(this);
				wall.connectedWalls.splice(wallIndex, 1);
				wall.reevaluateConnectedWalls();
			}

			// Clear references
			this.connectedWalls = [];
		}
	}

	onFinishedConstruction() {
		super.onFinishedConstruction();

		// Connect to walls
		if (this.structure.planetItem) {
			// Set wall connection to planet atmosphere
			let wallSize = this.hostPlanet.atmosphereSize + 200;
			this.connectedPositions = [
				[
					null,
					this.x - Math.cos(this.rot + Math.PI / 2) * wallSize,
					this.y + Math.sin(this.rot + Math.PI / 2) * wallSize
				]
			];
		} else {
			// Connect to walls
			this.reevaluateConnectedWalls();
		}
	}

	reevaluateConnectedWalls() {
		if (!config.isServer) return;
		if (!this.isConstructed) return;
		if (this.structure.planetItem) return;
		if (this.justEvaluated) return;

		// Flag as just evaluated
		this.justEvaluated = true;

		// Tell all currently connected walls to reevaluate
		for (let wall of this.connectedWalls) {
			wall.reevaluateConnectedWalls();
		}

		// Find all nearby walls
		let connectableWalls = [];
		this.game.queryCircle(this.x, this.y, config.maxWallConnectRadius, wall => {
			if (!wall.isWall) return; // Is a wall
			if (wall === this) return; // Not this wall
			if (wall.structure.planetItem) return; // Don't connect to planet item
			if (!wall.isConstructed) return; // Don't connect to non-constructed walls
			if (!wall.clientOwner || !this.clientOwner || !wall.clientOwner.isFriendly(this.clientOwner.id))
				return; // Make sure the owner is friendly
			connectableWalls.push([wall, utils.dist(this.x, this.y, wall.x, wall.y)]);
		});

		// Find the closest walls
		connectableWalls.sort((a, b) => a[1] - b[1]);
		connectableWalls.length = Math.min(connectableWalls.length, config.connectedWallCount);

		// Save connectable walls and tell that wall to reevaluate
		this.connectedWalls.length = 0;
		for (let wallData of connectableWalls) {
			this.connectedWalls.push(wallData[0]);
			wallData[0].reevaluateConnectedWalls();
		}
	}

	/**
	 * @param {CanvasRenderingContext2D} ctx
	 */
	render(ctx) {
		super.render(ctx);

		// Draw the base
		this.drawImage(ctx);

		// Draw the connection circle
		let playerDist =
			this.game.currentPlayer &&
			utils.dist(this.x, this.y, this.game.currentPlayer.x, this.game.currentPlayer.y);
		if (
			!this.structure.planetItem && // Don't render connections for planet items
			this.showBuildTips && // This will assert `this.game.currentPlayer`
			playerDist <= config.maxWallConnectRadius &&
			playerDist > config.minWallConnectRadius // Show within distance
		) {
			utils.drawBuildTipCircle(ctx, '#55A1D8', 0, 0, config.maxWallConnectRadius, this.id);
		}

		// Un-rotate wall for ground walls
		ctx.rotate(-this.rot);

		// Draw lines to other walls; note that this will be drawn twice
		for (let [id, x, y] of this.connectedPositions) {
			// Don't render the wall if the other wall will handle the drawing
			if (this.game.entityForId(id) && id < this.id) continue;

			let angle = Math.atan2(y - this.y, x - this.x);
			let timeSinceBounce = (Date.now() - (this.lastBounceTimes[id] || 0)) / 1000;
			let bounceProgress = 1 - Math.min(timeSinceBounce / this.bounceFadeTime, 1);
			bounceProgress = utils.easingFunctions.easeInQuint(bounceProgress);

			let lineStartRadius = this.radius - 2;
			ctx.save();
			ctx.strokeStyle = this.ownerAllianceId ? utils.getAllianceColor(this.ownerAllianceId) : 'white';
			ctx.lineWidth = ctx.lineWidth * 2 + bounceProgress * 14.0;
			ctx.globalAlpha = 0.4 + 0.6 * bounceProgress;
			ctx.beginPath();
			ctx.moveTo(Math.cos(angle) * lineStartRadius, -Math.sin(angle) * lineStartRadius);
			ctx.lineTo(
				x - this.x - Math.cos(angle) * lineStartRadius,
				-(y - this.y - Math.sin(angle) * lineStartRadius)
			);
			ctx.stroke();
			ctx.restore();
		}

		super.postRender(ctx);
	}
}

let mapRadius = config.mapSize / 2;
Wall.addSyncKeys({
	key: 'connectedPositions',
	type: 'array<array<float>>',
	update: true,
	sendMap: v =>
		v.map(w => [
			w[0],
			utils.quantize(w[1], -mapRadius, mapRadius, 16),
			utils.quantize(w[2], -mapRadius, mapRadius, 16)
		]), // Quantize positions
	receiveMap: v =>
		v.map(w => [
			w[0],
			utils.unquantize(w[1], -mapRadius, mapRadius, 16),
			utils.unquantize(w[2], -mapRadius, mapRadius, 16)
		]) // Unquantize positions
});

module.exports = Wall;
