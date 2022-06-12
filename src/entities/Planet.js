const Entity = require('./Entity');
const config = require('../config/config');
const utils = require('../utils');
const assets = require('../client/assets');
const planets = require('../config/planets');
const settings = require('../client/settings');

class Planet extends Entity {
	get bodyRadius() {
		return this.radius - this.atmosphereSize;
	}

	get planetHealth() {
		// Find the resource health that has the lowest value
		let totalResource = 0;
		let totalResourcesMax = 0;
		for (let i = 0; i < this.resources.length; i++) {
			totalResource += this.resources[i];
			totalResourcesMax += this.resourceMax[i];
		}

		return totalResource / totalResourcesMax;
	}

	get planetCircumference() {
		return 2 * Math.PI * this.bodyRadius;
	}

	constructor(game) {
		super(game);
		this.isPlanet = true;

		// Configure entity
		this.radius = 400;
		this.checkCollisions = true;
		this.renderLayers = [-20, 20];
		this.name = 'unknown planet';

		// Configure planets
		this.atmosphereSize = 200;
		this.resources = [0, 0, 0];
		this.resourceMax = [1000, 1000, 1000];
		this.resourceGenerationRate = [20, 20, 20];

		// Helper properties
		this.cityCount = 0;
		this.totalLaborAvailable = 0;
		this.totalLaborDemand = 0;
		this.totalResourceDemand = [0, 0, 0];
		this.dominationCities = {}; // Either `p:<client id>` or `a:<alliance id>`
		this.dominatingItem = null; // A key of `dominatingCities`
	}

	onInit() {
		if (config.isServer) {
			this.resources = this.resourceMax.slice();
		}
	}

	update(dt) {
		// Keep static
		this.setVelocity(0, 0);

		if (config.isServer) {
			// Increase resources
			for (let i = 0; i < this.resources.length; i++) {
				this.resources[i] = Math.min(
					this.resources[i] + this.resourceGenerationRate[i] * dt,
					this.resourceMax[i]
				);
			}

			// Count cities every couple updates
			if (config.isServer && this.game.updateIndex % 5 === 0) {
				// Find all related entities
				let cityCount = 0;
				let totalLaborAvailable = 0;
				let totalLaborDemand = 0;
				let totalResourceDemand = this.totalResourceDemand.map(() => 0);
				let dominationCities = {};
				this.game.queryCircle(this.x, this.y, this.radius, entity => {
					if (entity.isStructure && entity.isConstructed) {
						if (entity.isCity) {
							// Add city
							cityCount += 1;
							totalLaborAvailable += entity.citizens;

							// Tally domination cities
							let clientOwner = entity.clientOwner;
							let key = clientOwner.alliance
								? `a:${clientOwner.alliance.id}`
								: `p:${clientOwner.id}`;
							if (dominationCities[key]) dominationCities[key]++;
							else dominationCities[key] = 1;
						} else if (entity.isWorkingStructure) {
							// Add labor demand
							totalLaborDemand += entity.laborDemand;

							// Add resource demands
							if (entity.isMine) {
								totalResourceDemand[entity.resourceIndex] += entity.adjustedGenerationRate;
							}
						}
					}
				});

				// Get the dominating item
				let dominatingItem = Object.keys(dominationCities).sort(
					(a, b) => dominationCities[b] - dominationCities[a]
				)[0];

				// Set values; we do this after querying, since values like `adjustedGenerationRate` depend on the
				// current values
				this.cityCount = cityCount;
				this.totalLaborAvailable = totalLaborAvailable;
				this.totalLaborDemand = totalLaborDemand;
				this.totalResourceDemand = totalResourceDemand;
				this.dominationCities = dominationCities;
				this.dominatingItem = dominatingItem;
			}
		}

		super.update(dt);
	}

	onCollision(entity, dt) {
		// Pull entity in to gravitational field
		let pullMagnitude = config.playerAcceleration * 0.6; // Make sure it's less than the player's acceleration
		let pullAngle = Math.atan2(this.y - entity.y, this.x - entity.x);
		if (!entity.ignoreGravity) {
			entity.addVelocity(
				Math.cos(pullAngle) * pullMagnitude * dt,
				Math.sin(pullAngle) * pullMagnitude * dt
			);
		}

		// Prevent drag on player when in gravity field
		if (entity.isPlayer) {
			entity.useDrag = false;
			entity.overlappingPlanet = this;
		}

		// Force facing away if player is slightly above the surface
		if (entity.isPlayer && utils.entitiesCollide(this, entity, true, 25)) {
			entity.overrideTargetRot = -pullAngle + Math.PI;
			entity.isLanded = true;
		}

		// Handle collision with actual body
		if (utils.entitiesCollide(this, entity)) {
			if (entity.isBullet) {
				entity.destroyBullet();
			} else if (entity.isAsteroid) {
				entity.destroy();
			} else if (entity.isPlayer) {
				// Place player on surface
				utils.placeOnSurface(this, entity);
			}
		}
	}

	render(ctx, dt, layerDepth) {
		let planet = planets.planets[(this.id - 1) % planets.planets.length]; // Subtract 1 from ID so center planet is green

		if (layerDepth === this.renderLayers[0]) {
			// Render base
			ctx.save();
			ctx.fillStyle = '#38A2EC';
			ctx.globalAlpha = 0.1;
			ctx.beginPath();
			ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
			ctx.fill();
			ctx.restore();

			if (settings.fancyPlanets) {
				// Create atmosphere gradient
				let stopSpacing = 0.15;
				let glowRadius = this.radius / (1 - stopSpacing); // Scale so the center of the glow is on the edge of the atmosphere
				let atmosphereGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, glowRadius);
				atmosphereGradient.addColorStop(0, utils.getAtmosphereColor(0.0));
				atmosphereGradient.addColorStop(1 - stopSpacing * 2, utils.getAtmosphereColor(0.01));
				atmosphereGradient.addColorStop(1 - stopSpacing, utils.getAtmosphereColor(0.07));
				atmosphereGradient.addColorStop(1.0, utils.getAtmosphereColor(0.0));

				// Render glow
				ctx.save();
				ctx.fillStyle = atmosphereGradient;
				ctx.globalCompositeOperation = 'screen';
				ctx.beginPath();
				ctx.arc(0, 0, glowRadius, 0, Math.PI * 2);
				ctx.fill();
				ctx.restore();
			}

			// Render prop
			if (settings.planetProps) {
				let propCount = Math.floor(this.planetCircumference / 350);
				for (let i = 0; i < propCount; i++) {
					// Get the prop ID
					let propId = planet.props[Math.floor((i / propCount) * planet.props.length)];
					let prop = planets.props[propId];

					// Position and size the tree
					let propAngle = (utils.getRandomConst(i, 0) + i) * Math.PI * 2; // We add i, since > 128 trees will repeat values
					let propSize = prop.sizes[Math.floor(utils.getRandomConst(i, 1) * prop.sizes.length)];
					let propOffset = propSize / 2 - (propSize / 4) * utils.getRandomConst(i, 2);
					let propX = Math.cos(propAngle) * (this.bodyRadius + propOffset);
					let propY = Math.sin(propAngle) * (this.bodyRadius + propOffset);
					let propScaleX = Math.sign(utils.getRandomConst(i, 3) - 0.5);

					// Make sure the point is visible
					if (!this.game.pointVisible(this.x + propX, -this.y + propY, propSize)) continue;

					// Draw the tree
					ctx.save();
					ctx.translate(propX, propY);
					ctx.rotate(propAngle + Math.PI / 2);
					ctx.scale(propScaleX, 1);
					utils.drawImage(ctx, assets.propUrl(propId), 0, 0, propSize, propSize);
					ctx.restore();
				}
			}
		} else {
			let planetCircumference = this.planetCircumference;

			if (settings.planetProps) {
				// Render clouds
				// let cloudCount = Math.floor(planetCircumference / 400) * (1 + (1 - this.planetHealth) * 8);
				let cloudCount = Math.floor(planetCircumference / 400);
				let cloudSize = 128;
				for (let i = 0; i < cloudCount; i++) {
					// Position and size the tree
					let moveSpeed = ((utils.getRandomConst(i, 1) - 0.5) / planetCircumference) * 30;
					let moveOffset = moveSpeed * (Date.now() / 1000);
					let cloudAngle = ((utils.getRandomConst(i, 0) + i + moveOffset) % 1) * Math.PI * 2;
					let cloudIndex = (i % 3) + 1;
					let cloudOffset = this.atmosphereSize * (0.5 + utils.getRandomConst(i, 2) * 0.25);
					let cloudAlpha = utils.getRandomConst(i, 3) * 0.15 + 0.05;
					cloudAlpha = utils.lerp(cloudAlpha, 0.6, 1 - this.planetHealth); // Make the cloud darker if the planet is dead
					let cloudX = Math.cos(cloudAngle) * (this.bodyRadius + cloudOffset);
					let cloudY = Math.sin(cloudAngle) * (this.bodyRadius + cloudOffset);

					// Make sure the point is visible
					if (!this.game.pointVisible(this.x + cloudX, -this.y + cloudY, 64)) continue;

					// Draw the tree
					ctx.save();
					ctx.translate(cloudX, cloudY);
					ctx.rotate(cloudAngle + Math.PI / 2);
					ctx.globalAlpha = cloudAlpha;
					// ctx.filter = `brightness(${planetHealth})`;
					// ctx.filter += " blur(5px)";  // For blurry clouds
					utils.drawImage(ctx, assets.propUrl(`cloud-${cloudIndex}`), 0, 0, cloudSize, cloudSize);
					ctx.restore();
				}

				// Render humans
				let humanCount = Math.floor(this.totalLaborAvailable / 20);
				let humanSize = 48;
				for (let i = 0; i < humanCount; i++) {
					// Position and size the tree
					let isVehicle = i % 4 === 0;
					let moveDir = Math.sign(utils.getRandomConst(i, 0) - 0.5);
					let moveSpeed = moveDir * (0.5 + utils.getRandomConst(i, 1) * 0.5);
					if (isVehicle) moveSpeed *= 2;
					let moveSpeedAngular = (moveSpeed / planetCircumference) * 50;
					let moveOffset = moveSpeedAngular * (Date.now() / 1000);
					let humanAngle = ((utils.getRandomConst(i, 2) + i + moveOffset) % 1) * Math.PI * 2;
					let bobbleMultiplier = isVehicle ? 2 : 10;
					let humanBobble = Math.sin((Date.now() / 1000) * moveSpeed * bobbleMultiplier); // Faster the move speed, faster they move up and down
					let humanOffset = humanSize * (0.6 + humanBobble * 0.08);
					let humanX = Math.cos(humanAngle) * (this.bodyRadius + humanOffset);
					let humanY = Math.sin(humanAngle) * (this.bodyRadius + humanOffset);
					let humanIndex = Math.floor(utils.getRandomConst(i, 2) * 3) + 1;

					// Make sure the point is visible
					if (!this.game.pointVisible(this.x + humanX, -this.y + humanY, 64)) continue;

					// Draw the tree
					ctx.save();
					ctx.translate(humanX, humanY);
					ctx.rotate(humanAngle + Math.PI / 2);
					ctx.scale(moveDir, 1);
					utils.drawImage(
						ctx,
						assets.propUrl(isVehicle ? 'vehicle-1' : `human-${humanIndex}`),
						0,
						0,
						humanSize,
						humanSize
					);
					ctx.restore();
				}
			}

			if (settings.fancyPlanets) {
				// Create body gradient
				let bodyGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.bodyRadius);
				bodyGradient.addColorStop(0.0, planet.innerColor);
				bodyGradient.addColorStop(1.0, planet.outerColor);

				// Render body
				ctx.save();
				ctx.beginPath();
				ctx.fillStyle = bodyGradient;
				ctx.arc(0, 0, this.bodyRadius, 0, Math.PI * 2);
				ctx.fill();
				ctx.restore();
			} else {
				// Render body
				ctx.save();
				ctx.beginPath();
				ctx.fillStyle = planet.innerColor;
				ctx.arc(0, 0, this.bodyRadius, 0, Math.PI * 2);
				ctx.fill();
				ctx.restore();
			}
		}
	}
}

Planet.addSyncKeys(
	{ key: 'name', type: 'string', update: false },
	{
		key: 'atmosphereSize',
		type: 'float',
		update: false,
		quantize: { min: 0, max: config.centerPlanetAtmosphereSize, bits: 7 }
	},
	{
		key: 'resources',
		type: 'int[]',
		update: true,
		sendMap: v => v.map(r => Math.floor(r))
	},
	{
		key: 'resourceMax',
		type: 'int[]',
		update: false,
		sendMap: v => v.map(r => Math.floor(r))
	},
	{
		key: 'resourceGenerationRate',
		type: 'float[]',
		update: false,
		sendMap: v => utils.quantizeSimpleArray(v, 1),
		receiveMap: v => utils.unquantizeSimpleArray(v, 1)
	},
	{
		key: 'totalLaborAvailable',
		type: 'int',
		update: true,
		sendMap: v => Math.floor(v)
	}, // Round down
	{
		key: 'totalLaborDemand',
		type: 'int',
		update: true,
		sendMap: v => Math.floor(v)
	}, // Round down
	{
		key: 'totalResourceDemand',
		type: 'float[]',
		update: true,
		sendMap: v => utils.quantizeSimpleArray(v, 1),
		receiveMap: v => utils.unquantizeSimpleArray(v, 1)
	}
);

module.exports = Planet;
