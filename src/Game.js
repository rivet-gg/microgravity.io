const QuadNode = require('quad-node');
const Player = require('./entities/Player');
const Asteroid = require('./entities/Asteroid');
const Bullet = require('./entities/Bullet');
const Planet = require('./entities/Planet');
const Wormhole = require('./entities/Wormhole');
const config = require('./config/config');
const utils = require('./utils');
const structures = require('./config/structures');

class Game {
	constructor() {
		this._init();
	}

	_init() {
		// Create quad tree
		let mapRadius = config.mapSize / 2;
		this.tree = new QuadNode({
			minx: -mapRadius,
			miny: -mapRadius,
			maxx: mapRadius,
			maxy: mapRadius
		});

		/** @type {Object.<number, Entity>} */ this.entities = {};
		/** @type {Object.<number, Entity>} */ this.prunedEntities = {};
		/** @type {{x:number, y: number, radius: number, multiplier: number}[]} */ this.timeWarps = [];

		/* @type {number} */ this.updateIndex = 0;
	}

	reset() {
		console.log('Resetting game');

		this._init();
	}

	entityForId(id) {
		return this.entities[id];
	}

	/**
	 * Queries for all entities in a given rect. Calls the callback multiple times in order to prevent allocating an
	 * array each time this is called.
	 * @param {number} x - Center X position.
	 * @param {number} y - Center Y position.
	 * @param {number} width
	 * @param {number} height
	 * @param {queryCallback} cb
	 */
	queryRect(x, y, width, height, cb) {
		this.queryMinMax(x - width / 2, x + width / 2, y - height / 2, y + height / 2, cb);
	}

	queryMinMax(minx, maxx, miny, maxy, cb) {
		// Create reusable query bound object
		if (this._queryBound == null) {
			this._queryBound = {};
		}

		// Update query bound
		this._queryBound.minx = minx;
		this._queryBound.maxx = maxx;
		this._queryBound.miny = miny;
		this._queryBound.maxy = maxy;

		// Query for entities
		this.queryBound(this._queryBound, cb);
	}

	queryCircle(x, y, radius, cb) {
		// Create reusable query bound object
		if (this._queryBound == null) {
			this._queryBound = {};
		}

		// Update query bound
		this._queryBound.minx = x - radius;
		this._queryBound.maxx = x + radius;
		this._queryBound.miny = y - radius;
		this._queryBound.maxy = y + radius;

		// Query for entities
		this.queryBound(this._queryBound, entity => {
			if (utils.dist(x, y, entity.x, entity.y) > radius + entity.radius) return;
			cb(entity);
		});
	}

	/**
	 * @param {Object} bound
	 * @param {queryCallback} cb
	 */
	queryBound(bound, cb) {
		// Query for entities
		this.tree.find(bound, cb);
	}

	update(dt) {
		// Increase update index
		this.updateIndex++;

		// Before update
		for (let entityId in this.entities) {
			let entity = this.entities[entityId];
			if (entity.beforeUpdate) entity.beforeUpdate();
		}

		// Update all of the entities
		for (let entityId in this.entities) {
			let entity = this.entities[entityId];

			// Warp dt
			let wdt = this.warpTime(entity.x, entity.y, entity.radius, dt);

			// Update the entity
			entity.update(wdt);

			// Update bounds if needed
			if (entity._dirtyBound) {
				entity._updateBound();
				this.tree.update(entity);
			}
		}

		// Remove entities
		this._pruneEntities();

		// Handle collisions
		for (let entityId in this.entities) {
			let entity = this.entities[entityId];

			// Only check entities that want collisions
			if (!entity.checkCollisions) continue;

			// Query the entities
			this.queryBound(entity.bound, otherEntity => {
				// Don't collide with self
				if (entity.id === otherEntity.id) return;

				// Don't collide if destroyed
				if (entity.destroyed || otherEntity.destroyed) return;

				// Check if circles collide, since the query only checks rects
				if (!utils.entitiesCollide(entity, otherEntity, false)) return;

				// Warp dt
				let wdt = this.warpTime(otherEntity.x, otherEntity.y, otherEntity.radius, dt);

				// Collide event
				entity.onCollision(otherEntity, wdt);
			});
		}

		// Update time warps
		let i = 0;
		for (let entityId in this.entities) {
			let entity = this.entities[entityId];
			if (!entity.isWormhole) continue;

			// Create or update time warp
			let timeWarp = this.timeWarps[i];
			if (!timeWarp) {
				timeWarp = {};
				this.timeWarps[i] = timeWarp;
			}

			// Update time warp
			timeWarp.x = entity.x;
			timeWarp.y = entity.y;
			timeWarp.radius = entity.radius;
			timeWarp.multiplier = entity.timeMultiplier;

			// Increment index
			i++;
		}
		this.timeWarps.length = i; // Remove extra items

		// Remove entities
		this._pruneEntities();
	}

	warpTime(x, y, radius, dt) {
		// Get time multiplier
		let timeMultiplier = 1;
		for (let warp of this.timeWarps) {
			if (utils.dist(x, y, warp.x, warp.y) < warp.radius + radius) {
				timeMultiplier *= warp.multiplier;
			}
		}

		// Warp the dt
		return dt * timeMultiplier;
	}

	/**
	 *
	 * @param {Entity} entity
	 */
	insertEntity(entity) {
		// Make sure entity doesn't already exist
		if (!!this.entities[entity.id]) throw new Error(`Already has entity for ID ${entity.id}.`);

		// Call init
		entity.onInit();

		// Update previous value
		entity.prevX = entity.x;
		entity.prevY = entity.y;

		// Update the bounds
		entity._updateBound(true);

		// Add entity
		this.entities[entity.id] = entity;

		// Add to render layer
		if (config.isClient) {
			for (let layerDepth of entity.renderLayers) {
				if (!this.renderLayers[layerDepth]) {
					this.renderLayers[layerDepth] = [];
				}
				this.renderLayers[layerDepth].push(entity);
			}
		}

		// Insert into quad tree
		this.tree.insert(entity);

		// Call create event
		entity.onInsert();
	}

	_pruneEntities() {
		// Remove entities if needed
		for (let entityId in this.entities) {
			let entity = this.entities[entityId];

			// Remove the entity
			if (entity.destroyed) {
				this._removeEntity(entity);
				this.prunedEntities[entityId] = entity;
			}
		}
	}

	/**
	 * Removes an entity from the game. To destroy an entity publicly, use the `Entity.destroy` method.
	 * @param {Entity} entity
	 */
	_removeEntity(entity) {
		// Validate entity exists and in the map
		if (entity == null || !this.entities[entity.id])
			throw new Error(`Entity for ID ${entity.id} does not exist.`);

		// Remove the entity
		delete this.entities[entity.id];

		// Remove from render layer
		if (config.isClient) {
			for (let layerDepth of entity.renderLayers) {
				let layer = this.renderLayers[layerDepth];
				let index = layer.indexOf(entity);
				if (index !== -1) {
					layer.splice(index, 1);
				} else {
					console.error(
						`Failed to find entity ${entity.id}'s render layer ${entity.renderLayers}.`
					);
				}
			}
		}

		// Remove from tree
		this.tree.remove(entity);

		// Remove the entity
		entity.onRemove();
	}
}

// Set up entity kind map
let entityPrototypes = [Asteroid, Bullet, Planet, Wormhole, Player];
for (let structure of structures.structures) {
	entityPrototypes.push(structure.getPrototype());
}
Game.ENTITY_KINDS = {};
for (let i = 0; i < entityPrototypes.length; i++) {
	let entityPrototype = entityPrototypes[i];
	entityPrototype.KIND = i;
	Game.ENTITY_KINDS[i] = entityPrototype;
}

module.exports = Game;
