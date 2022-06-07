const { Howl, Howler } = require('howler');
const config = require('../config/config');

let assets = {};

assets.canvasCache = {};
assets.createCanvasCacheKey = function (key, width, height) {
	return `${key}-${width}x${height}`;
};
assets.createCanvas = function (key, width, height) {
	width = Math.ceil(width);
	height = Math.ceil(height);

	// Creates a new canvas
	let canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;

	// Save teh canvas
	assets.canvasCache[this.createCanvasCacheKey(key, width, height)] = canvas;

	// Return the canvas
	return canvas;
};
assets.getCanvas = function (key, width, height) {
	// Return the cached canvas
	return this.canvasCache[this.createCanvasCacheKey(key, width, height)];
};
assets.deleteCanvas = function (key, width, height) {
	delete assets.canvasCache[this.createCanvasCacheKey(key, width, height)];
};

assets.imgCache = {};
assets.getImage = function (path, width, height, tint = null) {
	width = Math.ceil(width);
	height = Math.ceil(height);
	let canvasKey = tint ? `${path}:${tint}` : path;

	let canvas = this.getCanvas(canvasKey, width, height);
	if (!canvas) {
		// Get an empty canvas
		canvas = this.createCanvas(canvasKey, width, height);

		// Find the image to draw
		let img = assets.imgCache[path];
		if (img) {
			if (img.isLoaded) {
				// Draw the cached image to the canvas
				this.drawImageToCanvas(img, canvas, tint);
			} else {
				// Wait for the image to load and then draw to the canvas
				img.addEventListener('load', () => this.drawImageToCanvas(img, canvas, tint));
			}
		} else {
			// Fetch the new image
			let img = new Image();
			img.isLoaded = false; // Flag as not loaded yet
			img.src = path;
			img.addEventListener('load', () => {
				// Draw to canvas on load
				this.drawImageToCanvas(img, canvas, tint);

				// Save as loaded
				img.isLoaded = true;
			});
			img.addEventListener('error', () => {
				// Log error
				console.error('Error loading image:', path);

				// Remove the image from the cache to load it again
				delete assets.imgCache[path];
				this.deleteCanvas(path, width, height);
			});

			// Save image to cache
			this.imgCache[path] = img;
		}
	}

	// Return the canvas
	return canvas;
};
assets.drawImageToCanvas = function (img, canvas, tint) {
	let ctx = canvas.getContext('2d');

	// Clear the canvas; this will overwrite any old image; for example, if an image `load` event is added multiple
	// times, then this canvas will be drawn to multiple times
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Draw the image
	ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

	// Draw the tint
	if (tint) {
		ctx.save();
		// ctx.globalCompositeOperation = "source-atop";
		ctx.globalCompositeOperation = 'source-in';
		ctx.fillStyle = tint;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.restore();
	}
};

assets.iconUrl = function (id) {
	return `/img/icons/${id}.svg`;
};

assets.structureUrl = function (id) {
	return `/img/structures/${id}.svg`;
};

assets.propUrl = function (id) {
	return `/img/props/${id}.svg`;
};

assets.effectUrl = function (id) {
	return `/img/effects/${id}.png`;
};

assets.shipUrl = function (id) {
	return `/img/ships/${id}.svg`;
};

assets.asteroidUrl = function (id) {
	return `/img/asteroids/${id}.svg`;
};

let audioSprites = require('../config/audio-sprites.json');
assets.sound =
	config.isClient &&
	new Howl({
		src: audioSprites.urls,
		sprite: audioSprites.sprite,
		pool: 50
	});
assets.positionalAudio = false;
assets.soundListenerX = 0;
assets.soundListenerY = 0;
assets.soundRefDistance = 60;
assets.soundMaxDistance = config.viewDistanceX / 2;

assets.pannerAttr = {
	distanceModel: 'linear',
	refDistance: assets.soundRefDistance,
	maxDistance: assets.soundMaxDistance / 2
};

assets.playSound = function (id, volume = 1.0, x = null, y = null, loop = false) {
	try {
		// Check if the sound should be played; if 0, then skip; we use the default volume if it's positional audio,
		// since the volume will be controlled by the audio engine
		let skipSound = assets.positionalAudio
			? false
			: !loop && this.calculateSoundVolume(volume, x, y) < 0.01;
		if (skipSound) return;

		// Play the sound and save to the register
		let soundId = this.sound.play(id);

		// Add panner attributes to audio if using positional audio
		if (assets.positionalAudio && x != null && y != null)
			this.sound.pannerAttr(assets.pannerAttr, soundId);

		// Set the volume and position
		this.soundVol(soundId, volume, x, y);

		// Loop the sound
		if (loop) this.sound.loop(true, soundId);

		return soundId;
	} catch (e) {
		console.error('HowlerJS Error:', e);
	}
};

assets.calculateSoundVolume = function (baseVolume, x, y) {
	if (x != null && y != null) {
		// Get the distance from the listener
		let distance = Math.sqrt(Math.pow(this.soundListenerY - y, 2) + Math.pow(this.soundListenerX - x, 2));

		// Calculate the volume based on distance
		let distanceProgress =
			(distance - this.soundRefDistance) / (this.soundMaxDistance - this.soundRefDistance); // Volume based on distance
		distanceProgress = 1 - Math.min(Math.max(distanceProgress, 0), 1);

		// Combine the volumes
		return distanceProgress * baseVolume;
	} else {
		// Return the original volume
		return baseVolume;
	}
};

assets.soundVol = function (id, volume = 1.0, x = null, y = null) {
	if (assets.positionalAudio) {
		// Set volume of audio
		this.sound.volume(x, y, volume);

		// Set native position of audio
		if (x != null && y != null) this.sound.pos(x, y, 0, id);
	} else {
		// Calculate the positional volume and set the volume;
		let adjustedVolume = this.calculateSoundVolume(volume, x, y);
		this.sound.volume(adjustedVolume, id);
	}
};

assets.soundRate = function (rate, id) {
	try {
		this.sound.rate(rate, id);
	} catch (e) {
		console.error('HowlerJS Error:', e);
	}
};

assets.soundStop = function (id) {
	try {
		this.sound.stop(id);
	} catch (e) {
		console.error('HowlerJS Error:', e);
	}
};

assets.listenerPos = function (x, y) {
	try {
		Howler.pos(x, y, 0);
		assets.soundListenerX = x;
		assets.soundListenerY = y;
	} catch (e) {
		console.error('HowlerJS Error:', e);
	}
};

// Play ambient
if (config.isClient) {
	// Play ambient noise
	assets.ambientSoundId = assets.playSound('ambient', this.maxAmbientVolume, null, null, true);
	assets.drumSoundId = assets.playSound('drums', this.maxDrumsVolume, null, null, true);
}

module.exports = assets;
