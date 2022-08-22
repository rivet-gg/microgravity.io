const config = require('../config/config');

const settings = {
	// Preconfigured settings
	settings: {
		mute: {
			type: 'boolean',
			defaultValue: false,
			onChange: value => {
				const { Howler } = require('howler');
				Howler.mute(value);
			}
		},
		muteAmbient: {
			type: 'boolean',
			defaultValue: false,
			onChange: value => {
				const assets = require('../client/assets');
				assets.sound.mute(value, assets.ambientSoundId);
			}
		},
		// positionalAudio: {
		//     type: "boolean",
		//     defaultValue: false,
		//     onChange: value => {
		//         const assets = require("./assets");
		//         assets.positionalAudio = value;
		//     }
		// },

		nativeResolution: {
			type: 'boolean',
			defaultValue: isiOS()
		},

		directionalMovement: {
			type: 'boolean',
			defaultValue: false
		},
		rss: {
			type: 'boolean',
			defaultValue: false
		},
		fancyPlanets: {
			type: 'boolean',
			defaultValue: true
		},
		planetProps: {
			type: 'boolean',
			defaultValue: true
		},
		stars: {
			type: 'boolean',
			defaultValue: true
		},
		spaceDust: {
			type: 'boolean',
			defaultValue: true
		},
		fancyExplosions: {
			type: 'boolean',
			defaultValue: true
		}
	},

	// Getters and setters
	makeKey(key) {
		return `microgravity:${key}`;
	},

	has(key) {
		return localStorage.getItem(this.makeKey(key)) != null;
	},

	getBoolean(key, defaultValue) {
		let value = localStorage.getItem(this.makeKey(key));
		if (value == null) {
			return defaultValue;
		} else {
			return value === 'true';
		}
	},

	setBoolean(key, value) {
		localStorage.setItem(this.makeKey(key), value ? 'true' : 'false');
	},

	getString(key, defaultValue) {
		let value = localStorage.getItem(this.makeKey(key));
		if (value == null) {
			return defaultValue;
		} else {
			return value;
		}
	},

	setString(key, value) {
		localStorage.setItem(this.makeKey(key), value);
	}

	// Reset settings
	// resetSettings() {
	//     for (let settingId in this.settings) {
	//         this[settingId] = this.settings[settingId].defaultValue;
	//     }
	// }
};

// Add quick getters/setters for settings
if (config.isClient) {
	for (let settingId in settings.settings) {
		let settingData = settings.settings[settingId];

		// Define getter and setter
		Object.defineProperty(settings, settingId, {
			get() {
				// Return the data
				switch (settingData.type) {
					case 'boolean':
						return settings.getBoolean(settingId, settingData.defaultValue);
					default:
						throw new Error(`Unknown value type ${settingData.type}.`);
				}
			},

			set(value) {
				// Set the data
				switch (settingData.type) {
					case 'boolean':
						settings.setBoolean(settingId, value);
						break;
					default:
						throw new Error(`Unknown value type ${settingData.type}.`);
				}

				// Call the setter
				if (settingData.onChange) settingData.onChange(value);

				// Broadcast the event
				let event = new Event(`${settingId}Change`);
				document.dispatchEvent(event);
			}
		});

		// Call default on change after timeout
		if (settingData.onChange) settingData.onChange(settings[settingId]);
	}
}

function isiOS() {
	// https://stackoverflow.com/a/9039885/2016800
	return config.isClient && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

module.exports = settings;
