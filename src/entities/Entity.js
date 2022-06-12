const utils = require('../utils');
const config = require('../config/config');

class Entity {
	constructor(game) {
		this.isEntity = true;

		// Save the game
		/** @type {Game} */ this.game = game;

		// Create ID
		if (config.isServer) {
			this.id = game.entityIdCounter++;
		} else {
			this.id = -1;
		}

		// Create state
		this.x = 0;
		this.y = 0; // Y position is rendered as up, even though a positive Y is negative in the 2D canvas
		this.velX = 0;
		this.velY = 0; // See note about coordinates for `this.y`
		this.rot = 0;
		this.radius = 0;

		// Create server state
		if (config.isClient) {
			this.xServer = 0;
			this.yServer = 0;
			this.velXServer = 0;
			this.velYServer = 0;
			this.rotServer = 0;
		}

		// Create the old values; used for knowing wether or not to update the bounds in the quad tree; these will be
		// updated in `_updateBound`
		this.oldX = null;
		this.oldY = null;
		this.oldRadius = null;

		// Previous values; this is ued if `checkTrail` is true; this is set at the beginning of the frame before the
		// x and y positions are updated, so any code *after* the updates will be correct; this is set in
		// `Game.insertEntity` since the position will be set after the entity is created.
		this.prevX = null;
		this.prevY = null;

		// Physics properties
		this.checkCollisions = false;
		this.checkCircle = true; // If collisions with the main body should be checked
		this.checkTrail = false; // If collisions with the entity's trail should be checked

		// Send updates
		this.sendUpdates = true;

		// Set destroyed
		this.destroyed = false;
		this.destroyedData = null;

		// Rendering
		this.renderLayers = [0];

		// Update the bounds
		this.bound = {};
	}

	get _dirtyBound() {
		return (
			this.radius !== this.oldRadius ||
			this.x !== this.oldX ||
			this.y !== this.oldY ||
			(this.checkTrail && (this.prevX !== this.x || this.prevY !== this.y))
		);
	}

	_updateBound(force = false) {
		// Don't handle dirty bounds
		if (!force && !this._dirtyBound) return;

		if (this.checkCircle) {
			// Bound around the circle
			this.bound.minx = this.x - this.radius;
			this.bound.maxx = this.x + this.radius;
			this.bound.miny = this.y - this.radius;
			this.bound.maxy = this.y + this.radius;
		} else {
			// Just a single point
			this.bound.minx = this.x;
			this.bound.maxx = this.x;
			this.bound.miny = this.y;
			this.bound.maxy = this.y;
		}

		// Add bounds around trail
		if (this.checkTrail) {
			this.bound.minx = Math.min(this.bound.minx, this.prevX);
			this.bound.maxx = Math.max(this.bound.maxx, this.prevX);
			this.bound.miny = Math.min(this.bound.miny, this.prevY);
			this.bound.maxy = Math.max(this.bound.maxy, this.prevY);
		}

		// Update old values
		this.oldRadius = this.radius;
		this.oldX = this.x;
		this.oldY = this.y;
	}

	update(dt) {
		// Update previous
		this.prevX = this.x;
		this.prevY = this.y;

		// Update position
		this.x += this.velX * dt;
		this.y += this.velY * dt;
		this.xServer += this.velXServer * dt;
		this.yServer += this.velYServer * dt;

		// Lerp to the server values
		if (config.isClient) {
			let enableLerping = true;
			if (enableLerping) {
				let correctionLerpSpeed = Entity.correctionLerpSpeed * dt;
				this.x = utils.lerp(this.x, this.xServer, correctionLerpSpeed);
				this.y = utils.lerp(this.y, this.yServer, correctionLerpSpeed);
				this.velX = utils.lerp(this.velX, this.velXServer, correctionLerpSpeed);
				this.velY = utils.lerp(this.velY, this.velYServer, correctionLerpSpeed);
				this.rot = utils.slerp(this.rot, this.rotServer, correctionLerpSpeed);
			} else {
				this.x = this.xServer;
				this.y = this.yServer;
				this.velX = this.velXServer;
				this.velY = this.velYServer;
				this.rot = this.rotServer;
			}
		}

		// Keep position within the map
		let posAngle = Math.atan2(this.y, this.x);
		let posDist = utils.dist(this.x, this.y);
		let maxDist = Math.min(posDist, config.mapRadius - this.radius);
		if (posDist > maxDist) {
			// Cap position to border
			this.x = this.xServer = Math.cos(posAngle) * maxDist;
			this.y = this.yServer = Math.sin(posAngle) * maxDist;

			// Bounce velocity
			let velMag = utils.dist(this.velX, this.velY);
			this.velX = this.velXServer = Math.cos(posAngle + Math.PI) * velMag;
			this.velY = this.velYServer = Math.sin(posAngle + Math.PI) * velMag;

			// Change bullet rotation
			if (this.isBullet && this.bulletRot != null) {
				this.bulletRot = -posAngle + Math.PI;
			}
		}
	}

	/**
	 * Called immediately before being configured and inserted in to the game.
	 */
	onInit() {}

	/**
	 * Called when inserted in to the game.
	 */
	onInsert() {}

	/**
	 * Called after removed from the game.
	 */
	onRemove() {}

	/**
	 * Destroys the given entity
	 * @param isDestroyed - Can be set to false to not call `onDestroy`. This is used for when the entity only
	 * disappears.
	 */
	destroy(isDestroyed = true) {
		// Don't do anything if already destroyed
		if (this.destroyed) return;

		// Flag destroyed
		this.destroyed = true;

		// Call event
		if (isDestroyed) {
			this.onDestroy();
		}
	}

	/**
	 * @param {Entity} entity
	 */
	onCollision(entity) {
		// Override point
	}

	onDestroy() {}

	setVelocity(x, y) {
		this.velX = x;
		this.velY = y;

		if (config.isClient) {
			this.velXServer = x;
			this.velYServer = y;
		}
	}

	addVelocity(x, y) {
		this.velX += x;
		this.velY += y;

		if (config.isClient) {
			this.velXServer += x;
			this.velYServer += y;
		}
	}

	setRotation(rot) {
		this.rot = rot;
		if (config.isClient) {
			this.rotServer = rot;
		}
	}

	addRotation(rot) {
		this.rot += rot;
		if (config.isClient) {
			this.rotServer += rot;
		}
	}

	/**
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {number} dt
	 * @param {number} layerDepth
	 */
	render(ctx, dt, layerDepth) {
		throw new Error('Render is not implemented.');
	}

	/**
	 * @param {CanvasRenderingContext2D} ctx
	 */
	debugRender(ctx) {
		ctx.save();

		// Draw border
		ctx.beginPath();
		ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
		ctx.stroke();

		// Draw direction
		let tickSize = 10;
		ctx.beginPath();
		ctx.moveTo(this.radius - tickSize / 2, 0);
		ctx.lineTo(this.radius + tickSize / 2, 0);
		ctx.stroke();

		// Draw ID
		ctx.save();
		ctx.font = utils.generateFont(30, 800);
		ctx.rotate(-this.rot);
		ctx.fillText(this.id, 0, 0);
		ctx.restore();

		ctx.restore();
	}

	static addSyncKeys(...keys) {
		// Append to key order; we use `concat` since we want to duplicate the array and not manipulate the superclass
		this._syncKeys = this._syncKeys.concat(keys);

		// Filter out the init and update keys
		let initKeys = [];
		let updateKeys = [];
		for (let key of keys) {
			if (key.update) {
				updateKeys.push(key);
			} else {
				initKeys.push(key);
			}
		}
		this._syncInitKeys = this._syncInitKeys.concat(initKeys);
		this._syncUpdateKeys = this._syncUpdateKeys.concat(updateKeys);

		// Save to a map for faster lookup
		let keyMap = {};
		for (let key of this._syncKeys) {
			keyMap[key.key] = key;
		}
		this._syncKeyMap = keyMap;
	}

	serializeInit() {
		// Set default data
		let data = [this.constructor.KIND, this.serialize()];

		// Add custom data
		for (let key of this.constructor._syncInitKeys) {
			data.push(this._readServerValue(key));
		}

		return data;
	}

	deserializeInit(data) {
		// Parse default data
		let [kind, updateData, ...syncInitValues] = data;

		// Assign init values
		for (let i = 0; i < this.constructor._syncInitKeys.length; i++) {
			this._assignServerValue(this.constructor._syncInitKeys[i], syncInitValues[i]);
		}

		// Deserialize update data
		this.deserialize(updateData, true);
	}

	serialize() {
		// Add custom data
		let data = [];
		for (let key of this.constructor._syncUpdateKeys) {
			data.push(this._readServerValue(key));
		}

		return data;
	}

	deserialize(data, isInit = false) {
		// Assign update values
		for (let i = 0; i < this.constructor._syncUpdateKeys.length; i++) {
			this._assignServerValue(this.constructor._syncUpdateKeys[i], data[i], isInit);
		}
	}

	_readServerValue(key) {
		// Get the value
		let value = this[key.key];

		// Map the value if needed
		if (key.sendMap) {
			value = key.sendMap(value);
		}

		// Quantize the value if needed
		if (key.quantize) {
			value = utils.quantize(value, key.quantize.min, key.quantize.max, key.quantize.bits);
		}

		return value;
	}

	_assignServerValue(key, value, initUpdate = false) {
		// Quantize the value if needed
		if (key.quantize) {
			value = utils.unquantize(value, key.quantize.min, key.quantize.max, key.quantize.bits);
		}

		// Map the received value if needed
		if (key.receiveMap) {
			value = key.receiveMap(value);
		}

		// Assign to the normal key; this will be doen on the init update for server values
		if (!key.serverKey || initUpdate) this[key.key] = value;

		// Assign the value to a separate key instead of the normal key
		if (key.serverKey) this[key.key + 'Server'] = value;
	}
}

/** @type {number} */
Entity.KIND = -1;

/** @type {number} */
Entity.correctionLerpSpeed = 9;

Entity._syncKeys = [];
Entity._syncInitKeys = [];
Entity._syncUpdateKeys = [];
Entity._syncKeyMap = {};

let mapRadius = config.mapSize / 2;
let maxVelocity = 4000; // Player's boost velocity is 700
Entity.addSyncKeys(
	{ key: 'x', type: 'float', update: true, serverKey: true },
	{ key: 'y', type: 'float', update: true, serverKey: true },
	{ key: 'velX', type: 'float', update: true, serverKey: true },
	{ key: 'velY', type: 'float', update: true, serverKey: true },
	{
		key: 'rot',
		type: 'float',
		update: true,
		serverKey: true,
		sendMap: v => utils.modFix(v, Math.PI * 2)
	}, // Map the rotation to 0 to 2 * pi
	{ key: 'radius', type: 'float', update: false } // 0.1 min, since 0 radius is invalid
);

module.exports = Entity;
