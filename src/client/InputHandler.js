const keycode = require('keycode');

/**
 * @typedef {string|number} InputKey
 */

/**
 * @typedef {InputKey[]} InputKeyList
 */

/**
 * @callback InputCallback
 * @param {KeyboardEvent} event
 */

/**
 * @readonly
 * @enum {number}
 */
const SubscribeType = {
	DOWN: 0,
	UP: 1,
	BOTH: 2
};

const InputHandler = {
	SubscribeType: SubscribeType,

	/* Keyboard */
	/**
	 * Array of key states.
	 * @type {Object.<string, boolean>}
	 */
	keys: {},

	/**
	 * List of subscriptions to key down events.
	 * @type {Object.<string, InputCallback>}
	 */
	keyDownSubscriptions: {},

	/**
	 * List of subscriptions to key up events.
	 * @type {Object.<string, InputCallback>}
	 */
	keyUpSubscriptions: {},

	/**
	 * @param {KeyboardEvent} event
	 */
	onKeyDown(event) {
		let code = keycode(event);

		// Make sure the key is not already down, since `keydown` repeats over and over again
		if (this.keys[code]) return;

		// Save the state and trigger the event
		this.keys[code] = true;
		if (this.keyDownSubscriptions[code]) this.keyDownSubscriptions[code](event);
	},

	/**
	 * @param {KeyboardEvent} event
	 */
	onKeyUp(event) {
		// Save the state and trigger the event
		let code = keycode(event);
		this.keys[code] = false;
		if (this.keyUpSubscriptions[code]) this.keyUpSubscriptions[code](event);
	},

	/**
	 * Returns whether or not a list of keys are down.
	 * @param {...InputKey} keys
	 * @returns {boolean}
	 */
	key(...keys) {
		// Normalize
		keys = InputHandler.normalizeCodes(keys);

		// Return true if any of the keys are down
		for (let key of keys) {
			// Return true if is down
			let value = this.keys[key];
			if (value)
				// If not null and is true
				return true;
		}

		// Otherwise return false
		return false;
	},

	/**
	 * Subscribe to events.
	 * @param {InputKeyList} keys
	 * @param {InputCallback} callback
	 * @param {SubscribeType} subscribeType
	 */
	subscribe(keys, callback, subscribeType = SubscribeType.DOWN) {
		// Normalize
		keys = InputHandler.normalizeCodes(keys);

		// Subscribe
		for (let key of keys) {
			if (subscribeType === SubscribeType.DOWN || subscribeType === SubscribeType.BOTH) {
				InputHandler.keyDownSubscriptions[key] = callback;
			}
			if (subscribeType === SubscribeType.UP || subscribeType === SubscribeType.BOTH) {
				InputHandler.keyUpSubscriptions[key] = callback;
			}
		}
	},

	/**
	 * Normalizes a list of key codes
	 * @param {InputKeyList} keys
	 * @returns {string[]}
	 */
	normalizeCodes(keys) {
		// Go through array and normalize codes to string
		for (let i = 0; i < keys.length; i++) {
			// Get the key's code
			let key = keys[i];
			if (typeof key === 'string') {
				keys[i] = keycode(keycode(key)); // Normalize the keycode
			} else {
				keys[i] = keycode(key); // Convert key to a string
			}
		}

		return keys;
	},

	/* Gamepad */
	/**
	 * Return a list of gamepads.
	 * @returns {Gamepad[]}
	 */
	get gamepads() {
		return navigator.getGamepads
			? navigator.getGamepads()
			: navigator.webkitGetGamepads
			? navigator.webkitGetGamepads()
			: [];
	},

	/** @returns {number} */ get leftJoystickX() {
		return this.axisValue(0);
	},
	/** @returns {number} */ get leftJoystickY() {
		return this.axisValue(1);
	},

	/** @returns {number} */ get rightJoystickX() {
		return this.axisValue(2);
	},
	/** @returns {number} */ get rightJoystickY() {
		return this.axisValue(3);
	},

	/** @returns {number} */ get arrowsX() {
		return this.axisValue(4);
	},
	/** @returns {number} */ get arrowsY() {
		return this.axisValue(5);
	},

	/** @returns {number} */ get leftBumper1() {
		return this.buttonValue(4);
	},
	/** @returns {boolean} */ get leftBumper1Pressed() {
		return this.buttonPressed(4);
	},

	/** @returns {number} */ get leftBumper2() {
		return this.buttonValue(6);
	},
	/** @returns {boolean} */ get leftBumper2Pressed() {
		return this.buttonPressed(6);
	},

	/** @returns {number} */ get rightBumper1() {
		return this.buttonValue(5);
	},
	/** @returns {boolean} */ get rightBumper1Pressed() {
		return this.buttonPressed(5);
	},

	/** @returns {number} */ get rightBumper2() {
		return this.buttonValue(7);
	},
	/** @returns {boolean} */ get rightBumper2Pressed() {
		return this.buttonPressed(7);
	},

	/** @returns {number} */ get buttonA() {
		return this.buttonValue(0);
	},
	/** @returns {boolean} */ get buttonAPressed() {
		return this.buttonPressed(0);
	},

	/** @returns {number} */ get buttonB() {
		return this.buttonValue(1);
	},
	/** @returns {boolean} */ get buttonBPressed() {
		return this.buttonPressed(1);
	},

	/** @returns {number} */ get buttonX() {
		return this.buttonValue(2);
	},
	/** @returns {boolean} */ get buttonXPressed() {
		return this.buttonPressed(2);
	},

	/** @returns {number} */ get buttonY() {
		return this.buttonValue(3);
	},
	/** @returns {boolean} */ get buttonYPressed() {
		return this.buttonPressed(3);
	},

	/**
	 * @param {number} index
	 * @returns {number}
	 */
	axisValue(index) {
		let value = 0;
		for (let gamepad of this.gamepads) {
			if (gamepad instanceof Gamepad) value += gamepad.axes[index];
		}
		return value;
	},

	/**
	 * @param {number} index
	 * @returns {number}
	 */
	buttonValue(index) {
		let value = 0;
		for (let gamepad of this.gamepads) {
			if (gamepad instanceof Gamepad) value += gamepad.buttons[index].value;
		}
		return value;
	},

	/**
	 * @param {number} index
	 * @returns {boolean}
	 */
	buttonPressed(index) {
		for (let gamepad of this.gamepads) {
			if (gamepad instanceof Gamepad && gamepad.buttons[index].pressed) return true;
		}
		return false;
	}
};

// Initialize
document.addEventListener('keydown', e => InputHandler.onKeyDown(e), false);
document.addEventListener('keyup', e => InputHandler.onKeyUp(e), false);

module.exports = InputHandler;
