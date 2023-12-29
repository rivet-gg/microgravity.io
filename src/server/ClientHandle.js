const WebSocket = require('ws');
const Player = require('../entities/Player');
const config = require('../config/config');
const utils = require('../utils');
const serverUtils = require('./utils');
const weapons = require('../config/weapons');
const structures = require('../config/structures');
const resources = require('../config/resources');
const stats = require('./stats');
const msgpack = require('msgpack-lite');
const upgrades = require('../config/upgrades');
const assets = require('../client/assets');

class ClientHandle {
	get selectedOwnedWeapon() {
		let player = this.player;
		if (!player) return null;

		for (let weaponData of this.ownedWeapons) {
			if (weaponData[0] === player.weaponIndex) {
				return weaponData;
			}
		}

		console.error('Player has selected invalid weapon.');
		return null;
	}

	get rank() {
		return utils.rankForScore(this.score);
	}

	get rankFloor() {
		return Math.floor(this.rank);
	}

	get upgradeOptions() {
		return config.upgradeOptions[this.rankFloor];
	}

	get viewDistanceMultiplier() {
		if (this.player) {
			return this.player.getPerkMultiplier('viewDistance');
		} else if (this.spectating) {
			return this.spectating.getPerkMultiplier('viewDistance');
		} else {
			return 1;
		}
	}

	/**
	 *
	 * @param {Object} ws
	 * @param {GameServer} game
	 */
	constructor(ws, game) {
		/** @type {GameServer} */ this.game = game;

		/* @type {number} */ this.id = ClientHandle._idCounter++;

		/* @type {number} */ this.challengeSeed = Math.floor(Math.random() * 1024);
		/* @type {number} */ this.initiated = false;

		/** @type {number} */ this.kickTimer = 0; // Only increments if not in game

		/** @type {Set<string>} */ this.rewards = new Set();

		/* @type {number} */ this.ping = 0;
		/* @type {boolean} */ this.pingStart = null;
		/* @type {number} */ this.pingTimer = 0;

		/** @type {string} */ this.username = utils.generateUsername();

		/** @type {boolean} */ this.isAdmin = !config.isProd; // Default to admin on dev

		/** @type {?Player} */ this.player = null;

		/** @type {?Player} */ this.spectating = null;

		/** @type {number} */ this.visibleEntities = [];

		/** @type {Alliance} */ this.alliance = null;

		/** @type {number} */ this.score = 0;
		/** @type {number[]} */ this.resources = [200, 200, 200];
		/** @type {Object.<string, number>} */ this.structureCounts = {}; // Slot indexes mapped to counts

		/* @type {number} */ this.notifiedRank = 0; // Last rank upgrade notification that was sent to the client
		/* @type {number} */ this.upgradedRank = 0; // Last rank upgrade in which the player upgraded; start at level 1

		/* @type {number[]} */ this.ownedStructures = structures.defaultOwned.slice();
		/* @type {Object[]} */ this.perks = [];

		/** @type {number[]} */ this.ownedWeapons = [[0, -1]];

		/** @type {boolean} */ this.gaveAdBlockReward = false;
		/** @type {boolean} */ this.gaveDiscordReward = false;

		/** @type {Object} */ this.ws = ws;

		this.onClosed = () => {};

		// Add WS events
		this.ws.on('message', message => {
			try {
				const [type, data] = msgpack.decode(new Uint8Array(message));
				try {
					if (!this.initiated && type !== config.clientMessages.INIT) return; // Don't let any response but init if not initiated
					switch (type) {
						case config.clientMessages.INIT:
							this.onInit(data);
							break;
						case config.clientMessages.JOIN:
							this.onJoin(data);
							break;
						case config.clientMessages.INPUT:
							this.onInput(data);
							break;
						case config.clientMessages.SWITCH_WEAPON:
							this.onSwitchWeapon(data);
							break;
						case config.clientMessages.PURCHASE_STRUCTURE:
							this.onPurchaseStructure(data);
							break;
						case config.clientMessages.MESSAGE:
							this.onMessage(data);
							break;
						case config.clientMessages.PING:
							this.onPing(data);
							break;
						case config.clientMessages.CREATE_ALLIANCE:
							this.onCreateAlliance(data);
							break;
						case config.clientMessages.LEAVE_ALLIANCE:
							this.onLeaveAlliance(data);
							break;
						case config.clientMessages.JOIN_ALLIANCE:
							this.onJoinAlliance(data);
							break;
						case config.clientMessages.KICK_MEMBER:
							this.onKickMember(data);
							break;
						case config.clientMessages.RESOLVE_JOIN_REQUEST:
							this.onResolveJoinRequest(data);
							break;
						case config.clientMessages.STRUCTURE_ACTION:
							this.onStructureAction(data);
							break;
						case config.clientMessages.CHOOSE_UPGRADE:
							this.onChooseUpgrade(data);
							break;
						default:
							console.error(`Unknown message type ${type}.`);
					}
				} catch (error) {
					console.error('Error from message:', type, data);
					console.error(error);
				}
			} catch (error) {
				console.error('Error parsing message:', message);
				console.error(error);
			}
		});

		this.ws.on('close', () => {
			// Remove the player
			if (this.player) {
				this.player.destroy();
			}

			// Leave alliance
			this.leaveAlliance();

			// Socket closed
			this.game.clientDisconnected(this);

			// Notify closed
			this.onClosed();
		});

		this.ws.on('error', e => {
			console.error('Socket error:', e);
		});

		// Challenge the player and close after x seconds if not completed
		this.sendPreInit();
		setTimeout(() => {
			if (!this.initiated) {
				console.warn(`Client ${this.id} did not respond to challenge.`);
				this.ws.close();
			}
		}, 5000);
	}

	update(dt) {
		// Don't do anything if not initiated
		if (!this.initiated) return;

		// Kick player if hasn't responded from ping
		if (this.pingStart != null && Date.now() - this.pingStart > config.pingTimeout) {
			this.pingStart = null;
			console.log(`Client timed out: ${this.id}`);
			// this.ws.close();
			// return;
		}

		// Add to kick timer
		if (this.player && !this.player.destroyed) {
			this.kickTimer = 0;
		} else {
			this.kickTimer += dt;
			if (this.kickTimer > config.kickTimeout) {
				if (!config.isProd) console.log(`Kicking click id ${this.id} for inactivity.`);
				this.ws.close();
				return;
			}
		}

		// Ping the client
		this.pingTimer = this.pingTimer - dt;
		if (this.pingTimer <= 0) {
			// Reset the timer
			this.pingTimer = config.pingInterval;

			if (this.pingStart != null) {
				// Make sure there isn't already a ping
				if (!config.isProd) console.warn('Ping already in progress.');
			} else {
				// Set ping start
				this.pingStart = Date.now();

				// Send a ping to the client
				this.sendPing(false);
			}
		}

		if (this.player) {
			// Update alliance ID
			this.player.allianceId = this.alliance ? this.alliance.id : null;
		}

		// Remove weapons if needed
		for (let i = 0; i < this.ownedWeapons.length; i++) {
			let [weaponIndex, ammo] = this.ownedWeapons[i];
			if (ammo === 0) {
				// Remove the weapon
				this.ownedWeapons.splice(i, 1);

				// Reset the selected weapon
				if (this.player && this.player.weaponIndex === weaponIndex) {
					this.player.weaponIndex = 0;
				}

				// Send new weapons
				this.sendWeapons();

				break;
			}
		}

		// Update rank
		if (this.rankFloor > this.notifiedRank) {
			// Send the notification
			this.sendNotification(config.notificationTypes.RANK_UP, 'notification-rank-up');

			// Send the new upgrade options
			this.sendUpgradeOptions();

			// Save the rank
			this.notifiedRank = this.rankFloor;
		}
	}

	/*** Sending Data ***/
	/**
	 * Sends a message over the WebSocket to the client.
	 * @param {number} type
	 * @param {Object} data
	 */
	send(type, data) {
		// Serialize the message
		const msgRaw = msgpack.encode([type, data]);

		// If WS is open, send it; otherwise, terminate the socket so the close event is called
		// See: https://www.npmjs.com/package/ws#how-to-detect-and-close-broken-connections
		if (this.ws.readyState === WebSocket.OPEN) {
			this.ws.send(msgRaw);
		} else {
			this.ws.terminate();
		}
	}

	sendPreInit() {
		// This challenges the player to respond to the challenge seed
		this.send(config.serverMessages.PRE_INIT, [this.id, this.challengeSeed]);
	}

	sendInit() {
		// Send initial data
		this.sendWeapons();
		this.sendAllianceList(this.game.generateAllianceData());
		this.sendAllianceData();
		this.sendResources();
		this.sendOwnedStructures();

		// Send init data
		this.send(config.serverMessages.INIT, [config.gameMode]);

		// Set initiated
		this.initiated = true;
	}

	sendUpdate() {
		// Remove player/spectating if needed
		if (this.player && this.player.destroyed) {
			// Spectate the killer if exists
			if (this.player.killer) {
				let clientOwner = utils.clientOwner(this.player.killer);
				this.spectating = clientOwner ? clientOwner.player : null;
			}

			// Death event
			this.onDeath();
		}
		if (this.spectating && this.spectating.destroyed) {
			// Spectate the killer if exists
			if (this.spectating.killer) {
				let clientOwner = utils.clientOwner(this.spectating.killer);
				this.spectating = clientOwner ? clientOwner.player : null;
			} else {
				this.spectating = null;
			}
		}

		// Find player to spectates
		if (this.spectating == null) {
			this.spectating = this.game.playerToSpectate();
		}

		// Get player and spectate ID
		let playerId = this.player ? this.player.id : null;
		let spectateId = this.spectating ? this.spectating.id : null;

		// Generate update
		let spectateX = this.spectating ? this.spectating.x : 0;
		let spectateY = this.spectating ? this.spectating.y : 0;

		// Copy old entity list and clear entity list
		let oldVisibleEntities = this.visibleEntities.slice();
		this.visibleEntities.length = 0;

		// Create list for all entities
		let appearedEntities = {};
		let updatedEntities = {};

		// Find all visible entities and add to either appeared or update
		this.game.queryRect(
			spectateX,
			spectateY,
			config.viewDistanceX * this.viewDistanceMultiplier,
			config.viewDistanceY * this.viewDistanceMultiplier,
			entity => {
				// Check if entity is already visible
				let visibleEntityIndex = oldVisibleEntities.indexOf(entity.id);
				if (visibleEntityIndex !== -1) {
					// Add entity update if already visible and if the entity should send updates
					if (entity.sendUpdates) {
						updatedEntities[entity.id] = this.game.serializeEntity(entity.id, false);
					}

					// Remove from visible entity list
					oldVisibleEntities.splice(visibleEntityIndex, 1);
				} else {
					// Add appeared entity
					appearedEntities[entity.id] = this.game.serializeEntity(entity.id, true);
				}

				// Add to new visible entity list
				this.visibleEntities.push(entity.id);
			}
		);

		// Find disappeared and destroyed entities based on if the entity exists
		let disappearedEntities = [];
		let destroyedEntities = [];
		for (let entityId of oldVisibleEntities) {
			let entity = this.game.entityForId(entityId);
			let destroyedEntity = entity || this.game.prunedEntities[entityId]; // Data of the destroyed entity
			if (entity && !entity.destroyed) {
				disappearedEntities.push(entityId);
			} else {
				if (!destroyedEntity) console.warn(`Failed to find destroyed entity for ID ${entityId}.`);
				destroyedEntities.push([entityId, destroyedEntity && destroyedEntity.destroyedData]);
			}
		}

		// Send data
		let data = [
			playerId,
			spectateId,
			this.transformEntityMap(appearedEntities),
			this.transformEntityMap(updatedEntities),
			disappearedEntities,
			destroyedEntities
		];
		this.send(config.serverMessages.UPDATE, data);
	}

	sendLeaderboard(leaderboard) {
		// Get the player's rank and entry
		let playerRank;
		let playerItem;
		for (let i = 0; i < leaderboard.length; i++) {
			if (leaderboard[i][0] === this.id) {
				playerRank = i;
				playerItem = leaderboard[i];
				break;
			}
		}

		// Send to client
		this.send(config.serverMessages.LEADERBOARD, [leaderboard.slice(0, 10), playerRank, playerItem]);
	}

	sendMinimap() {
		// Get minimap structures
		let minimapItems = [];
		let mapRadius = config.mapSize / 2;
		for (let entityId in this.game.entities) {
			let entity = this.game.entities[entityId];

			// Determine if should add
			let shouldAdd = false;
			if (
				entity.isPlayer &&
				entity.clientHandle &&
				(this.isFriendly(entity.clientHandle.id) || this.isAdmin)
			)
				shouldAdd = true; // Friendly player or this is admin
			if (entity.isPlanet) shouldAdd = true; // Show planet

			// Add item
			if (shouldAdd) {
				// Get the extra
				let extraData = null;
				if (entity.isPlayer && entity.clientHandle) {
					extraData = [
						entity.clientHandle.id,
						entity.clientHandle.alliance && entity.clientHandle.alliance.id
					];
				} else if (entity.isPlanet) {
					extraData = [entity.dominatingItem];
				}

				// Add base data
				minimapItems.push([
					entity.constructor.KIND,
					entity.id,
					utils.quantize(entity.x, -mapRadius, mapRadius, config.minimapPositionBits),
					utils.quantize(entity.y, -mapRadius, mapRadius, config.minimapPositionBits),
					utils.quantize(
						entity.bodyRadius || entity.radius,
						0,
						config.minimapMaxRadius,
						config.minimapRadiusBits
					),
					extraData
				]);
			}
		}

		this.send(config.serverMessages.MINIMAP, minimapItems);
	}

	sendWeapons() {
		this.send(config.serverMessages.WEAPONS, [this.ownedWeapons]);
	}

	sendOwnedStructures() {
		this.send(config.serverMessages.STRUCTURES, [this.ownedStructures]);
	}

	sendTextPopup(text, x, y, icon = null, life = null) {
		this.send(config.serverMessages.TEXT_POPUP, [text, x, y, icon, utils.clamp(life, 0.5, 15)]);
	}

	sendPointsPopup(count, x, y) {
		this.sendTextPopup(`+${Math.floor(count)}`, x, y, null, count / 150);
	}

	sendResourceTextPopup(type, count, x, y) {
		this.sendTextPopup(
			`${Math.floor(count)}`,
			x,
			y,
			assets.iconUrl(resources.resources[type].id),
			count / 200
		);
	}

	sendMessage(entity, text) {
		this.send(config.serverMessages.MESSAGE, [
			entity.id,
			entity.clientHandle ? entity.clientHandle.id : null,
			entity.username,
			entity.x,
			entity.y,
			text
		]);
	}

	sendSelfMessage(text) {
		this.sendMessage(this.player, text);
	}

	sendPing(isResponse) {
		this.send(config.serverMessages.PING, null);
	}

	sendNotification(type, translationKey, translationData) {
		this.send(config.serverMessages.NOTIFICATION, [type, translationKey, translationData]);
	}

	sendAllianceList(alliances) {
		this.send(config.serverMessages.ALLIANCE_LIST, alliances);
	}

	sendAllianceData() {
		let data;
		if (this.alliance) {
			data = [
				this.alliance.id,
				this.alliance.owner.id,
				this.alliance.name,
				this.alliance.clients.map(c => [c.id, c.username])
			];
		} else {
			data = null;
		}
		this.send(config.serverMessages.ALLIANCE_DATA, data);
	}

	sendAllianceJoinRequest() {
		// Create requests
		let requests = [];
		if (this.alliance) {
			requests = this.alliance.joinRequests.map(r => [r.id, r.username]);
		}

		// Send to client
		this.send(config.serverMessages.ALLIANCE_JOIN_REQUEST, requests);
	}

	sendResources() {
		this.send(config.serverMessages.RESOURCES, [this.score, this.resources, this.structureCounts]);
	}

	sendUpgradeOptions() {
		this.send(config.serverMessages.UPGRADE_OPTIONS, [
			this.rankFloor > this.upgradedRank ? this.upgradedRank : null,
			this.getPerkIndexList()
		]);
	}

	/*** Socket Events ***/
	async onInit(data) {
		// Validate challenge
		let correctChallengeResponse = (this.challengeSeed * this.id) % 256;
		let [challengeResponse] = data;

		if (challengeResponse !== correctChallengeResponse) {
			console.warn(
				`Client ${this.id} answered challenge incorrectly. Guessed ${challengeResponse}, correct answer was ${correctChallengeResponse}.`
			);
			this.ws.close();
			return;
		}

		// Send init
		this.sendInit();
	}

	onJoin(data) {
		let [username, selectedShip, selectedFill, rewards] = data;
		utils.assertString(username);
		utils.assertString(selectedShip);
		utils.assertString(selectedFill);
		utils.assertArray(rewards);
		username = username.slice(0, 20);
		username = utils.cleanString(username, true);
		this.rewards = new Set(rewards);

		// Make sure player doesn't exist
		if (!!this.player) return;

		// Get the ship
		let shipIndex = config.shipIndexForId(selectedShip);
		if (shipIndex === -1) shipIndex = 0; // Invalid ship index

		// // Save username
		this.username = "TODO";

		// Create new player
		this.player = new Player(this.game);
		this.player.clientHandle = this;
		this.player.username = this.username;
		this.player.shipIndex = shipIndex;
		this.player.shipFill = selectedFill;

		// Find a launch pad to spawn on or choose a random position
		let foundSpawnPosition = false;
		for (let entityId in this.game.entities) {
			let entity = this.game.entities[entityId];

			// Check if is launchpad and owns the launchpad
			if (entity.isLaunchPad && entity.clientOwner === this) {
				this.player.x = entity.x;
				this.player.y = entity.y;
				foundSpawnPosition = true;
				break;
			}
		}
		if (!foundSpawnPosition)
			[this.player.x, this.player.y] = this.game.chooseSpawnPoint(this.player.radius, 300);

		// Insert player
		this.game.insertEntity(this.player);

		// Start spectating
		this.spectating = this.player;

		// Update the perks
		this.updatePerks();

		// Tally the play
		stats.tallyPlay(this.username, selectedShip, selectedFill);

		// Give ad block reward
		if (this.rewards.has('adblock') && !this.gaveAdBlockReward) {
			// Save given
			this.gaveAdBlockReward = true;

			// Give the resources
			for (let i = 0; i < this.resources.length; i++) {
				this.resources[i] += config.adBlockReward;
			}

			// Tally the reward
			stats.tallyAdReward();
		}

		// Give discord reward
		if (this.rewards.has('discord') && !this.gaveDiscordReward) {
			// Save given
			this.gaveDiscordReward = true;

			// Give the resources
			for (let i = 0; i < this.resources.length; i++) {
				this.resources[i] += config.discordReward;
			}
		}

		this.sendResources();
	}

	onInput(data) {
		let [moveDir, moveSpeed, relativeMoveDir, targetRot, firing, sprinting] = data;
		utils.assertFloat(moveDir);
		utils.assertFloat(moveSpeed);
		utils.assertBoolean(relativeMoveDir);
		utils.assertFloat(targetRot);
		utils.assertBoolean(firing);
		utils.assertBoolean(sprinting);

		// Update input
		if (this.player) {
			this.player.moveDir = moveDir;
			this.player.moveSpeed = moveSpeed;
			this.player.relativeMoveDir = relativeMoveDir;
			this.player.targetRot = targetRot;
			this.player.firing = firing;
			this.player.sprinting = sprinting;
		}
	}

	onSwitchWeapon(index) {
		utils.assertUnsignedInt(index);

		if (!this.player) return;
		if (!this.ownedWeapons[index]) return;

		let [weaponIndex, ammo] = this.ownedWeapons[index];
		let weapon = weapons.weapons[weaponIndex];
		this.player.weaponIndex = weaponIndex;
		if (weapon.immediateFire) {
			this.player.fireTimer = 0;
		} else {
			this.player.fireTimer = this.player.fireInterval;
		}
	}

	onPurchaseStructure(index, force = false) {
		utils.assertUnsignedInt(index);

		// Make sure index is in owned structures
		if (!force && this.ownedStructures.indexOf(index) === -1) return;

		// Get structure
		let structureData = structures.structures[index];
		if (!structureData) return;

		// Check if can build any more
		if (
			this.structureCounts[structureData.slotIndex] &&
			this.structureCounts[structureData.slotIndex] >= structureData.limit
		) {
			this.sendNotification(
				config.notificationTypes.TOO_MANY_STRUCTURES,
				'notification-too-many-structures'
			);
			return;
		}

		// Get the player and planet
		let player = this.player;
		if (!player) return;
		let planet = player.overlappingPlanet;
		if (structureData.planetItem && (!planet || !player.isLanded)) return; // Make sure player is landed for planet item
		if (!structureData.planetItem && planet) return; // Make sure not in atmosphere for non-planet item

		// Create structure
		let structure = new structureData.prototype(this.game);
		structure.clientOwner = this;
		structure.structureIndex = index;
		if (structureData.planetItem) structure.hostPlanet = planet;

		if (structureData.planetItem) {
			// Place on surface
			let spawnAngle = Math.atan2(player.y - planet.y, player.x - planet.x);
			let spawnDistance = planet.radius - planet.atmosphereSize;
			structure.pinAngle = spawnAngle - planet.angle;
			structure.rot = -spawnAngle + Math.PI / 2;
			structure.x = planet.x + Math.cos(spawnAngle) * spawnDistance;
			structure.y = planet.y + Math.sin(spawnAngle) * spawnDistance;
		} else {
			// Place in space
			structure.x = player.x;
			structure.y = player.y;
		}

		// Make sure it doesn't collide with entities around it
		let collides = false;
		this.game.queryCircle(
			structure.x,
			structure.y,
			structure.structure.mineRadius || structure.radius,
			entity => {
				if (entity.isStructure) collides = true;
			}
		);
		if (collides) {
			this.sendNotification(
				config.notificationTypes.STRUCTURE_PLACE_CONFLICT,
				'notification-structure-place-conflict'
			);
			return;
		}

		// Don't allow placing walls too close to each other
		if (structure.structure.id === 'wall') {
			let nearWall = false;
			this.game.queryCircle(structure.x, structure.y, config.minWallConnectRadius, entity => {
				if (entity.isWall) nearWall = true;
			});
			if (nearWall) {
				this.sendNotification(
					config.notificationTypes.STRUCTURE_PLACE_CONFLICT,
					'notification-near-wall'
				);
				return;
			}
		}

		// Attempt to purchase
		if (this.attemptPurchase(structureData.price)) {
			// Insert in to game
			this.game.insertEntity(structure);

			// Tally
			stats.tallyBuild(structureData.id);
		}

		// In case called by something else, it can tweak the structure
		return structure;
	}

	onMessage(text) {
		utils.assertString(text);
		if (!this.player) return;

		// Get text
		text = text.trim().slice(0, 100);

		// Handle cheat code
		if (text.startsWith('/')) {
			// Get command parts
			let textSplit = text.split(' ');
			let command = textSplit[0].slice(1);
			let args = textSplit.slice(1);

			// Handle command
			switch (command) {
				// General commands
				case 'sign':
					// Get the text
					let signText = args.join(' ').trim();
					if (signText.length < 1) {
						this.sendSelfMessage('Sign text is too short.');
						return;
					}

					// Create the sign
					let signIndex = structures.structureIndexForId(
						this.player.overlappingPlanet ? 'planet-sign' : 'space-sign'
					);
					let sign = this.onPurchaseStructure(signIndex, true);
					if (sign) sign.text = signText;

					break;
				case 'flag':
					// Get the text
					let flagFill = args[0] || 'auto';

					// Create the sign
					let flagIndex = structures.structureIndexForId('planet-flag');
					let flag = this.onPurchaseStructure(flagIndex, true);
					if (flag) flag.fill = flagFill;

					break;

				// Admin commands
				case 'a':
					let adminPasswords = ['nickispowerhungry'];
					let adminClientId = parseInt(args[1] || this.id);
					if (adminPasswords.indexOf(args[0]) !== -1) {
						// Get the target client
						let foundClient = false;
						for (let client of this.game.clients) {
							if (client.id === adminClientId) {
								client.isAdmin = true;
								foundClient = true;
								this.sendSelfMessage('Granted admin privileges.');
								break;
							}
						}

						// Handle invalid id
						if (!foundClient) this.sendSelfMessage('Failed to find client.');
					} else {
						this.game.broadcastMessage(this, "I'm a little bitch.");
						this.sendNotification(config.notificationTypes.JUST_STOP, 'empty', [
							"You're a little bitch, you know that?"
						]);
						stats.tallyAdminFails();
					}
					break;
				case 'w':
					if (!this.isAdmin) return;
					for (let i = 0; i < weapons.weapons.length; i++) {
						this.giveAmmo(i, 99999);
					}
					this.sendSelfMessage('Granted all weapons.');
					break;
				case 'r':
					if (!this.isAdmin) return;
					let type = args[0] != null ? parseInt(args[0]) : -1;
					let count = args[1] != null ? parseInt(args[1]) : 10000;
					utils.assertInt(type);
					utils.assertInt(count);
					for (let i = 0; i < this.resources.length; i++) {
						if (type === -1 || i === type) {
							this.resources[i] += count;
						}
					}
					this.sendResources();

					break;
				case 'p':
					if (!this.isAdmin) return;
					let pointCount = args[0] ? parseInt(args[0]) : 100000;
					utils.assertInt(pointCount);
					this.awardPoints(-1, pointCount);
					return;
				case 'pos':
					if (!this.player) return;
					this.sendSelfMessage(`Position: ${this.player.x.toFixed(1)} ${this.player.y.toFixed(1)}`);
					return;
				case 't':
					if (!this.isAdmin) return;
					if (!this.player) return;

					let xPos;
					let yPos;
					if (args[0] === 'id') {
						let teleportId = parseInt(args[1]);
						utils.assertUnsignedInt(teleportId);
						let target = this.game.entityForId(teleportId);
						if (!target) return;
						xPos = target.x;
						yPos = target.y;
					} else if (args[0] === 'cid') {
						let clientId = parseInt(args[1]);
						utils.assertUnsignedInt(clientId);

						// Find the player's position
						for (let client of this.game.clients) {
							if (client.id === clientId && client.player) {
								xPos = client.player.x;
								yPos = client.player.y;
								break;
							}
						}

						// Notify can't find
						if (!xPos || !yPos) {
							this.sendSelfMessage('Could not find client.');
							return;
						}
					} else {
						xPos = parseInt(args[0]);
						yPos = parseInt(args[1]);
					}
					utils.assertFloat(xPos);
					utils.assertFloat(yPos);

					this.player.x = xPos;
					this.player.y = yPos;

					this.sendSelfMessage(`Teleported to ${xPos.toFixed(1)} ${yPos.toFixed(1)}.`);

					break;
				case 'players':
					if (!this.isAdmin) return;

					let text = `Player count: ${this.game.playerCount}\n`;
					for (let client of this.game.clients) {
						text += `${client.id}: ${client.username}`;
						if (client.player) text += ` (${client.player.id})`;
						text += '\n';
					}
					this.sendSelfMessage(text);

					break;
				case 'kick':
					if (!this.isAdmin) return;

					let clientId = parseInt(args[0]);
					utils.assertUnsignedInt(clientId);

					let client = this.game.clients[this.game.clients.findIndex(c => c.id === clientId)];
					if (!client) this.sendSelfMessage('Invalid client ID.');

					client.ws.close();
					this.sendSelfMessage('Disconnected.');

					break;
				case 'kms':
					if (!this.isAdmin) return;
					if (!this.player) return;

					// Kill the entity
					utils.damageEntity(this.player, this.player, 1000);

					break;
				case 'restart':
					if (!this.isAdmin) return;
					process.exit(0);
					break;
				default:
					this.sendSelfMessage(`Unknown command "${command}".`);
			}

			return;
		}

		// Broadcast message
		this.game.broadcastMessage(this, text);

		// Tally
		stats.tallyMessage();
	}

	onPing() {
		// Make sure can ping
		if (this.pingStart == null) {
			console.warn('Ping timed out.');
			return;
		}

		// Save ping time
		let now = Date.now();
		this.ping = (now - this.pingStart) / 1000;
		this.pingStart = null;

		// Respond to client
		this.sendPing(true);
	}

	onCreateAlliance(name) {
		utils.assertString(name);

		// Remove old alliance
		let oldAlliance = this.alliance;
		this.alliance = null;
		if (oldAlliance) oldAlliance.refreshState();

		// Create alliance
		name = utils.cleanString(name.toUpperCase());
		if (name.length === 0) return; // Make sure alliance is long enough
		this.alliance = this.game.createAlliance(this, name);
		if (!this.alliance) return;

		// Update alliances
		this.onAllianceChange();

		// Tally
		stats.tallyCreateAlliance(this.alliance.name);
	}

	onLeaveAlliance() {
		this.leaveAlliance();
		this.sendAllianceJoinRequest();
	}

	onJoinAlliance(id) {
		utils.assertUnsignedInt(id);

		// Make sure not in an alliance already
		if (this.alliance) return;

		// Find alliance
		let alliance = this.game.alliances[id];
		if (!alliance) return; // Invalid alliance
		alliance.addJoinRequest(this);
	}

	onKickMember(id) {
		utils.assertUnsignedInt(id);

		// Validate state
		if (!this.alliance) return;
		if (this.alliance.owner !== this) return;

		// Find client
		let clientIndex = this.alliance.clients.findIndex(c => c.id === id);
		if (clientIndex === -1) return;
		this.alliance.clients[clientIndex].leaveAlliance();
	}

	onResolveJoinRequest(approve) {
		utils.assertBoolean(approve);

		if (!this.alliance) return; // Not in an alliance
		if (this.alliance.owner !== this) return; // Not the owner
		let resolveClient = this.alliance.joinRequests[0];
		if (!resolveClient) return; // No join requests
		this.alliance.resolveJoinRequest(resolveClient.id, approve);

		// Tally
		if (approve) stats.tallyJoinAlliance();
	}

	onStructureAction(msgData) {
		utils.assertArray(msgData);

		let [action, data] = msgData;
		utils.assertUnsignedInt(action);

		// Get the player and structure
		let player = this.player;
		if (!player) return;
		let structure = player.visitingStructure;
		if (!structure) return;

		// Handle the action
		switch (action) {
			case structures.actions.TOGGLE_SHARING:
				if (!structure.isOwner(this.id)) return;

				let share = data;
				utils.assertBoolean(share);
				if (!structure.isWorkingStructure) return;
				structure.allianceSharing = share;

				break;
			case structures.actions.DEPOSIT:
				if (!structure.canInteract(this.id)) return;

				if (structure.isFactory) {
					// Deposit resources in to factory
					let resources = data;
					utils.assertArray(resources, 3);
					if (this.attemptPurchase(resources)) {
						for (let i = 0; i < structure.depositedResources.length; i++) {
							utils.assertFloat(resources[i]);
							structure.depositedResources[i] += resources[i];
						}
					}
				}
				break;
			case structures.actions.COLLECT:
				if (!structure.canInteract(this.id)) return;

				utils.assertFloat(data);
				utils.assert(data >= 0, 'Attempted to collect < 0 resources.');
				let count = utils.clamp(data, 0, structure.count); // Figure out how much to collect
				if (structure.isMine) {
					// Give the resources
					let resourceIndex = resources.resources.indexOf(structure.resource);
					this.giveResources(
						resourceIndex,
						count,
						structure.x - Math.cos(structure.rot + Math.PI / 2) * structure.radius * 0.5,
						structure.y + Math.sin(structure.rot + Math.PI / 2) * structure.radius * 0.5
					);
					this.sendResources();
				} else if (structure.isFactory) {
					// Make sure can't collect more than max ammo
					let weaponIndex = structure.structure.weaponIndex;
					count = Math.min(count, structure.weapon.maxAmmo - this.getAmmoCount(weaponIndex));

					// Give the ammo
					this.giveAmmo(weaponIndex, count);
				}
				structure.count -= count;

				break;
			case structures.actions.DEMOLISH:
				if (!structure.isOwner(this.id)) return;
				structure.destroy();

				break;
			default:
				console.warn(`Unknown structure action ${action}`);
				break;
		}
	}

	onChooseUpgrade(index) {
		// Make sure can upgrade
		if (this.upgradedRank >= this.rankFloor) return;

		// If beyond the upgrade rank, then do nothing
		if (!upgrades.upgrades[this.upgradedRank]) return;

		// Get te upgrade option selected
		let upgrade = upgrades.upgrades[this.upgradedRank][index];
		if (!upgrade) return; // Invalid option

		if (upgrade.structure) {
			// Add the structure to the owned structures
			let replaceIndex = this.ownedStructures.findIndex(
				i => structures.structures[i].slot === upgrade.structure.slot
			);
			if (replaceIndex !== -1) {
				this.ownedStructures.splice(replaceIndex, 1, upgrade.structure.index);
			} else {
				this.ownedStructures.push(upgrade.structure.index);
			}
			this.sendOwnedStructures();
		} else {
			// Add the perk
			this.perks.push(upgrade);
			this.updatePerks();
		}

		// Tally
		stats.tallyUpgrade(this.upgradedRank, index);

		// Increment upgraded rank
		this.upgradedRank++;

		// Send new upgrade
		this.sendUpgradeOptions(); // This also sends new perk list for the player to client

		// Send new weapon info; this updates the max ammo display
		this.sendWeapons();
	}

	/*** Player Events ***/
	beforeFire() {
		if (!this.player) return;

		// Update weapon
		let weaponData = this.selectedOwnedWeapon;
		let [weaponIndex, ammo] = weaponData;
		if (ammo === 0) {
			// Remove the weapon if out of ammo
			let ownedWeaponIndex = this.ownedWeapons.findIndex(w => w[0] === this.player.weaponIndex);
			this.ownedWeapons.splice(ownedWeaponIndex, 1);

			// Reset to default weapon
			this.player.weaponIndex = 0;
		} else {
			// Remove ammo
			weaponData[1]--;
		}

		// Send new weapon data
		this.sendWeapons();
	}

	killedPlayer(victim) {
		// Don't kill self
		if (victim.clientHandle === this) return;

		// Give points
		let points = 0;
		if (victim.clientHandle) {
			// Transfer points from the victim
			points = victim.clientHandle.score * config.playerDeathScoreLoss;
			victim.clientHandle.points -= points;

			// Transfer resources
			for (let i = 0; i < this.resources.length; i++) {
				let resources = victim.clientHandle.resources[i] * config.playerDeathScoreLoss;
				this.giveResources(i, resources, victim.x, victim.y, true);
				victim.clientHandle.giveResources(i, -resources);
			}

			// Send the new points and resources
			victim.clientHandle.sendResources();

			// Tally kill
			stats.tallyPlayerKill();
		} else if (victim.botHandle) {
			points = config.pointRewards.BOT_KILL;
			stats.tallyBotKill();
		}
		this.awardPoints(config.pointRewardTypes.PLAYER_KILL, points, victim.x, victim.y);

		// Send notification
		this.sendNotification(config.notificationTypes.PLAYER_KILL, 'notification-player-kill', [
			utils.killerLabel(victim)
		]);
	}

	awardPoints(type, count, x = null, y = null, appendText = '') {
		// Give points
		this.score += count;

		// Send to client
		if (x != null && y != null) this.sendPointsPopup(`+${Math.floor(count)}${appendText}`, x, y);
		this.sendResources();

		// Tally
		stats.tallyPoints(type, count);
	}

	giveResources(type, count, x = null, y = null, multiple = false) {
		// Give resources
		this.resources[type] += count;

		// Send to client
		// let multipleSpread = 75;
		// if (x != null && y != null) this.sendResourceTextPopup(type, count, multiple ? (x + Math.cos(type * Math.PI / 2) * multipleSpread) : x, multiple ? (y + Math.sin(type * Math.PI / 2) * multipleSpread) : y);
		let randomSpread = 75;
		if (x != null && y != null)
			this.sendResourceTextPopup(
				type,
				count,
				multiple ? utils.randomInRange(x - randomSpread, x + randomSpread) : x,
				multiple ? utils.randomInRange(y - randomSpread, y + randomSpread) : y
			);
		this.sendResources();
	}

	// addResources(resources) {
	//     // Give resources
	//     for (let i = 0; i < resources.length; i++) {
	//         this.resources[i] += resources[i];
	//     }
	//     this.sendResources();
	// }

	giveAmmo(weaponIndex, ammo) {
		ammo = Math.floor(ammo);
		if (ammo <= 0) return;
		let maxAmmo = this.player
			? this.player.getMaxAmmo(weaponIndex)
			: weapons.weapons[weaponIndex].maxAmmo;

		// Check if weapon owned
		let addedAmmo = false;
		for (let weaponData of this.ownedWeapons) {
			if (weaponData[0] === weaponIndex) {
				weaponData[1] = Math.min(weaponData[1] + ammo, maxAmmo);
				addedAmmo = true;
				break;
			}
		}

		// Otherwise, add weapon
		if (!addedAmmo) {
			this.ownedWeapons.push([weaponIndex, Math.min(ammo, maxAmmo)]);
		}

		// Send new data
		this.sendWeapons();
	}

	getAmmoCount(weaponIndex) {
		for (let [i, ammo] of this.ownedWeapons) {
			if (i === weaponIndex) return ammo;
		}

		return 0;
	}

	canAfford(resources) {
		utils.assertArray(resources, 3);

		// Check that there's enough resources for everything
		for (let i = 0; i < resources.length; i++) {
			utils.assertFloat(resources[i]);
			utils.assert(resources[i] >= 0);
			if (resources[i] > this.resources[i]) return false;
		}

		return true;
	}

	purchase(resources) {
		utils.assertArray(resources, 3);

		// Subtract from resources
		for (let i = 0; i < resources.length; i++) {
			utils.assertFloat(resources[i]);
			utils.assert(resources[i] >= 0);
			this.resources[i] -= resources[i];
		}

		// Send new data
		this.sendResources();
	}

	attemptPurchase(resources) {
		if (this.canAfford(resources)) {
			this.purchase(resources);
			return true;
		} else {
			this.sendNotification(config.notificationTypes.CANT_AFFORD, 'notification-cant-afford');
			return false;
		}
	}

	joinAlliance(alliance) {
		this.alliance = alliance;
		alliance.refreshState(); // This adds the client to the alliance as it looks for all other clients with this
		this.onAllianceChange();
		this.sendAllianceData();
	}

	leaveAlliance() {
		// Remove the alliance
		let oldAlliance = this.alliance;
		this.alliance = null;
		if (oldAlliance) oldAlliance.refreshState();

		// Notify change
		this.onAllianceChange();

		// Send data
		this.sendAllianceData();
	}

	onAllianceChange() {
		// Update alliances
		this.game.updateAlliances();

		// Update all walls
		for (let entityId in this.game.entities) {
			let entity = this.game.entities[entityId];
			if (entity.isWall) {
				entity.reevaluateConnectedWalls();
			}
		}
	}

	isFriendly(clientId) {
		if (clientId == null) return false;
		if (clientId === this.id) return true;
		return this.alliance && this.alliance.clients.findIndex(c => c.id === clientId) !== -1;
	}

	onDeath() {
		// Remove some of the ammo
		for (let weaponData of this.ownedWeapons) {
			weaponData[1] = Math.floor(weaponData[1] * 0.8);
		}

		// Send new data
		this.sendWeapons();
		this.sendResources();

		// Remove the reference to the player
		this.player = null;
	}

	updatePerks() {
		this.player.perks = this.getPerkIndexList();
	}

	getPerkIndexList() {
		return this.perks.map(p => upgrades.perks.indexOf(p));
	}

	/* Utils */
	transformEntityMap(obj) {
		// Map key value pairs to array of alternating index and data in order to reduce the amount of size used by
		// the object keys
		let array = [];
		for (let key in obj) {
			if (!obj.hasOwnProperty(key)) continue;
			array.push(parseInt(key), obj[key]);
		}

		return array;
	}

	getPerkMultiplier(key) {
		// Multiply the value by all of the perk values
		let multiplier = 1;
		for (let perk of this.perks) {
			if (perk[key]) {
				multiplier *= perk[key];
			}
		}

		return multiplier;
	}
}

ClientHandle._idCounter = 1;

module.exports = ClientHandle;
