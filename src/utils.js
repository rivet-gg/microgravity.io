const config = require('./config/config');
const assets = require('./client/assets');
const resources = require('./config/resources');

module.exports = {
	clamp(value, min, max) {
		if (value < min) {
			return min;
		} else if (value > max) {
			return max;
		} else {
			return value;
		}
	},

	lerp(a, b, t) {
		return (b - a) * t + a;
	},

	slerp(a, b, t) {
		let num = this.repeat(b - a, Math.PI * 2);
		if (num > Math.PI) {
			num -= Math.PI * 2;
		}
		return a + num * this.clamp01(t);
	},

	repeat(t, length) {
		return t - Math.floor(t / length) * length;
	},

	clamp01(t) {
		if (t < 0) return 0;
		else if (t > 1) return 1;
		else return t;
	},

	randomRange(min, max) {
		return this.lerp(min, max, Math.random());
	},

	dist(x1, y1, x2 = 0, y2 = 0) {
		return Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2));
	},

	dotProduct(x1, y1, x2, y2) {
		return x1 * y1 + x2 * y2;
	},

	entitiesCollide(entityA, entityB, useBodyRadius = true, padding = 0) {
		// Get radii
		let radiusA;
		let radiusB;
		if (useBodyRadius) {
			radiusA = entityA.bodyRadius || entityA.radius;
			radiusB = entityB.bodyRadius || entityB.radius;
		} else {
			radiusA = entityA.radius;
			radiusB = entityB.radius;
		}

		// Check the body collisions
		if (entityA.checkCircle && entityB.checkCircle) {
			return this.dist(entityA.x, entityA.y, entityB.x, entityB.y) <= radiusA + radiusB + padding;
		}

		// Check the trail collisions
		if (entityA.checkCircle && entityB.checkTrail) {
			return this.testCircleLine(
				entityA.x,
				entityA.y,
				radiusA + padding,
				entityB.x,
				entityB.y,
				entityB.prevX,
				entityB.prevY
			);
		}
		if (entityA.checkTrail && entityB.checkCircle) {
			return this.testCircleLine(
				entityB.x,
				entityB.y,
				radiusB + padding,
				entityA.x,
				entityA.y,
				entityA.prevX,
				entityA.prevY
			);
		}

		return false;
	},

	repelEntities(entityA, entityB, amount = 100, moveA = true, moveB = true, updateVelocities = true) {
		// Don't do collision if not overlapping; this only happens when `bodyRadius` is declared
		if (!this.entitiesCollide(entityA, entityB)) return;

		// Get radii; entities can declare a `bodyRadius` that's smaller than the actual collision radius; this is used
		// for things like planets, where the atmosphere is taken in to consideration too
		let radiusA = entityA.bodyRadius || entityA.radius;
		let radiusB = entityB.bodyRadius || entityB.radius;

		// Get average vel
		let avgVelX = (entityA.velX + entityB.velX) / 2;
		let avgVelY = (entityA.velY + entityB.velY) / 2;

		// Set amount to be natural if requests
		let totalVel = this.dist(entityA.velX, entityA.velY, entityB.velX, entityB.velY);
		if (amount === -1) {
			amount = totalVel / 2;
		}

		// Get angle between entities
		let diffX = entityB.x - entityA.x;
		let diffY = entityB.y - entityA.y;
		let entityAngle = Math.atan2(diffY, diffX);
		let entityDist = this.dist(entityA.x, entityA.y, entityB.x, entityB.y);

		// Get the midpoint
		let radiusMidpoint = radiusA / (radiusA + radiusB);
		let midpointX = this.lerp(entityA.x, entityB.x, radiusMidpoint);
		let midpointY = this.lerp(entityA.y, entityB.y, radiusMidpoint);

		// Set the objects to touching
		let padding = 0.1;
		if (moveA) {
			entityA.x = midpointX - Math.cos(entityAngle) * (radiusA + padding);
			entityA.y = midpointY - Math.sin(entityAngle) * (radiusA + padding);
		}
		if (moveB) {
			entityB.x = midpointX + Math.cos(entityAngle) * (radiusB + padding);
			entityB.y = midpointY + Math.sin(entityAngle) * (radiusB + padding);
		}

		// Repel entity velocities
		if (updateVelocities) {
			let repelX = Math.cos(entityAngle) * amount;
			let repelY = Math.sin(entityAngle) * amount;
			if (moveA) {
				entityA.setVelocity(avgVelX - repelX, avgVelY - repelY);
			}
			if (moveB) {
				entityB.setVelocity(avgVelX + repelX, avgVelY + repelY);
			}
		}

		// Play sound
		if (config.isClient) {
			let volume = Math.min(totalVel / 600, 1);
			let speed = this.lerp(2, 0.4, volume);
			let soundId = assets.playSound('impact', volume * 0.4, midpointX, -midpointY);
			assets.soundRate(speed, soundId);
		}
	},

	placeOnSurface(surface, entity) {
		// Calculate data
		let surfaceRadius = surface.bodyRadius || surface.radius;
		let entityRadius = entity.bodyRadius || entity.radius;
		let totalRadius = surfaceRadius + entityRadius;
		let relativeAngle = Math.atan2(entity.y - surface.y, entity.x - surface.x);

		// Position on surface
		entity.x = surface.x + Math.cos(relativeAngle) * totalRadius;
		entity.y = surface.y + Math.sin(relativeAngle) * totalRadius;

		// Set slight negative velocity to pin in planet but enough for player to pull away
		let placeVelocity = -10;
		entity.setVelocity(Math.cos(relativeAngle) * placeVelocity, Math.sin(relativeAngle) * placeVelocity);
	},

	easingFunctions: {
		// Adapted from: https://gist.github.com/gre/1650294
		// Elastic easing from: https://gist.github.com/Fonserbc/3d31a25e87fdaa541ddf
		linear: t => t,
		easeInQuad: t => t * t,
		easeOutQuad: t => t * (2 - t),
		easeInOutQuad: t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
		easeInCubic: t => t * t * t,
		easeOutCubic: t => --t * t * t + 1,
		easeInOutCubic: t => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
		easeInQuart: t => t * t * t * t,
		easeOutQuart: t => 1 - --t * t * t * t,
		easeInOutQuart: t => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
		easeInQuint: t => t * t * t * t * t,
		easeOutQuint: t => 1 + --t * t * t * t * t,
		easeInOutQuint: t => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t)
		// easeInElastic: (t) => -Math.pow(2,10*(t-=1))*Math.sin((t-0.1)*(2*Math.PI)/0.4),
		// easeOutElastic: (t) => -Math.pow(2,10*t)*Math.sin((t-0.1)*(2*Math.PI)/0.4)+1,
	},

	generateUsername() {
		let prefix = config.playerNamePrefixes[Math.floor(Math.random() * config.playerNamePrefixes.length)];
		let index = Math.floor(Math.random() * 1000);
		return prefix + ' ' + index;
	},

	/**
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {Entity} entity
	 * @param maxHealth
	 * @param rotate
	 */
	renderHealth(ctx, entity, maxHealth = 1.0, rotate = true) {
		// Adjust health to make it look like it's close to 0 than it really is
		let adjustedHealth = this.easingFunctions.easeInQuad(entity.health / maxHealth);

		// Properties
		let width = 40;
		let height = 14;
		let padding = 6;

		ctx.save();
		if (rotate) ctx.rotate(-entity.rot);

		ctx.translate(0, -entity.radius - 16);
		ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
		ctx.fillRect(-width / 2, -height / 2, width, height);

		ctx.fillStyle = 'white';
		ctx.fillRect(
			-(width - padding) / 2,
			-(height - padding) / 2,
			(width - padding) * adjustedHealth,
			height - padding
		);

		ctx.restore();
	},

	damageEntity(source, entity, amount) {
		if (!config.isServer) return;

		let aliveThreshold = 0.0001;

		// Don't damage if already dead
		if (entity.health <= aliveThreshold) return;

		// Determine if can damage
		if (entity.canDamage && !entity.canDamage(source, amount)) return;

		// Reduce health
		entity.health = Math.max(entity.health - amount, 0);

		// Cause damage
		if (entity.onDamage) entity.onDamage(source, amount);

		// Destroy if needed on server; 0.001 for rounding errors
		if (entity.health <= aliveThreshold) {
			// Call killed
			if (entity.onKilled) entity.onKilled(source);

			// Destroy entity
			entity.destroy();
		}
	},

	modFix(a, b) {
		return ((a % b) + b) % b;
	},

	dirDiff(angleA, angleB) {
		// Handle mod fix
		angleA = this.modFix(angleA, Math.PI * 2);
		angleB = this.modFix(angleB, Math.PI * 2);

		// Get the angle difference
		let diff = angleB - angleA;

		// Adjust angle to be within -180 to 180
		if (diff < -Math.PI) diff += Math.PI * 2;
		if (diff > Math.PI) diff -= Math.PI * 2;

		return diff;
	},

	turnDir(source, target) {
		let angleTurnFactor = (1 / Math.PI) * 8;

		// Get the angle difference
		let dirDiff = this.dirDiff(source, target);

		// Smoothly turn to target
		return this.clamp(dirDiff, -1, 1);
	},

	generateFont(size, weight = 'normal') {
		return `${weight} ${size}px Pixelar Regular`;
	},

	fillMultilineText(ctx, text, x, y, verticalAlignCenter = true) {
		text = `${text}`;
		let lines = text.split('\n');
		let lineHeight = parseInt(ctx.font.split('px')[0]);
		for (let i = 0; i < lines.length; i++) {
			let line = lines[i];
			let yOffset = i * lineHeight;
			if (verticalAlignCenter) {
				yOffset -= ((lines.length - 1) * lineHeight) / 2;
			}
			ctx.fillText(line, x, y + yOffset);
		}
	},

	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {number} angle
	 * @returns {number[]}
	 */
	rotatePoint(x, y, byAngle) {
		let angle = Math.atan2(y, x) + byAngle;
		let mag = this.dist(x, y);
		return [Math.cos(angle) * mag, Math.sin(angle) * mag];
	},

	/**
	 * @param {number} x1
	 * @param {number} y1
	 * @returns {number[]}
	 */
	normalize(x1, y1) {
		let mag = this.dist(x1, y1);
		if (mag === 0) {
			return [0, 0];
		} else {
			return [x1 / mag, y1 / mag];
		}
	},

	/**
	 *
	 * @param {number} x1
	 * @param {number} y1
	 * @param {number} x2
	 * @param {number} y2
	 * @returns {number}
	 */
	dot(x1, y1, x2, y2) {
		return x1 * x2 + y1 * y2;
	},

	/**
	 *
	 * @param {number} x
	 * @param {number} y
	 * @param {number} axisX
	 * @param {number} axisY
	 * @returns {number}
	 */
	project(x, y, axisX, axisY) {
		return this.dot(x, y, ...this.normalize(axisX, axisY));
	},

	testCircleLine(circleX, circleY, circleRadius, lineX1, lineY1, lineX2, lineY2) {
		// Form line vectors
		let line = [lineX2 - lineX1, lineY2 - lineY1];
		let leftNormal = this.rotatePoint(...line, -Math.PI / 2);

		// Get the perpendicular distance to the ball
		let c1Circle = [circleX - lineX1, circleY - lineY1];
		let c1CircleOnNormal = this.project(...c1Circle, ...leftNormal);

		// Get the relative vectors
		let c1CircleOnLine = this.project(...c1Circle, ...line);

		// Fixes the checks on the line:
		if (
			Math.abs(c1CircleOnNormal) <= circleRadius &&
			this.dot(...line, ...c1Circle) > 0 &&
			c1CircleOnLine < this.dist(...line)
		) {
			// Circle is inside the line
			return true;
		} else if (
			this.dist(circleX, circleY, lineX1, lineY1) <= circleRadius ||
			this.dist(circleX, circleY, lineX2, lineY2) <= circleRadius
		) {
			// Circle touches one of the line edges
			return true;
		} else {
			return false;
		}
	},

	testLineLine(x1, y1, x2, y2, x3, y3, x4, y4) {
		// See https://stackoverflow.com/a/15182022/2016800
		var x =
			((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) /
			((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
		var y =
			((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) /
			((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
		if (isNaN(x) || isNaN(y)) {
			return false;
		} else {
			if (x1 >= x2) {
				if (!(x2 <= x && x <= x1)) return false;
			} else {
				if (!(x1 <= x && x <= x2)) return false;
			}
			if (y1 >= y2) {
				if (!(y2 <= y && y <= y1)) return false;
			} else {
				if (!(y1 <= y && y <= y2)) return false;
			}
			if (x3 >= x4) {
				if (!(x4 <= x && x <= x3)) return false;
			} else {
				if (!(x3 <= x && x <= x4)) return false;
			}
			if (y3 >= y4) {
				if (!(y4 <= y && y <= y3)) return false;
			} else {
				if (!(y3 <= y && y <= y4)) return false;
			}
		}
		return true;
	},

	createTileElement(iconUrl, title, subtitle) {
		let tile = document.createElement('div');
		tile.classList.add('tile');

		let iconEl = document.createElement('div');
		iconEl.classList.add('tileIcon');
		iconEl.style.backgroundImage = `url(${iconUrl})`;
		tile.appendChild(iconEl);

		let titleEl = document.createElement('div');
		titleEl.classList.add('tileTitle');
		titleEl.innerText = title;
		tile.appendChild(titleEl);

		let subtitleEl = document.createElement('div');
		subtitleEl.classList.add('tileSubtitle');
		subtitleEl.innerHTML = subtitle;
		tile.appendChild(subtitleEl);

		return tile;
	},

	isEmoji(str) {
		// From https://stackoverflow.com/a/41164587/2016800
		let pattern =
			/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|[\ud83c[\ude50\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
		return pattern.test(str);
	},

	cleanString(string, allowSpaces = false) {
		if (allowSpaces) {
			string = string.replace(/[^[[:print:]]/g, '');
		} else {
			string = string.replace(/([^[[:print:]]|\s)/g, '');
		}
		return string.trim();
	},

	generateRandomCode() {
		let length = 6;
		let chars = "abcdefghijklmnpqrstuvwxyz1234567890";
		
		let code = "";
		for (let i = 0; i < length; i++) {
			code += chars[Math.floor(Math.random() * chars.length)];
		}

		return code;
	},

	generateResourceHTML(index, value) {
		let resource = resources.resources[index];
		return `<div class="resourceIcon ${resource.icon}"></div><span>${
			typeof value === 'number' ? Math.floor(value) : value
		}</span>`;
	},

	generateResourcesHTML(values, separate = false, hideEmpty = false, showFilter = null) {
		let str = '';
		for (let i = 0; i < resources.resources.length; i++) {
			if (hideEmpty && values[i] === 0) continue; // Hide empty values
			if (showFilter && !showFilter(i)) continue; // Custom show filter
			if (separate) str += '<div>';
			str += this.generateResourceHTML(i, values[i]);
			if (separate) str += '</div>';
		}
		return str;
	},

	createResourceElement(index) {
		let icon = document.createElement('div');
		icon.classList.add('resourceIcon', resources.resources[index].icon);
		return icon;
	},

	generateResourcesElements(values, separate = false, hideEmpty = false, showFilter = null) {
		let elements = [];
		for (let i = 0; i < resources.resources.length; i++) {
			if (hideEmpty && values[i] === 0) continue; // Hide empty values
			if (showFilter && !showFilter(i)) continue; // Custom show filter

			// Get the icon
			let resource = resources.resources[i];

			// Create icon
			let icon = document.createElement('div');
			icon.classList.add('resourceIcon', resource.icon);

			// Create text
			let text = document.createElement('span');
			text.innerText = values[i];

			// Create separate elements or insert in to element list
			if (separate) {
				let separateHolder = document.createElement('div');
				separateHolder.appendChild(icon);
				separateHolder.appendChild(text);
				elements.push(separateHolder);
			} else {
				elements.push(icon, text);
			}
		}

		return elements;
	},

	// Converts all strings from array in to text nodes
	constructElements(...elementArray) {
		for (let i = 0; i < elementArray.length; i++) {
			// Convert all non-HTML nodes to text nodes
			let element = elementArray[i];
			// if (Array.isArray(element)) elementArray.splice(i, 1, this.constructElements(...element));  // Flatten array to elements
			if (!(element instanceof Node)) elementArray[i] = document.createTextNode(element); // Create node out of element
		}

		return elementArray;
	},

	getRandomConst(index, randomSet = 0) {
		let set = config.randomConsts[randomSet % config.randomConsts.length];
		return set[index % set.length];
	},

	grayscaleColor(grayscale, alpha = 1.0) {
		grayscale *= 255;
		return `rgba(${Math.floor(grayscale)}, ${Math.floor(grayscale)}, ${Math.floor(grayscale)}, ${alpha})`;
	},

	/**
	 * @returns {?ClientHandle}
	 */
	clientOwner(entity) {
		if (entity.isPlayer) {
			return entity.clientHandle;
		} else if (entity.isBullet) {
			return entity.shooterClient;
		} else if (entity.isStructure) {
			return entity.clientOwner;
		}

		return null;
	},

	/**
	 * @returns {?BotHandle}
	 */
	botOwner(entity) {
		if (entity.isPlayer) {
			return entity.botHandle;
		} else if (entity.isBullet) {
			return entity.shooterBot;
		}

		return null;
	},

	killerLabel(entity) {
		// Player
		let clientOwner = this.clientOwner(entity);
		if (clientOwner) return clientOwner.username;

		// Bot
		let botOwner = this.botOwner(entity);
		if (botOwner) return 'Alien';

		// Other entities
		if (entity.isAsteroid) {
			return 'Asteroid';
		}

		return '';
	},

	reportEvent(action, value, category = 'misc') {
		if (!window.ga) {
			console.error('Failed to report event.');
			return;
		}

		// Send the event
		window.ga('send', 'event', {
			eventCategory: category,
			eventAction: action,
			eventValue: value != null ? value.toString() : null
		});
	},

	getAllianceColor(id, alpha = 1.0) {
		// let rotationInterval = id / 5 * 0.8;
		// return `hsla(${rotationInterval * 360}, 100%, 50%, ${alpha})`;  // Don't use `deg`, since that's CSS 4
		return config.flatColors[(id * 3) % config.flatColors.length];
	},

	getAtmosphereColor(l = 1.0) {
		return `rgb(${Math.floor(64 * l)}, ${Math.floor(162 * l)}, ${Math.floor(236 * l)})`;
	},

	assert(condition, message = null) {
		if (!condition) throw new Error(message ? `Failed assertion: ${message}` : 'Failed assertion.');
	},

	assertBoolean(value) {
		this.assert(typeof value === 'boolean', `${value} is not a boolean.`);
	},

	assertString(value) {
		this.assert(typeof value === 'string', `${value} is not a string.`);
	},

	assertFloat(value) {
		this.assert(
			typeof value === 'number' && !isNaN(value) && Number.isFinite(value),
			`${value} is not a valid float.`
		);
	},

	assertInt(value) {
		this.assert(
			typeof value === 'number' &&
				!isNaN(value) &&
				Number.isFinite(value) &&
				Number.isSafeInteger(value),
			`${value} is not a valid integer.`
		);
	},

	assertUnsignedInt(value) {
		this.assert(
			typeof value === 'number' &&
				!isNaN(value) &&
				Number.isFinite(value) &&
				Number.isSafeInteger(value) &&
				value >= 0,
			`${value} is not a valid unsigned integer.`
		);
	},

	assertArray(value, length = null) {
		this.assert(
			Array.isArray(value) && (length != null ? value.length === length : true),
			`${value} is not a valid array.`
		);
	},

	/**
	 * Draws an image of a given size at the center of the image x and y. The image of that size is cached to an off
	 * screen canvas for faster rendering later.
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {string} path
	 * @param {number} x - Center X position.
	 * @param {number} y - Center Y position.
	 * @param {number} width
	 * @param {number} height
	 */
	drawImage(ctx, path, x, y, width, height, tint = null) {
		// Draw the image; the width and height is automatically determined from the image size generated
		ctx.drawImage(assets.getImage(path, width, height, tint), x - width / 2, y - height / 2);
	},

	polygonPath(ctx, sides, radius) {
		ctx.beginPath();
		for (let i = 0; i < sides; i++) {
			let angle = (Math.PI * 2 * i) / sides;
			let x = Math.cos(angle) * radius;
			let y = Math.sin(angle) * radius;
			if (i === 0) {
				ctx.moveTo(x, y);
			} else {
				ctx.lineTo(x, y);
			}
		}
		ctx.closePath();
	},

	i18n: null,
	translate(key, ...params) {
		// Make sure is client
		if (!config.isClient) {
			return 'Not on client.';
		}

		// Make sure Crowdl is loaded
		if (!this.i18n) {
			console.error('Crowdl is missing.');
			return key;
		}

		// Convert translation data if any of the parameters are a key
		// for (let i = 0; i < params.length; i++) {
		//     if (typeof params[i] === "string" && params[i].startsWith("key:")) {
		//         params[i] = this.translate(params[i].slice(4));
		//     }
		// }

		// Translate the text
		return this.i18n.t(key, params);
	},

	drawBuildTipCircle(ctx, color, x, y, radius, id, fromAngle = 0, toAngle = Math.PI * 2) {
		// Create fill
		let fillGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
		fillGradient.addColorStop(0.0, 'transparent');
		fillGradient.addColorStop(1.0, color);

		// Draw circle
		ctx.save();
		ctx.fillStyle = fillGradient;
		ctx.globalAlpha = 0.1 + Math.sin((Date.now() / 1000) * 4 + id) * 0.05;
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.arc(0, 0, radius, fromAngle, toAngle);
		ctx.fill();
		ctx.restore();
	},

	/**
	 * Return the firing solution for a projectile starting at 'src' with
	 * velocity 'v', to hit a target, 'dst'.
	 *
	 * @param {Object} src - position of shooter
	 * @param {Object} dst- position & velocity of target
	 * @param {number} v - speed of projectile
	 * @return Object Coordinate at which to fire (and where intercept occurs)
	 *
	 * E.g.
	 * >>> intercept({x:2, y:4}, {x:5, y:7, vx: 2, vy:1}, 5)
	 * = {x: 8, y: 8.5}
	 */
	intercept(src, dst, v) {
		// From: https://stackoverflow.com/a/3487761/2016800
		var tx = dst.x - src.x,
			ty = dst.y - src.y,
			tvx = dst.vx,
			tvy = dst.vy;

		// Get quadratic equation components
		var a = tvx * tvx + tvy * tvy - v * v;
		var b = 2 * (tvx * tx + tvy * ty);
		var c = tx * tx + ty * ty;

		// Solve quadratic
		var ts = this.quad(a, b, c); // See quad(), below

		// Find smallest positive solution
		var sol = null;
		if (ts) {
			var t0 = ts[0],
				t1 = ts[1];
			var t = Math.min(t0, t1);
			if (t < 0) t = Math.max(t0, t1);
			if (t > 0) {
				sol = Math.atan2(dst.y + dst.vy * t, dst.x + dst.vx * t);
				// sol = [dst.x + dst.vx*t, dst.y + dst.vy*t];
			}
		}

		return sol;
	},

	/**
	 * Return solutions for quadratic
	 */
	quad(a, b, c) {
		// From: https://stackoverflow.com/a/3487761/2016800
		var sol = null;
		if (Math.abs(a) < 1e-6) {
			if (Math.abs(b) < 1e-6) {
				sol = Math.abs(c) < 1e-6 ? [0, 0] : null;
			} else {
				sol = [-c / b, -c / b];
			}
		} else {
			var disc = b * b - 4 * a * c;
			if (disc >= 0) {
				disc = Math.sqrt(disc);
				a = 2 * a;
				sol = [(-b - disc) / a, (-b + disc) / a];
			}
		}
		return sol;
	},

	/*
    Notes about quantization:
    We can quantize values to different intervals in order to maximize the space they use within MessagePack. See this
    link (see https://github.com/msgpack/msgpack/blob/master/spec.md#int-format-family) for the different bit counts
    that we target to minimize size for. Whenever possible, case to an integer. Some values will be cased to integers
    and the size will adapt accordingly.
     */

	suggestedQuantizationLevels: [7, 8, 16 /*, 32, 64*/], // Use 7, 8, 16, 32, 64 bits for msgpack; see https://github.com/msgpack/msgpack/blob/master/spec.md#int-format-family; we can't do 32 and 64 bits, since they can't be bit shifted; plus it's kinda pointless to quantize

	/** Converts a value to a lower-resolution integer for sending over the network. */
	quantize(value, min, max, bits, ignoreWarning) {
		// CHeck if bit count is suggested
		if (!ignoreWarning && !config.isProd && this.suggestedQuantizationLevels.indexOf(bits) === -1) {
			console.warn(`Using inefficient number of bits: ${bits}`);
		}

		// Check if out of bounds and clamp it
		if (value < min || value > max) {
			if (!config.isProd)
				console.warn(`Attempting to quantize value ${value} outside of range [${min}, ${max}].`);
			value = this.clamp(value, min, max);
		}

		let valueProgress = (value - min) / (max - min);
		return Math.floor(valueProgress * (1 << bits));
	},

	/** Converts an integer to the original value. */
	unquantize(value, min, max, bits) {
		// Convert the value to the original value
		return (value / (1 << bits)) * (max - min) + min;
	},

	quantizeArray(array, min, max, bits) {
		return array.map(v => this.quantize(v, min, max, bits));
	},

	unquantizeArray(array, min, max, bits) {
		return array.map(v => this.unquantize(v, min, max, bits));
	},

	quantize16b(value, decimals = 0) {
		return this.quantize(value, 0, (1 << 16) / Math.pow(10, decimals), 16);
	},

	unquantize16b(value, decimals = 0) {
		return this.unquantize(value, 0, (1 << 16) / Math.pow(10, decimals), 16);
	},

	quantize16bArray(array, decimals = 0) {
		return array.map(value => this.quantize16b(value, decimals));
	},

	unquantize16bArray(array, decimals = 0) {
		return array.map(value => this.unquantize16b(value, decimals));
	},

	quantizeSimple(value, decimals = 0) {
		return Math.floor(value * Math.pow(10, decimals));
	},

	unquantizeSimple(value, decimals = 0) {
		return value / Math.pow(10, decimals);
	},

	quantizeSimpleArray(array, decimals = 0) {
		return array.map(v => this.quantizeSimple(v, decimals));
	},

	unquantizeSimpleArray(array, decimals = 0) {
		return array.map(v => this.unquantizeSimple(v, decimals));
	},

	rankForScore(score) {
		return Math.pow(score / config.rankTarget, 1 / config.rankExponential) * config.rankScale;
	},

	scoreForRank(rank) {
		return config.rankTarget * Math.pow(rank / config.rankScale, config.rankExponential);
	},

	numeralLookup: {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	},
	romanNumerals(num) {
		// Adapted from https://stackoverflow.com/a/32851198
		let roman = '';
		for (let i in this.numeralLookup) {
			while (num >= this.numeralLookup[i]) {
				roman += i;
				num -= this.numeralLookup[i];
			}
		}
		return roman;
	},

	randomInRange(min, max) {
		return this.lerp(min, max, Math.random());
	},

	drawGlow(ctx, x, y, radius, color = 'white', alpha = 0.3) {
		ctx.save();
		ctx.globalAlpha = alpha;
		this.drawImage(ctx, assets.effectUrl('glow'), 0, 0, radius * 2, radius * 2, color);
		ctx.restore();
	},

	drawShip(ctx, shipId, x, y, radius, fill) {
		let size = radius * 2;
		this.drawImage(ctx, assets.shipUrl(`${shipId}-mask`), x, y, size, size, fill);
		this.drawImage(ctx, assets.shipUrl(`${shipId}-overlay`), x, y, size, size);
	}
};
