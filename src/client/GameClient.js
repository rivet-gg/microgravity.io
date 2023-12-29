const RIVET = require("@rivet-gg/api");

const Game = require('../Game');
const InputHandler = require('./InputHandler');
const ExplosionManager = require('./effects/ExplosionManager');
const TextPopupManager = require('./effects/TextPopupManager');
const StarField = require('./effects/StarField');
const Planet = require('../entities/Planet');
const Player = require('../entities/Player');
const config = require('../config/config');
const utils = require('../utils');
const weapons = require('../config/weapons');
const structures = require('../config/structures');
const assets = require('./assets');
const resources = require('../config/resources');
const settings = require('./settings');
const ClipboardJS = require('clipboard');
const msgpack = require('msgpack-lite');
const Vue = require('vue/dist/vue.js');
const VueI18n = require('vue-i18n/dist/vue-i18n.js');
const translations = require('./crowdl/translations');
const translationsRaw = require('./crowdl/translationsRaw');
const languageList = require('./crowdl/languages.json');
const upgrades = require('../config/upgrades');
const safeAreaInsets = require('safe-area-insets');

// Import components
const Resource = require('./views/Resources');

const NOTIFICATION_LIFESPAN = 1000 * 6;
const NOTIFICATION_FADE_LENGTH = 200;

class GameClient extends Game {
	/**
	 * @returns {?Player}
	 */
	get currentPlayer() {
		return this.entities[this.playerId];
	}

	/**
	 * @returns {?Player}
	 */
	get spectatingPlayer() {
		return this.entities[this.spectateId];
	}

	get inGame() {
		return !!this.playerId && this.socketOpen;
	}

	get width() {
		return this.canvas.width;
	}
	get height() {
		return this.canvas.height;
	}
	get screenWidth() {
		return window.innerWidth;
	}
	get screenHeight() {
		return window.innerHeight;
	}

	get smallUI() {
		return this.screenWidth <= 950;
	}

	get inputFocused() {
		return document.activeElement instanceof HTMLInputElement;
	}

	get modalShowing() {
		return this.showingAlliances || this.showingHelp;
	}

	get buildTipSlot() {
		return this.vue.hoveringStructure ? structures.structureForId(this.vue.hoveringStructure).slot : null;
	}

	get averageFPS() {
		return this.framesPerSecondHistory.reduce((n, v) => n + v) / this.framesPerSecondHistory.length;
	}

	get viewDistanceMultiplier() {
		if (this.currentPlayer) {
			return this.currentPlayer.getPerkMultiplier('viewDistance');
		} else if (this.spectatingPlayer && this.spectatingPlayer.isPlayer) {
			return this.spectatingPlayer.getPerkMultiplier('viewDistance');
		} else {
			return 1;
		}
	}

	get normalizedUsername() {
		return this.currentPlayer ? this.currentPlayer.username.toLowerCase() : '';
	}
	get isReee() {
		return this.normalizedUsername.startsWith('ree');
	}
	get isLSD() {
		return this.normalizedUsername === 'lsd';
	}
	get isOopsie() {
		return this.normalizedUsername === '#oopsie';
	}

	constructor() {
		super();

		/** @type {HTMLCanvasElement} */
		this.canvas = document.getElementById('gameCanvas');

		/** @type {CanvasRenderingContext2D} */
		this.context = this.canvas.getContext('2d');

		// Pixel density
		this.pixelDensity = 1;

		// Viewport position
		this.viewportX = 0;
		this.viewportY = 0;

		/* @type {Object.<number, Entity[]>} */ this.renderLayers = {};

		/* @type {boolean} */ this.renderingWorld = false;
		/* @type {boolean} */ this.renderingUI = false;

		/** @type {boolean} */ this.initiated = false;
		/** @type {?string} */ this.autoJoinLobbyId = null;

		/** @type {number} */ this.ping = 0;
		/** @type {boolean} */ this.pingStart = null;

		/** @type {number} */ this.kickTimer = 0; // Only increments if on home screen

		/** @type {string} */ this.gameMode = null;

		/** @type {Set<string>} */ this.rewards = new Set((localStorage.getItem('r') || '').split(','));

		/** @type {number} */ this.lastRenderTime = null;
		/** @type {number[]} */ this.framesPerSecondHistory = [];
		this.framesPerSecondHistory.length = 10;
		this.framesPerSecondHistory = this.framesPerSecondHistory.map(() => 60);
		/** @type {number} */ this.framesPerSecond = 60;

		/** @type {number} */ this.killVignetteProgress = 0.0;
		/** @type {number} */ this.killVignetteProgressLength = 1.0;

		/** @type {number} */ this.score = 0;
		/** @type {number[]} */ this.resources = [0, 0, 0];
		/** @type {Object.<string, number>} */ this.structureCounts = {}; // Slot indexes mapped to counts

		/** @type {number} */ this.clientId = null;

		/** @type {?number} */ this.playerId = null;

		/** @type {?number} */ this.spectateId = null;

		/** @type {Object[]} */ this.leaderboardData = [];

		/** @type {number} */ this.playerRank = -1;
		/** @type {Array} */ this.playerLeaderboardItem = null;

		/** @type {number[][]} */ this.ownedWeapons = [];

		/** @type {number[]} */ this.ownedStructures = [];

		/** @type {Array} */ this.allianceList = [];
		/** @type {Array} */ this.allianceData = null;

		/** @type {boolean} */ this.showingAlliances = false;
		/** @type {boolean} */ this.showingHelp = false;

		/** @type {boolean} */ this.showingChatBox = false;

		/** @type {Object.<number, Object>} */ this.chatMessages = {}; // {<client id>: [<message>, <receive time>}
		/** @type {number} */ this.chatShowTime = 8.0;

		/** @type {?number} */ this.lastNotificationDate = null;
		/** @type {?number} */ this.lastNotificationText = null;

		/** @type {number} */ this.showControlsTimer = 10;
		/** @type {number} */ this.heartBeatTimer = 0;

		/** @type {?number} */ this.deathPosX = null;
		/** @type {?number} */ this.deathPosY = null;

		/** @type {boolean} */ this.demolishConfirm = false;

		this.recognition = null;

		// Init UI
		this.initUI();

		// Init speech recognition
		this.initRecognition();

		// Init input
		this.initInput();

		// Update game state
		this.updateGameState();

		// Init effects
		this.initEffects();

		// Start render loop
		this.render();
	}

	reset() {
		super.reset();

		if (this.ws) {
			this.ws.onopen = this.ws.onclose = this.ws.onmessage = null;
			this.ws.close();
		}
		this.ws = null;

		this.initiated = false;
		this.ping = 0;
		this.pingStart = null;
		this.kickTimer = this.vue.kickTimer = 0;
		this.gameMode = this.vue.gameMode = null;
		this.region = this.vue.region = null;
		this.lastRenderTime = null;
		this.killVignetteProgress = 0.0;
		this.killVignetteProgressLength = 1.0;
		this.score = this.vue.score = 0;
		this.resources = this.vue.resources = [0, 0, 0];
		this.structureCounts = this.vue.structureCounts = {}; // Slot indexes mapped to counts
		this.clientId = null;
		this.playerId = null;
		this.spectateId = null;
		this.leaderboardData = [];
		this.playerRank = -1;
		this.playerLeaderboardItem = null;
		this.ownedWeapons = [];
		this.ownedStructures = [];
		this.allianceList = [];
		this.allianceData = null;
		this.showingAlliances = false;
		this.showingHelp = false;
		this.showingChatBox = false;
		this.chatMessages = {}; // {<client id>: [<message>, <receive time>}
		this.chatShowTime = 8.0;
		this.lastNotificationDate = null;
		this.lastNotificationText = null;
		this.showControlsTimer = 10;
		this.heartBeatTimer = 0;
		this.deathPosX = null;
		this.deathPosY = null;
		this.demolishConfirm = false;
		this.vue.selectedWeaponIndex = -1;
		this.vue.ownedWeaponIndex = 0;
		this.vue.weaponList = [];
		this.vue.structureList = [];
		this.vue.upgradeOptions = null;
		this.vue.hoveringPerk = null;
		this.vue.leaderboardItems = [];
		this.vue.isLanded = false;
		this.vue.onPlanet = false;
		this.vue.showingBuildGroup = null;
	}

	async start() {
		console.log('Starting game');

		/** @type {RIVET.RivetClient} */ this.rivet = new RIVET.RivetClient({
			environment: process.env.RIVET_API_ENDPOINT,
			token: process.env.RIVET_TOKEN
		});

		// Fetch recommended regions
		this.rivet.matchmaker.regions.list({}).then(res => {
			this.vue.regions = res.regions.map(x => ({ id: x.regionId, title: x.regionId }));
		});

		// Join lobby
		this.findLobby(this.autoJoinLobbyId);
		this.autoJoinLobbyId = null;
	}

	async findLobby(lobbyId = null, captcha = null) {
		document.querySelector('#hCaptcha').style.display = 'none';

		let gameModes = [settings.getString('gameMode', 'classic')];
		let regions = settings.has('region') ? [settings.getString('region')] : null;

			let lobby = null;
			try {
				if (lobbyId) {
					console.log('Joining lobby', lobbyId);

					let res = await this.rivet.matchmaker.lobbies.join({
						lobbyId,
						captcha
					});
					lobby = res.lobby;

					// TODO: Handle lobby not found
				} else {
					console.log('Finding lobby', { gameModes, regions });

					let res = await this.rivet.matchmaker.lobbies.find({
						gameModes,
						regions,
						captcha
					});
					lobby = res.lobby;
				}
			} catch (err) {
				// Request captcha on error
				if (err.code == 'CAPTCHA_REQUIRED') {
					document.querySelector('#hCaptcha').style.display = 'flex';

					window.hcaptcha.render('hCaptcha', {
						sitekey: err.metadata.hcaptcha.site_id,
						callback: clientResponse => {
							this.findLobby(lobbyId, {
								hcaptcha: {
									clientResponse
								}
							});
						}
					});
				} else {
					console.error('Failed to find lobby:', err);
					alert(`Failed to find lobby: ${err.code}`);
					location.reload();
				}
			}

			if (!lobby) throw 'Missing lobby';
			console.log('Found lobby', lobby);

			this.connectSocket(lobby);
	}

	connectSocket(lobby) {
		this.reset();

		this.lobby = lobby;
		this.region = this.vue.region = lobby.region.regionId;

		let port = lobby.ports['default'];
		let wsProtocol = port.isTls ? 'wss:' : 'ws:';
		let url = `${wsProtocol}//${port.hostname}:${port.port}/?token=${lobby.player.token}`;
		console.log('Connecting', { lobby, url });

		this.ws = new WebSocket(url);
		this.ws.binaryType = 'arraybuffer';
		this.socketOpen = false; // True if the socket is open
		this.socketClosed = false; // True if the socket has been closed since created

		this.ws.onopen = () => {
			// Update state
			this.socketOpen = true;
			this.updateGameState();
		};
		this.ws.onclose = () => {
			// Update state
			this.socketOpen = false;
			this.socketClosed = true;
			this.updateGameState();

			// Move ad to disconnect screen
			const ad = document.getElementById('microgravity-io_300x250');
			if (ad) {
				document.getElementById('disconnectScreen').appendChild(ad);
				ad.style.marginTop = '20px';
				setTimeout(() => window.refreshAd(), 200); // Refresh ad after moved

				// Refresh the ad at interval
				setInterval(() => {
					window.refreshAd();
				}, 2 * 60 * 1000); // Refresh every 2 minutes
			}
		};
		this.ws.onerror = e => console.log('Socket error:', e);

		this.ws.onmessage = e => {
			// Decode data
			let binaryData = new Uint8Array(e.data);
			let [type, data] = msgpack.decode(binaryData);

			if (localStorage.logMessages) {
				console.log(type, JSON.stringify(data));
			}

			// Call event
			switch (type) {
				case config.serverMessages.PRE_INIT:
					this.onPreInit(data);
					break;
				case config.serverMessages.INIT:
					this.onInit(data);
					break;
				case config.serverMessages.UPDATE:
					this.onUpdate(data);
					break;
				case config.serverMessages.LEADERBOARD:
					this.onLeaderboard(data);
					break;
				case config.serverMessages.MINIMAP:
					this.onMinimap(data);
					break;
				case config.serverMessages.WEAPONS:
					this.onWeapons(data);
					break;
				case config.serverMessages.STRUCTURES:
					this.onStructures(data);
					break;
				case config.serverMessages.TEXT_POPUP:
					this.onTextPopup(data);
					break;
				case config.serverMessages.MESSAGE:
					this.onMessage(data);
					break;
				case config.serverMessages.PING:
					this.onPing(data);
					break;
				case config.serverMessages.NOTIFICATION:
					this.onNotification(data);
					break;
				case config.serverMessages.ALLIANCE_LIST:
					this.onAllianceList(data);
					break;
				case config.serverMessages.ALLIANCE_DATA:
					this.onAllianceData(data);
					break;
				case config.serverMessages.ALLIANCE_JOIN_REQUEST:
					this.onAllianceJoinRequest(data);
					break;
				case config.serverMessages.RESOURCES:
					this.onResources(data);
					break;
				case config.serverMessages.UPGRADE_OPTIONS:
					this.onUpgradeOptions(data);
					break;
				default:
					throw new Error(`Unknown message type ${type}.`);
			}
		};
	}

	initUI() {
		// Find default locale by searching the available languages until one is found that's in the list
		let languageOptions = navigator.languages ? navigator.languages : [navigator.language]; // Fallback to default language
		let defaultLocale = 'en';
		console.log('langaugeOptions', languageOptions, 'translations', translations);
		for (let lang of languageOptions) {
			let splitLang = lang.split('-')[0]; // For languages like "ru-RU", this will split to "ru"
			if (translations[lang]) {
				defaultLocale = lang;
				break;
			} else if (translations[splitLang]) {
				defaultLocale = splitLang;
				break;
			}
		}

		// Add dev tools and performance monitoring
		if (!config.isProd) {
			Vue.config.devtools = true;
			Vue.config.performance = true;
		}

		// Init translations
		Vue.use(VueI18n);
		this.i18n = new VueI18n({
			locale: defaultLocale,
			fallbackLocale: 'en',
			messages: translations
		});
		utils.i18n = this.i18n;

		// Init Vue
		let game = this;
		this.vue = new Vue({
			el: '#ui',

			data: {
				// Utils
				game: game,
				assets: assets,
				utils: utils,
				config: config,
				i18n: this.i18n,
				friends: this.friends,

				// Languages
				languages: translationsRaw,

				// Main menu
				lobbyLinkJustCopied: false,
				showConsent: localStorage.consentedToPrivacyPolicy !== 'true',
				kickTimer: 0,
				usingTouch: false,
				rewards: new Array(game.rewards.values()),

				// Matchmaking
				gameMode: '',
				region: '',
				gameModes: [
					{ id: 'classic', title: 'Classic' },
					{ id: 'aliens', title: 'Aliens' }
				],
				regions: [],

				// Ships
				selectedShip: settings.getString('selectedShip', config.shipFills[0].value),
				selectedFill: settings.getString('selectedFill', config.shipFills[0].value),

				// Game state
				score: 0,
				resources: [0, 0, 0],
				structureCounts: {},

				selectedWeaponIndex: -1,
				ownedWeaponIndex: 0,
				weaponList: [],

				structureList: [],
				hoveringStructure: null,

				upgradeOptions: null,
				hoveringPerk: null,

				leaderboardItems: [],

				activeMenu: config.activeMenu.INFO,

				isLanded: false,
				onPlanet: false,

				speechRecording: false,

				// Building
				buildGroups: structures.groups,
				showingBuildGroup: null,
			},

			methods: {
				// Main menu
				copyLobbyLink() {
					// Animate copied
					this.lobbyLinkJustCopied = true;
					setTimeout(() => {
						this.lobbyLinkJustCopied = false;
					}, 1000);
				},
				joinGame() {
					// Hide consent
					localStorage.consentedToPrivacyPolicy = 'true';
					this.showConsent = false;

					// Send join
					game.sendJoin();
				},
				changeActiveMenu(value) {
					this.activeMenu = value;
				},

				// Build
				purchaseStructure(structureId) {
					game.sendPurchaseStructure(structures.structureIndexForId(structureId));
				},
				buildMouseEnter(structureId) {
					this.hoveringStructure = structureId;
				},
				buildMouseLeave() {
					this.hoveringStructure = null;
				},

				// Upgrades
				chooseUpgrade(index) {
					game.sendChooseUpgrade(index);
					this.hoveringStructure = null;
					this.hoveringPerk = null;
				},
				upgradeMouseEnter(index) {
					let option = this.upgradeOptionsData[index];
					if (option.structure) {
						this.hoveringStructure = option.structure.id;
					} else {
						this.hoveringPerk = upgrades.perks.indexOf(option);
					}
				},
				upgradeMouseLeave() {
					this.hoveringStructure = null;
					this.hoveringPerk = null;
				},

				// Weapons
				changeWeapon(delta) {
					game.switchWeaponBy(delta);
				},

				// Utils
				languageData(id) {
					return languageList[languageList.findIndex(l => l.id === id)];
				},
				// submitCheatCode(cheatCode) {
				//     console.log("Submitting", cheatCode);
				// }

				// Ships
				isShipLocked(ship) {
					return ship.reward != null && this.rewards.indexOf(ship.reward) === -1;
				},
				selectShip(ship) {
					if (this.isShipLocked(ship)) return;
					this.selectedShip = ship.id;
				},

				// Reward
				clickedSocial(social) {
					// Get the social URL
					let socialUrl;
					switch (social) {
						case 'twitter':
							socialUrl = 'https://twitter.com/RivetOfficial';
							break;
						case 'twitch':
							socialUrl = 'https://www.twitch.tv/RivetOfficial';
							break;
						case 'instagram':
							socialUrl = 'https://www.instagram.com/RivetOfficial/';
							break;
						case 'discord':
							socialUrl = 'https://discord.gg/p4m7RuW';
							break;
						default:
							throw new Error(`Unknown social ${social}.`);
					}

					// Open the URL
					window.open(socialUrl, '_blank');

					// Give reward
					setTimeout(() => {
						game.addReward(social);
					}, 5000);
				},
				hasReward(reward) {
					return this.rewards.indexOf(reward) !== -1;
				},


				selectGameMode(id) {
					settings.setString('gameMode', id);
					game.findLobby();
				},
				selectRegion(id) {
					settings.setString('region', id);
					game.findLobby();
				}
			},

			computed: {
				// General
				timeToKick() {
					return config.kickTimeout - this.kickTimer;
				},

				// Ships
				selectableShips() {
					return config.ships.filter(s => !s.special);
				},

				// Rank
				rank() {
					return Math.floor(utils.rankForScore(this.score));
				},
				rankProgress() {
					return utils.rankForScore(this.score) % 1;
				},

				// Building
				buildableStructures() {
					return this.structureList.filter(
						s => (this.isLanded && s.planetItem) || (!this.onPlanet && !s.planetItem)
					);
				},
				hoveringStructureData() {
					return structures.structureForId(this.hoveringStructure);
				},

				// Upgrades
				upgradeOptionsData() {
					return this.upgradeOptions != null ? upgrades.upgrades[this.upgradeOptions] : null;
				},
				hoveringPerkData() {
					return this.hoveringPerk != null ? upgrades.perks[this.hoveringPerk] : null;
				},
			},

			watch: {
				buildableStructures(val) {
					// Remove the hovering structure if the structure no longer is buildable (e.g. goes in to a planet
					// while hovering a space item)
					if (
						this.hoveringStructure &&
						val.findIndex(s => s.id === this.hoveringStructure) === -1
					) {
						this.hoveringStructure = null;
					}
				},

				// Settings
				selectedShip(val) {
					localStorage.setItem('selectedShip', val);
				},
				selectedFill(val) {
					localStorage.setItem('selectedFill', val);
				}
			},

			i18n: this.i18n
		});

		// Handle resize
		this.resize();
		addEventListener('resize', () => this.resize());
		document.addEventListener('nativeResolutionChange', () => this.resize()); // Resize on change resolution

		// Handle leave on prod
		if (config.isProd)
			window.onbeforeunload = () => 'Are you sure you want to leave? You will lose all progress.';

		// Share link button
		new ClipboardJS('#shareLobby', {
			text: () => `${location.origin}/?l=${lobby.lobbyId}`
		});

		// Update ad reward panel HTML
		let adBlockerReward = document.getElementById('pleaseDisableAdBlocker');
		if (adBlockerReward) {
			adBlockerReward.innerHTML = adBlockerReward.innerHTML
				.replace('\n', '<br/>')
				.replace(
					'{0}',
					utils.generateResourcesHTML([
						config.adBlockReward,
						config.adBlockReward,
						config.adBlockReward
					])
				);
		}

		// Update ad blocker
		let intervalId = setInterval(() => {
			if (document.getElementById('pleaseDisableAdBlocker')) {
				this.removeReward('adblock');
				// document.getElementById("moneyMakerSquare").style.border = "6px solid rgb(200, 0, 0)";
			} else {
				this.addReward('adblock');
				// document.getElementById("moneyMakerSquare").style.border = "none";
				clearInterval(intervalId);
			}
		}, 250);

		/* Settings */
		// Hook up checkboxes
		for (let settingId in settings.settings) {
			// Get the element
			let checkbox = document.getElementById(`${settingId}Setting`);

			// Set the default value
			checkbox.checked = settings[settingId];

			// Add change callback
			checkbox.addEventListener('change', ev => {
				settings[settingId] = ev.target.checked;
			});
		}

		/* Alliances */
		document
			.getElementById('showAllianceButton')
			.addEventListener('click', () => this.toggleAlliances(true));
		document
			.getElementById('dismissAlliances')
			.addEventListener('click', () => this.toggleAlliances(false));
		document.getElementById('createAllianceButton').addEventListener('click', () => {
			let nameInput = document.getElementById('allianceNameInput');

			let name = nameInput.value;
			this.sendCreateAlliance(name);
			nameInput.value = '';
		});
		document.getElementById('leaveAllianceButton').addEventListener('click', () => {
			this.sendLeaveAlliance();
		});

		/* Alliance Join Requests */
		document
			.getElementById('acceptJoinRequestButton')
			.addEventListener('click', () => this.sendResolveJoinRequest(true));
		document
			.getElementById('denyJoinRequestButton')
			.addEventListener('click', () => this.sendResolveJoinRequest(false));

		/* Chat */
		// Chat box
		let chatBox = document.getElementById('chatBox');
		chatBox.addEventListener('blur', () => {
			this.toggleChatBox(false);
		});
		chatBox.addEventListener('keypress', e => {
			if (!this.showingChatBox) return;

			if (e.key === 'Enter' || e.which === 13) {
				// Don't type anything
				e.preventDefault();

				// Hide the box
				let message = chatBox.value.trim();
				this.toggleChatBox(false);

				// Send message if has a valid length
				if (message.length === 0) return;
				this.sendMessage(message);
			}
		});

		// Hide chat box
		this.toggleChatBox(false);

		// Buttons
		document.getElementById('showChatButton').addEventListener('click', () => this.toggleChatBox(true));
		document.getElementById('showHelpButton').addEventListener('click', () => this.toggleHelp(true));
		document.getElementById('dismissHelp').addEventListener('click', () => this.toggleHelp(false));

		/* Data */
		// Set default name
		// let username = localStorage.getItem('username');
		// let usernameInput = document.getElementById('usernameField');
		// usernameInput.value = username ? username : utils.generateUsername();

		/* Mobile */ // See https://web.archive.org/web/20151103001838/http://www.luster.io/blog/9-29-14-mobile-web-checklist.html
		// Add basic support
		document.addEventListener('gesturestart', e => e.preventDefault()); // Prevent zooming (https://stackoverflow.com/a/39711930/2016800)
		document.addEventListener('touchstart', () => this.setUsingTouch(true), true); // Enable `:active` in CSS (https://css-tricks.com/snippets/css/remove-gray-highlight-when-tapping-links-in-mobile-safari/)

		// Bind touch events to input
		for (let element of document.querySelectorAll('input[type=text]')) {
			element.addEventListener(
				'touchstart',
				ev => {
					// Prevent default actions
					ev.preventDefault();
					ev.stopPropagation();

					// Get input
					element.value = prompt(element.dataset.promptTitle, element.value);
				},
				true
			);
		}

		// Add joysticks
		this.touchTriggerThreshold = 50;
		this.touchControlRadius = 60;
		this.usingTouch = false;
		this.controllingTouch = {
			id: -1,
			startX: 0,
			startY: 0,
			currentX: 0,
			currentY: 0
		};
		this.attackingTouch = {
			id: -1,
			startX: 0,
			startY: 0,
			currentX: 0,
			currentY: 0
		};
		this.canvas.addEventListener('touchstart', e => this.canvasTouchStart(e), false);
		this.canvas.addEventListener('touchmove', e => this.canvasTouchMove(e), false);
		this.canvas.addEventListener('touchend', e => this.canvasTouchEnd(e), false);
		this.canvas.addEventListener('touchcancel', e => this.canvasTouchEnd(e), false);
		this.canvas.addEventListener('touchleave', e => this.canvasTouchEnd(e), false);
	}

	initRecognition() {
		if ('webkitSpeechRecognition' in window) {
			this.recognition = new webkitSpeechRecognition();
			this.recognition.continuous = true;
			this.recognition.interimResults = false;
			this.recognition.lang = 'en-US';
			this.recognition.onresult = ev => {
				const transcript = ev.results[0][0].transcript;
				this.sendMessage(transcript);
				this.vue.speechRecording = false;
			};
			this.recognition.onend = () => {
				this.vue.speechRecording = false;
			};
			this.recognition.onerror = ev => {
				console.warn('Speech recognition error:', ev);
				this.vue.speechRecording = false;
				this.recognition.stop();
			};
		}
	}

	sendPing(pingValidation) {
		this.send(config.clientMessages.PING, pingValidation);
	}

	sendCreateAlliance(name) {
		name = utils.cleanString(name.toUpperCase());
		this.send(config.clientMessages.CREATE_ALLIANCE, name);
	}

	sendLeaveAlliance() {
		this.send(config.clientMessages.LEAVE_ALLIANCE, null);
	}

	sendJoinAlliance(id) {
		this.send(config.clientMessages.JOIN_ALLIANCE, id);
	}

	sendKickMember(id) {
		this.send(config.clientMessages.KICK_MEMBER, id);
	}

	sendResolveJoinRequest(accept) {
		this.send(config.clientMessages.RESOLVE_JOIN_REQUEST, accept);
	}

	sendStructureAction(action, data) {
		this.send(config.clientMessages.STRUCTURE_ACTION, [action, data]);
	}

	initInput() {
		// Input state
		this.serverInputMoveDir = 0;
		this.serverInputMoveSpeed = 0;
		this.serverInputRelativeMoveDir = false;
		this.serverInputTargetRot = 0;
		this.serverInputFiring = false;
		this.serverInputSprinting = false;

		// Prevent right click
		document.addEventListener('contextmenu', e => e.preventDefault());

		// Update mouse position and state
		this.mouseX = 0;
		this.mouseY = 0;
		this.leftClick = false;
		this.middleClick = false;
		this.rightClick = false;
		document.addEventListener('mousemove', e => {
			this.mouseX = e.clientX;
			this.mouseY = e.clientY;
		});
		this.canvas.addEventListener('mousedown', e => {
			if (e.button === 0) {
				this.leftClick = true;
			} else if (e.button === 1) {
				this.middleClick = true;
			} else if (e.button === 2) {
				this.rightClick = true;
			}
		});
		document.addEventListener('mouseup', e => {
			// Even is on document so if mouse is moved out of element and released, it still gets the event
			if (e.button === 0) {
				this.leftClick = false;
			} else if (e.button === 1) {
				this.middleClick = false;
			} else if (e.button === 2) {
				this.rightClick = false;
			}
		});

		// Scroll weapons
		document.addEventListener('mousewheel', e => this.switchWeaponBy(Math.sign(e.wheelDelta)));
		InputHandler.subscribe(['q'], () => !this.inputFocused && this.switchWeaponBy(-1));
		InputHandler.subscribe(['e'], () => !this.inputFocused && this.switchWeaponBy(1));

		// Toggle debug layer
		if (!config.isProd) {
			InputHandler.subscribe(['`'], () => {
				if (this.inputFocused) return;
				config.debugLayer = !config.debugLayer;
			});
		}

		// Enter chat box
		InputHandler.subscribe(['t'], e => {
			if (this.inputFocused) return;
			this.toggleChatBox(true);
			e.preventDefault(); // Don't type in chat box
		});
		InputHandler.subscribe(['/'], e => {
			if (this.inputFocused) return;
			this.toggleChatBox(true, '/');
			e.preventDefault(); // Don't type in chat box
		});
		InputHandler.subscribe(['escape'], e => {
			this.toggleChatBox(false);
		});

		// Join game
		InputHandler.subscribe(['enter'], e => {
			if (this.inputFocused) return;
			if (this.inGame) {
				this.toggleChatBox(true);
				e.preventDefault(); // Don't type in chat box
			} else {
				this.sendJoin();
			}
		});

		// Toggle alliance
		InputHandler.subscribe(['r'], () => {
			if (this.inputFocused) return;
			if (!this.inGame) return;
			this.toggleAlliances(!this.showingAlliances);
		});

		// Toggle help
		InputHandler.subscribe(['h'], () => {
			if (this.inputFocused) return;
			if (!this.inGame) return;
			this.toggleHelp(!this.showingHelp);
		});

		// Toggle voice recognition
		InputHandler.subscribe(
			['v'],
			() => {
				if (this.inputFocused) return;
				if (!this.recognition) return;
				if (InputHandler.key('v')) {
					this.vue.speechRecording = true;
					this.recognition.start();
				} else {
					this.vue.speechRecording = false;
					this.recognition.stop();
				}
			},
			InputHandler.SubscribeType.BOTH
		);

		// Weapon actions
		for (let i = 0; i < GameClient.weaponKeys.length; i++) {
			InputHandler.subscribe([GameClient.weaponKeys[i]], () => {
				if (this.inputFocused || this.modalShowing || !this.inGame) return;
				this.sendSwitchWeapon(i);
			});
		}
	}

	initEffects() {
		// Render effects
		this.explosionManager = new ExplosionManager(this);
		this.textPopupManager = new TextPopupManager(this);
		this.starField = new StarField(this);

		// Play ambient noise
		this.maxAmbientVolume = 0.5;
		this.ambientSoundId = assets.ambientSoundId;

		// Play drums
		this.maxDrumsVolume = 1.0;
		this.drumsProgress = 0;
		this.drumSoundId = assets.drumSoundId;
		this.lastNearBulletTime = 0; // Time that the last near bullet was detected
	}

	resize() {
		// Re-evaluate the pixel density
		this.pixelDensity = settings.nativeResolution ? window.devicePixelRatio || 1 : 1;

		// Resize the canvas
		this.canvas.width = this.screenWidth * this.pixelDensity;
		this.canvas.height = this.screenHeight * this.pixelDensity;
		this.canvas.style.width = `${this.screenWidth}px`;
		this.canvas.style.height = `${this.screenHeight}px`;
	}

	send(type, data) {
		// Serialize the message
		const msgRaw = msgpack.encode([type, data]);

		// If WS is open, send it; otherwise, terminate the socket so the close event is called
		// See: https://www.npmjs.com/package/ws#how-to-detect-and-close-broken-connections
		if (this.ws && this.ws.readyState === WebSocket.OPEN) {
			this.ws.send(msgRaw);
		} else {
			console.warn('Sending on closed socket.');
		}
	}

	sendInit(challengeResponse) {
		this.send(config.clientMessages.INIT, [challengeResponse]);
	}

	sendJoin() {
		// // Get and save username
		// let usernameField = document.getElementById('usernameField');
		// let username = utils.cleanString(usernameField.value, true);
		// if (username.length === 0) {
		// 	username = utils.generateUsername();
		// 	usernameField.value = username;
		// }
		// localStorage.setItem('username', username);

		// Join game
		this.send(config.clientMessages.JOIN, [
			// username,
			'',
			this.vue.selectedShip,
			this.vue.selectedFill,
			[...this.rewards.values()]
		]);
	}

	sendInput(...inputData) {
		this.send(config.clientMessages.INPUT, inputData);
	}

	sendSwitchWeapon(index) {
		this.send(config.clientMessages.SWITCH_WEAPON, index);
	}

	switchWeaponBy(dir) {
		let player = this.currentPlayer;
		if (!player) return;

		dir = Math.sign(dir);
		let currentIndex = this.ownedWeapons.findIndex(w => w[0] === player.weaponIndex);
		let selectedIndex = utils.clamp(currentIndex + dir, 0, this.ownedWeapons.length - 1);
		this.sendSwitchWeapon(selectedIndex);
	}

	sendPurchaseStructure(index) {
		this.send(config.clientMessages.PURCHASE_STRUCTURE, index);
	}

	sendMessage(text) {
		this.send(config.clientMessages.MESSAGE, text);
	}

	sendChooseUpgrade(index) {
		this.send(config.clientMessages.CHOOSE_UPGRADE, index);
	}

	update(dt) {
		// Update input
		this.updateInput();

		super.update(dt);

		// Find the last near non-friendly bullet time
		if (this.currentPlayer) {
			this.queryCircle(this.currentPlayer.x, this.currentPlayer.y, 400, entity => {
				if (entity.isBullet && !this.currentPlayer.isFriendlyClientId(entity.shooterClientId)) {
					this.lastNearBulletTime = Date.now();
				}
			});
		}

		// Update UI
		this.vue.isLanded = this.currentPlayer && this.currentPlayer.isLanded;
		this.vue.onPlanet = this.currentPlayer && this.currentPlayer.overlappingPlanet != null;

		// Update kick timer and kick player automatically
		if (this.inGame) {
			this.kickTimer = 0;
		} else {
			this.kickTimer += dt;
		}
		this.vue.kickTimer = this.kickTimer;

		// Update Vue selected
		this.vue.selectedWeaponIndex = this.currentPlayer ? this.currentPlayer.weaponIndex : -1;
		this.vue.ownedWeaponIndex = this.currentPlayer
			? this.ownedWeapons.findIndex(w => w[0] === this.currentPlayer.weaponIndex)
			: -1;
	}

	updateInput() {
		// Skip if in chatbox or not in game
		if (!this.inGame || this.inputFocused) return;

		// Set initial input
		let moveDir = 0;
		let moveSpeed = 0;
		let relativeMoveDir = settings.directionalMovement;
		let targetRot = this.usingTouch
			? this.serverInputTargetRot || 0
			: Math.atan2(this.mouseY - window.innerHeight / 2, this.mouseX - window.innerWidth / 2); // Use old rot if using touch
		let firing = false;
		let sprinting = false;

		// Get new input
		let dx = 0;
		let dy = 0;
		if (InputHandler.key('w', 'up')) dy += 1;
		if (InputHandler.key('s', 'down')) dy -= 1;
		if (InputHandler.key('a', 'left')) dx -= 1;
		if (InputHandler.key('d', 'right')) dx += 1;
		if (InputHandler.key('space')) firing = true;
		if (InputHandler.key('shift')) sprinting = true;
		if (this.leftClick) firing = true;
		if (this.rightClick || this.middleClick) {
			// Middle click reverses
			dy = (this.rightClick ? 1 : 0) + (this.middleClick ? -1 : 0);
			dx = 0;
			relativeMoveDir = true;
		}
		// if (this.rightClick || this.middleClick) {  // Middle click sprints
		//     dy = 1;
		//     dx = 0;
		//     relativeMoveDir = true;
		//     sprinting = sprinting || this.middleClick;
		// }

		// Touch controls
		if (this.controllingTouch.id !== -1) {
			let dist = utils.dist(
				this.controllingTouch.startX,
				this.controllingTouch.startY,
				this.controllingTouch.currentX,
				this.controllingTouch.currentY
			);
			moveSpeed = dist > 10 ? 1 : 0;
			moveDir = Math.atan2(
				-(this.controllingTouch.currentY - this.controllingTouch.startY),
				this.controllingTouch.currentX - this.controllingTouch.startX
			);
			sprinting = dist > this.touchTriggerThreshold;
		}
		if (this.attackingTouch.id !== -1) {
			let dist = utils.dist(
				this.attackingTouch.startX,
				this.attackingTouch.startY,
				this.attackingTouch.currentX,
				this.attackingTouch.currentY
			);
			targetRot = Math.atan2(
				this.attackingTouch.currentY - this.attackingTouch.startY,
				this.attackingTouch.currentX - this.attackingTouch.startX
			);
			firing = dist > this.touchTriggerThreshold;
		}

		// Get move dir and speed
		if (dx !== 0 || dy !== 0) {
			moveDir = Math.atan2(dy, dx);
			moveSpeed = utils.dist(dx, dy);
		}

		// Update input on the player
		if (this.currentPlayer) {
			this.currentPlayer.moveDir = moveDir;
			this.currentPlayer.moveSpeed = moveSpeed;
			this.currentPlayer.relativeMoveDir = relativeMoveDir;
			this.currentPlayer.targetRot = targetRot;
			this.currentPlayer.firing = firing;
			this.currentPlayer.sprinting = sprinting;
		}

		// Send input if needed
		if (
			moveDir !== this.serverInputMoveDir ||
			moveSpeed !== this.serverInputMoveSpeed ||
			relativeMoveDir !== this.serverInputRelativeMoveDir ||
			targetRot !== this.serverInputTargetRot ||
			firing !== this.serverInputFiring ||
			sprinting !== this.serverInputSprinting
		) {
			// Send over socket
			this.sendInput(moveDir, moveSpeed, relativeMoveDir, targetRot, firing, sprinting);

			// Update state
			this.serverInputMoveDir = moveDir;
			this.serverInputMoveSpeed = moveSpeed;
			this.serverInputRelativeMoveDir = relativeMoveDir;
			this.serverInputTargetRot = targetRot;
			this.serverInputFiring = firing;
			this.serverInputSprinting = sprinting;
		}
	}

	render() {
		const ctx = this.context;

		// // Update the world with a static DT
		// this.update(GameClient.dt);

		// Calculate rendering dt
		let now = Date.now();
		let lastUpdate = this.lastRenderTime || now - 16; // Default dt is 16 ms
		let dt = (now - lastUpdate) / 1000;
		this.lastRenderTime = now;

		// Update the world with a dynamic DT
		this.update(dt);

		// Get FPS
		this.framesPerSecond = 1 / dt;
		this.framesPerSecondHistory.splice(0, 0, this.framesPerSecond);
		this.framesPerSecondHistory.length = this.framesPerSecondHistory.length - 1;

		// Reset pointer
		this.canvas.classList.toggle('showPointer', false);

		// Update the viewport position
		let spectatingPlayer = this.spectatingPlayer;
		if (!!spectatingPlayer) {
			if (this.currentPlayer) {
				// Don't lerp camera when playing
				this.viewportX = spectatingPlayer.x;
				this.viewportY = -spectatingPlayer.y; // Flip Y coords
			} else {
				// Lerp screen coordinates to give a more fluid experience when spectating
				let screenLerpSpeed = 10 * dt;
				this.viewportX = utils.lerp(this.viewportX, spectatingPlayer.x, screenLerpSpeed);
				this.viewportY = utils.lerp(this.viewportY, -spectatingPlayer.y, screenLerpSpeed); // Flip Y coords
			}
		}

		// Update controls
		if (this.inGame) {
			this.showControlsTimer = Math.max(this.showControlsTimer - dt, 0);
			if (this.showControlsTimer <= 0) {
				document.getElementById('gameControlTip').style.display = 'none';
			}
		}

		// Update sound listener position
		assets.listenerPos(this.viewportX, this.viewportY);

		// Update drums
		let timeSinceNearBullet = (Date.now() - this.lastNearBulletTime) / 1000;
		let drumsProgress = 1 - utils.clamp01(timeSinceNearBullet / 6, 0);
		if (drumsProgress > this.drumsProgress) {
			// Fade in the drums
			this.drumsProgress = utils.lerp(this.drumsProgress, drumsProgress, 0.3 * dt);
		} else {
			// Let the drums fade out over time
			this.drumsProgress = drumsProgress;
		}
		assets.soundVol(this.drumSoundId, this.drumsProgress * this.maxDrumsVolume);
		assets.soundVol(this.ambientSoundId, (1 - this.drumsProgress) * this.maxAmbientVolume);

		// Set default style
		ctx.strokeStyle = 'white';
		ctx.lineWidth = 3;
		ctx.lineCap = 'butt';
		ctx.lineJoin = 'miter';
		ctx.fillStyle = 'white';
		ctx.font = utils.generateFont(30);
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';

		// Fill a black background
		ctx.save();
		ctx.fillStyle = '#110b2e';
		if (this.isLSD) ctx.globalAlpha = 0.01;
		ctx.fillRect(0, 0, this.width, this.height);
		ctx.restore();

		// Draw clouds; generated at http://kitfox.com/projects/perlinNoiseMaker/; 64 seed size
		if (settings.spaceDust && !this.isLSD) {
			let scale = this.worldScale * 12;
			let translateMultiplier = 1 / scale;
			ctx.save();
			ctx.fillStyle = ctx.createPattern(
				assets.getImage(assets.effectUrl('space-texture'), 256, 256),
				'repeat'
			);
			ctx.globalCompositeOperation = 'screen';
			ctx.globalAlpha = 0.1;
			ctx.scale(scale, scale);
			ctx.translate(-this.viewportX * translateMultiplier, -this.viewportY * translateMultiplier);
			ctx.fillRect(
				this.viewportX * translateMultiplier,
				this.viewportY * translateMultiplier,
				this.width / scale,
				this.height / scale
			);
			ctx.restore();
		}

		// Draw the world
		this.renderingWorld = true;
		ctx.save();
		this.renderWorld(ctx, dt);
		ctx.restore();
		this.renderingWorld = false;

		// Draw the UI
		this.renderingUI = true;
		ctx.save();
		this.renderUI(ctx, dt);
		ctx.restore();
		this.renderingUI = false;

		// Call next render
		requestAnimationFrame(() => this.render());
	}

	/**
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {number} dt
	 */
	renderWorld(ctx, dt) {
		// Calculate screen shake
		let shakeMagnitude = this.explosionManager.getScreenShake(this.viewportX, this.viewportY);
		if (this.isReee || this.isOopsie) shakeMagnitude = 2000; // Easter egg
		shakeMagnitude *= 0.05; // Pixels/magnitude
		shakeMagnitude = Math.min(
			shakeMagnitude,
			settings.rss ? config.maxScreenShakeReduced : config.maxScreenShake
		);
		let shakenViewportX = this.viewportX + (Math.random() - 0.5) * shakeMagnitude;
		let shakenViewportY = this.viewportY + (Math.random() - 0.5) * shakeMagnitude;
		// Translate drawing to center of viewport and scale to have a static height
		let s = this.worldScale;
		ctx.translate(this.width / 2, this.height / 2);
		ctx.scale(s, s);
		ctx.translate(-shakenViewportX, -shakenViewportY);
		// Draw star field
		if (settings.stars) {
			this.starField.render(ctx, dt, this.viewWidth, this.viewHeight, this.viewportX, this.viewportY);
		}
		// Draw the entities
		let layers = Object.keys(this.renderLayers)
			.map(l => parseFloat(l))
			.sort((a, b) => a - b);
		for (let layerDepth of layers) {
			let layer = this.renderLayers[layerDepth];
			for (let entity of layer) {
				// Move to entity position and render
				ctx.save();
				ctx.translate(entity.x, -entity.y);
				ctx.rotate(entity.rot);
				entity.render(ctx, dt, layerDepth);
				ctx.restore();
			}
		}
		// Draw border; we use just a portion of an arc, since the border is huge, to save render calls
		let arcSize = Math.PI * 0.08;
		let viewAngle = Math.atan2(this.viewportY, this.viewportX);
		ctx.save();
		ctx.lineWidth = 8;
		ctx.beginPath();
		ctx.arc(0, 0, config.mapSize / 2, viewAngle - arcSize / 2, viewAngle + arcSize / 2);
		ctx.stroke();
		ctx.restore();
		// Draw explosions
		ctx.save();
		this.explosionManager.render(ctx, dt);
		ctx.restore();
		// Draw text
		ctx.save();
		this.textPopupManager.render(ctx, dt);
		ctx.restore();
		// Draw chat messages
		ctx.save();
		let fontSize = 40;
		ctx.font = utils.generateFont(fontSize);
		for (let entityId in this.chatMessages) {
			let entity = this.entityForId(entityId);
			let [text, clientId, username, msgX, msgY, sendTime] = this.chatMessages[entityId];
			// Check if message should be removed
			if ((Date.now() - sendTime) / 1000 > this.chatShowTime) {
				delete this.chatMessages[entityId];
				continue;
			}
			// Determine if the entity is visible
			let entityVisible = false;
			if (entity) {
				let x = entity.x;
				let y = -entity.y;
				let viewWidth = this.width / this.worldScale;
				let viewHeight = this.height / this.worldScale;
				entityVisible =
					x > this.viewportX - viewWidth / 2 &&
					x < this.viewportX + viewWidth / 2 &&
					y > this.viewportY - viewHeight / 2 &&
					y < this.viewportY + viewHeight / 2;
			}
			// Add username to message if entity not visible
			if (!entityVisible) {
				text = `${username}: ${text}`;
			}
			// Text properties
			let paddingX = 30;
			let paddingY = 10;
			let messageWidth = ctx.measureText(text).width;
			let messageHeight = fontSize;
			// Render the message
			if (entityVisible) {
				// Render in place
				let x = entity.x;
				let y = -entity.y + entity.radius + fontSize;
				// Draw background
				ctx.save();
				ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
				ctx.fillRect(
					x - (messageWidth + paddingX) / 2,
					y - (messageHeight + paddingY) / 2,
					messageWidth + paddingX,
					messageHeight + paddingY
				);
				ctx.restore();
				// Draw text
				ctx.save();
				ctx.fillStyle = 'white';
				if (text.indexOf('\n') !== -1) {
					utils.fillMultilineText(ctx, text, x, y, false);
				} else {
					ctx.fillText(text, x, y);
				}
				ctx.restore();
			} else if (this.allianceData && this.allianceData[3].findIndex(c => c[0] === clientId) !== -1) {
				// Render from afar if in alliance
				let messageAngle = Math.atan2(msgY - this.viewportY, msgX - this.viewportX);
				let messageDistance = (config.viewportHeight * this.viewDistanceMultiplier) / 2 - 200;
				let x = this.viewportX + Math.cos(messageAngle) * messageDistance;
				let y = this.viewportY + Math.sin(messageAngle) * messageDistance;
				// Draw triangle
				let baseSize = 36;
				let height = 27;
				ctx.save();
				ctx.translate(x, y);
				ctx.rotate(messageAngle);
				ctx.beginPath();
				ctx.moveTo(-height / 2, -baseSize / 2);
				ctx.lineTo(-height / 2, baseSize / 2);
				ctx.lineTo(height / 2, 0);
				ctx.fill();
				ctx.restore();
				// Offset text
				y += fontSize * 2;
				// Draw background
				ctx.save();
				ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
				ctx.fillRect(
					x - (messageWidth + paddingX) / 2,
					y - (messageHeight + paddingY) / 2,
					messageWidth + paddingX,
					messageHeight + paddingY
				);
				ctx.restore();
				// Draw text
				ctx.save();
				ctx.fillStyle = 'white';
				ctx.fillText(text, x, y);
				ctx.restore();
			}
		}
		ctx.restore();
		// Draw the debug layer
		if (config.debugLayer) {
			// Set style
			ctx.strokeStyle = 'red';
			ctx.fillStyle = 'red';
			ctx.lineWidth = 1;
			// Draw entities
			for (let entityId in this.entities) {
				let entity = this.entities[entityId];
				// Move to entity position and render
				ctx.save();
				ctx.translate(entity.x, -entity.y);
				ctx.rotate(entity.rot);
				entity.debugRender(ctx);
				ctx.restore();
			}
			// Draw view box
			ctx.save();
			ctx.translate(this.viewportX, this.viewportY);
			ctx.strokeRect(
				(-config.viewDistanceX / 2) * this.viewDistanceMultiplier,
				(-config.viewDistanceY / 2) * this.viewDistanceMultiplier,
				config.viewDistanceX * this.viewDistanceMultiplier,
				config.viewDistanceY * this.viewDistanceMultiplier
			);
			ctx.restore();
		}
		// Update control panel
		if (this.updateIndex % 10 === 0) {
			this.updateControlPanel();
		}
	}

	/**
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {number} dt
	 */
	renderUI(ctx, dt) {
		// Scale for pixel density
		ctx.scale(this.pixelDensity, this.pixelDensity);

		// Get vignette stats
		let vignetteColor = [0, 0, 0, 0];
		let vignetteDistance = 0;
		if (this.currentPlayer) {
			let health = this.currentPlayer.health;

			// Set the base values
			vignetteColor = vignetteColor.map((v, i) =>
				utils.lerp(v, config.lowHealthVignette[i], 1 - health)
			);
			vignetteDistance = utils.lerp(vignetteDistance, config.lowHealthVignetteDistance, 1 - health);

			// Apply pulsing effect
			// (1 + utils.easingFunctions.easeOutQuad(Math.sin(Date.now() / 1000 * 10) / 2 + 0.5) * 0.1);
			let bps = utils.lerp(60, 300, 1 - health) / 60; // Convert heart rate beats per minute to beats per second
			this.heartBeatTimer += bps * dt; // Increase the timer by the speed
			let pulseProgress = Math.sin(this.heartBeatTimer * Math.PI * 2) / 2 + 0.5;
			pulseProgress = utils.easingFunctions.easeInQuint(pulseProgress); // GIve the pulse a "beat" to it
			vignetteDistance *= 1 + pulseProgress * 0.05 * (1 - health); // Increase distance
			vignetteColor[3] += pulseProgress * 0.3 * (1 - health); // Increase alpha
			// vignetteColor[0] *= 1 - pulseProgress * 0.05 * (1 - health);  // Make the red darker
		}
		this.killVignetteProgress = Math.max(
			this.killVignetteProgress - (1 / this.killVignetteProgressLength) * dt,
			0
		);
		vignetteColor = vignetteColor.map((v, i) =>
			utils.lerp(v, config.killVignette[i], this.killVignetteProgress)
		);
		vignetteDistance = utils.lerp(
			vignetteDistance,
			config.killVignetteDistance,
			this.killVignetteProgress
		);

		// Round the vignette colors
		for (let i = 0; i < 3; i++) {
			vignetteColor[i] = Math.floor(vignetteColor[i]);
		}

		// Create vignette gradient
		vignetteDistance = utils.clamp01(vignetteDistance);
		vignetteColor = vignetteColor.map(c => utils.clamp(c, 0, 255)); // This will fix any NaN values
		let diagonalRadius = utils.dist(
			this.screenWidth / 2,
			this.screenHeight / 2,
			this.screenWidth,
			this.screenHeight
		);
		let vignetteGradient = ctx.createRadialGradient(
			this.screenWidth / 2,
			this.screenHeight / 2,
			0,
			this.screenWidth / 2,
			this.screenHeight / 2,
			diagonalRadius
		);
		vignetteGradient.addColorStop(1.0, `rgba(${vignetteColor.join(',')})`);
		vignetteColor[3] = 0; // Make the color transparent
		vignetteGradient.addColorStop(1.0 - vignetteDistance, `rgba(${vignetteColor.join(',')})`);

		// Render vignette
		ctx.save();
		ctx.fillStyle = vignetteGradient;
		ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);
		ctx.restore();

		// Render red overlay
		if (this.isReee) {
			ctx.save();
			ctx.fillStyle = 'red';
			ctx.globalAlpha = 0.7;
			ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);
			ctx.restore();
		} else if (this.isOopsie) {
			ctx.save();

			ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
			ctx.globalAlpha = 0.5;
			ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);

			ctx.fillStyle = 'white';
			ctx.globalAlpha = 1.0;
			ctx.font = utils.generateFont(50, 'bold');
			ctx.fillText('The server has crashed.', this.screenWidth / 2, this.screenHeight / 2);

			ctx.restore();
		}

		// Draw HUD
		if (!this.modalShowing && this.inGame) {
			// Draw the stats
			this.renderStats(ctx);

			// Draw the minimap
			this.renderMinimap(ctx);
		}

		// Draw notification
		if (this.lastNotificationDate) {
			let notificationLife = 3.5;
			let fadeSpeed = 0.2;
			let timeSince = (Date.now() - this.lastNotificationDate) / 1000;

			// Intro progress
			let introProgress = utils.clamp01(timeSince / fadeSpeed);
			let outroProgress = utils.clamp01((notificationLife - timeSince) / fadeSpeed);
			introProgress = utils.easingFunctions.easeOutCubic(introProgress);
			outroProgress = utils.easingFunctions.easeOutCubic(outroProgress);

			// Stop if needed
			if (timeSince > notificationLife) {
				this.lastNotificationDate = null;
			}

			let scale = 1 + 2 * (1 - introProgress) - 0.4 * (1 - outroProgress);
			let fontSize = 40;

			ctx.save();

			ctx.globalAlpha = Math.min(introProgress, outroProgress);
			ctx.translate(this.screenWidth / 2, this.screenHeight * 0.25);
			ctx.scale(scale, scale);
			ctx.font = utils.generateFont(fontSize, 'bold');

			// Render text
			ctx.fillStyle = 'white';
			ctx.fillText(this.lastNotificationText, 0, 0);

			ctx.restore();
		}

		// Draw the aim dir
		if (this.attackingTouch.id !== -1 && this.currentPlayer) {
			let lineWidth = 4;
			let linePadding = 25;
			let lineLength = (this.screenWidth / 2) * 0.9;

			// Create gradient
			let lineGradient = ctx.createLinearGradient(linePadding, 0, linePadding + lineLength, 0);
			lineGradient.addColorStop(0, 'rgba(255, 255, 255, 0.0)');
			lineGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)');
			lineGradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');

			// Draw line
			ctx.save();
			ctx.translate(this.screenWidth / 2, this.screenHeight / 2);
			ctx.rotate(this.currentPlayer.rot);
			ctx.fillStyle = lineGradient;
			ctx.fillRect(linePadding, -lineWidth / 2, lineLength, lineWidth);
			ctx.restore();
		}

		// Draw mouse
		if (!this.usingTouch && this.inGame && !this.modalShowing) {
			let baseSize = 20;
			let height = 15;

			ctx.save();

			// Move to mouse
			ctx.translate(this.mouseX, this.mouseY);
			ctx.rotate(Math.atan2(this.mouseY - this.screenHeight / 2, this.mouseX - this.screenWidth / 2));

			// Draw triangle
			ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
			ctx.lineWidth = 10;
			ctx.beginPath();
			ctx.moveTo(-height / 2, -baseSize / 2);
			ctx.lineTo(-height / 2, baseSize / 2);
			ctx.lineTo(height / 2, 0);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();

			ctx.restore();
		}

		// Draw touch controls
		if (this.controllingTouch.id !== -1)
			this.renderControl(
				ctx,
				this.controllingTouch.startX,
				this.controllingTouch.startY,
				this.controllingTouch.currentX,
				this.controllingTouch.currentY
			);
		if (this.attackingTouch.id !== -1)
			this.renderControl(
				ctx,
				this.attackingTouch.startX,
				this.attackingTouch.startY,
				this.attackingTouch.currentX,
				this.attackingTouch.currentY
			);

		// Draw debug layer
		if (config.debugLayer) {
			// Draw stats
			ctx.save();
			ctx.textBaseline = 'top';
			ctx.textAlign = 'left';
			utils.fillMultilineText(
				ctx,
				`Ping: ${Math.round(this.ping * 1000)}ms\nFPS: ${Math.round(this.averageFPS)}`,
				20,
				this.screenHeight / 2
			);
			ctx.restore();
		}
	}

	/**
	 * @param {CanvasRenderingContext2D} ctx
	 */
	renderStats(ctx) {
		ctx.save();

		let player = this.currentPlayer;
		if (!player) return;

		let marginX = this.smallUI ? safeAreaInsets.right : 20;
		let marginY = this.smallUI ? safeAreaInsets.bottom : 20;
		let padding = this.smallUI ? 5 : 10;
		let textPaddingX = marginX + padding + 30;
		let textPaddingY = marginY + padding + 10;
		let statMaxHeight = this.smallUI ? 85 : 115;

		ctx.textAlign = 'right';
		let fontSize = this.smallUI ? 20 : 30;
		ctx.font = utils.generateFont(this.smallUI ? 20 : 30);

		// Render background
		ctx.save();
		let bgWidth = this.smallUI ? 135 : 200;
		let bgHeight = statMaxHeight + padding * 2;
		ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
		ctx.fillRect(
			this.screenWidth - bgWidth - marginX,
			this.screenHeight - bgHeight - marginY,
			bgWidth,
			bgHeight
		);
		ctx.restore();

		// Render resources
		for (let i = 0; i < this.resources.length; i++) {
			let flippedI = this.resources.length - i - 1; // Render in reverse order
			let count = this.resources[flippedI];
			let resourceType = resources.resources[flippedI];
			let text = Math.floor(count).toString();
			let textWidth = ctx.measureText(text).width;
			let iconSize = this.smallUI ? 15 : 20;
			let xOffset = this.screenWidth - textPaddingX;
			let yOffset = this.screenHeight - textPaddingY - (this.smallUI ? 25 : 35) - i * fontSize;

			// Draw icons
			utils.drawImage(
				ctx,
				assets.iconUrl(resourceType.icon),
				xOffset - textWidth - iconSize,
				yOffset,
				iconSize,
				iconSize
			);

			// Draw text
			ctx.fillText(text, xOffset, yOffset);
		}

		// Render score
		ctx.save();
		ctx.font = utils.generateFont(fontSize + 5, 'bold');
		ctx.fillText(
			Math.floor(this.score),
			this.screenWidth - textPaddingX,
			this.screenHeight - textPaddingY
		);
		ctx.restore();

		// Render fire timer
		let fireProgress = 1 - player.fireTimer / player.weapon.fireInterval;
		let fireWidth = 5;
		let fireHeight = statMaxHeight * fireProgress;
		ctx.save();
		ctx.globalAlpha = 0.5;
		ctx.fillRect(
			this.screenWidth - marginX - padding - fireWidth,
			this.screenHeight - marginY - padding - fireHeight,
			fireWidth,
			fireHeight
		);
		ctx.restore();

		// Render sprint
		let sprintProgress = player.sprint / player.maxSprint;
		let sprintWidth = 10;
		let sprintHeight = statMaxHeight * sprintProgress;
		ctx.fillRect(
			this.screenWidth - marginX - padding - sprintWidth - fireWidth,
			this.screenHeight - marginY - padding - sprintHeight,
			sprintWidth,
			sprintHeight
		);

		ctx.restore();
	}

	/**
	 * @param {CanvasRenderingContext2D} ctx
	 */
	renderMinimap(ctx) {
		if (!this.minimapData) return;

		let marginX = this.smallUI ? safeAreaInsets.left + 10 : 20;
		let marginY = this.smallUI ? safeAreaInsets.top + 10 : 20;
		let size = this.smallUI ? 60 : 120;

		// Draw backdrop
		ctx.save();
		ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
		ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
		ctx.lineWidth = this.smallUI ? 1 : 3;
		ctx.beginPath();
		ctx.arc(marginX + size / 2, marginY + size / 2, size / 2, 0, Math.PI * 2);
		ctx.fill();
		ctx.stroke();
		ctx.restore();

		// Draw structures
		ctx.save();
		ctx.translate(marginX + size / 2, marginY + size / 2); // Transform to center of map
		ctx.fillStyle = 'white';

		// Draw all of the minimap structures
		let unitMultiplier = (1 / config.mapSize) * size;
		for (let item of this.minimapData) {
			let [kind, id, x, y, radius, extraData] = item;
			if (id === this.spectateId) continue; // Skip the current player

			// Adjust units
			x = x * unitMultiplier;
			y = -y * unitMultiplier;
			radius = radius * unitMultiplier;
			radius = Math.max(radius, this.smallUI ? 1 : 2);

			// Set fill style
			let fillStyle = 'white';
			if (kind === Player.KIND) {
				let [clientId, allianceId] = extraData;
				fillStyle = allianceId ? utils.getAllianceColor(allianceId) : 'white';
			} else if (kind === Planet.KIND) {
				let [dominatingItem] = extraData;

				// Set default color
				fillStyle = 'rgba(255, 255, 255, 0.5)';
				if (dominatingItem) {
					let itemId = parseInt(dominatingItem.slice(2));
					if (dominatingItem.startsWith('a:')) {
						fillStyle = utils.getAllianceColor(itemId); // Alliance dominating
					} else if (dominatingItem.startsWith('p:')) {
						fillStyle = 'white'; // Player dominating
					}
				}
			}

			// Draw circle
			ctx.save();
			ctx.fillStyle = fillStyle;
			ctx.beginPath();
			ctx.arc(x, y, radius, 0, Math.PI * 2);
			ctx.fill();
			ctx.restore();
		}

		// Draw the death position
		if (this.deathPosX != null && this.deathPosY != null) {
			let x = this.deathPosX * unitMultiplier;
			let y = -this.deathPosY * unitMultiplier;

			// Draw an X
			let xSize = 3;
			ctx.save();
			ctx.beginPath();
			ctx.strokeStyle = 'hsl(0, 100%, 60%)';
			ctx.globalAlpha = 0.5;
			ctx.moveTo(x - xSize, y - xSize);
			ctx.lineTo(x + xSize, y + xSize);
			ctx.moveTo(x + xSize, y - xSize);
			ctx.lineTo(x - xSize, y + xSize);
			ctx.stroke();
			ctx.restore();
		}

		// Draw the current player
		if (this.currentPlayer) {
			let x = this.currentPlayer.x * unitMultiplier;
			let y = -this.currentPlayer.y * unitMultiplier;

			// Draw arrow
			let angleSpread = Math.PI * 0.25;
			let iconRadius = this.smallUI ? 3 : 6;
			ctx.save();
			ctx.fillStyle = this.allianceData ? utils.getAllianceColor(this.allianceData[0]) : 'white';
			ctx.translate(x, y);
			ctx.rotate(this.currentPlayer.rot);
			ctx.beginPath();
			ctx.moveTo(iconRadius, 0);
			ctx.lineTo(
				Math.cos(Math.PI + angleSpread) * iconRadius,
				Math.sin(Math.PI + angleSpread) * iconRadius
			);
			ctx.lineTo(-0.4 * iconRadius, 0);
			ctx.lineTo(
				Math.cos(Math.PI - angleSpread) * iconRadius,
				Math.sin(Math.PI - angleSpread) * iconRadius
			);
			ctx.fill();
			ctx.restore();
		}

		ctx.restore();
	}

	renderTextButton(
		ctx,
		text,
		x,
		y,
		width = -1,
		height = -1,
		paddingX = 10,
		paddingY = 5,
		backgroundStyle = null
	) {
		let textWidth = width === -1 ? ctx.measureText(text).width + paddingX * 2 : width;
		let textHeight = height === -1 ? parseFloat(ctx.font.split('px')[0]) + paddingY * 2 : height;

		return this.renderButton(
			ctx,
			x,
			y,
			textWidth,
			textHeight,
			ctx => {
				ctx.fillText(text, 0, 0);
			},
			backgroundStyle
		);
	}

	renderButton(ctx, x, y, width, height, renderContent, backgroundStyle = 'white') {
		// Convert mouse to world position relative to this item
		let mouseX;
		let mouseY;
		if (this.renderingWorld) {
			mouseX = this.localToWorldX(this.mouseX) - x;
			mouseY = this.localToWorldY(this.mouseY) - y;
		} else {
			mouseX = this.mouseX - x;
			mouseY = this.mouseY - y;
		}

		// Determine state
		let hovering =
			mouseX < width / 2 && mouseX > -width / 2 && mouseY < height / 2 && mouseY > -height / 2;
		let active = hovering && this.leftClick;

		// Show the pointer
		if (hovering) {
			this.canvas.classList.toggle('showPointer', true);
		}

		ctx.save();

		// Move to button
		ctx.translate(x, y);
		if (active) {
			ctx.scale(0.95, 0.95);
		} else if (hovering) {
			ctx.scale(1.05, 1.05);
		}

		// Render the background
		ctx.globalAlpha = active ? 0.8 : 1.0;
		ctx.fillStyle = backgroundStyle;
		ctx.fillRect(-width / 2, -height / 2, width, height);

		// Render content
		if (renderContent) {
			ctx.fillStyle = 'black';
			renderContent(ctx);
		}

		ctx.restore();

		return active;
	}

	async onPreInit(data) {
		// Save client ID
		let [clientId, challengeSeed] = data;
		this.clientId = clientId;

		// Respond to challenge
		let challengeResponse = (challengeSeed * this.clientId) % 256;
		this.sendInit(challengeResponse);

		// Update state
		this.updateGameState();
	}

	onInit(data) {
		let [gameMode] = data;
		this.gameMode = this.vue.gameMode = gameMode;

		// Save initiated
		this.initiated = true;

		// Update state
		this.updateGameState();
	}

	onUpdate(data) {
		let [
			playerId,
			spectateId,
			appearedEntities,
			updatedEntities,
			disappearedEntities,
			destroyedEntities
		] = data;

		// Handle new IDs
		let oldPlayerId = playerId;
		this.playerId = playerId;
		this.spectateId = spectateId;

		// Handle appeared entities
		for (let i = 0; i < appearedEntities.length; i += 2) {
			let entityId = appearedEntities[i];
			let initData = appearedEntities[i + 1];

			// Create and deserialize the entity
			let entityKind = initData[0];
			let entityPrototype = Game.ENTITY_KINDS[entityKind];
			let entity = new entityPrototype(this);
			entity.id = entityId;
			entity.deserializeInit(initData);

			// Insert in to the game
			this.insertEntity(entity);
		}

		// Handle updated entities
		for (let i = 0; i < updatedEntities.length; i += 2) {
			let entityId = updatedEntities[i];
			let updateData = updatedEntities[i + 1];

			// Get the entity
			let entity = this.entities[entityId];
			if (entity == null) continue; // Some entities may already be destroyed by client; e.g. bullets

			// Update the entity
			entity.deserialize(updateData);
		}

		// Handle disappeared entities
		for (let entityId of disappearedEntities) {
			let entity = this.entities[entityId];
			if (entity == null) continue; // See above

			// Remove the entity
			entity.destroy(false);
		}

		// Handle destroyed entities
		for (let [entityId, destroyedData] of destroyedEntities) {
			let entity = this.entities[entityId];
			if (entity == null) continue; // See above

			// Destroy the entity
			entity.destroyedData = destroyedData;
			entity.destroy(true);
		}

		// Update the game state
		this.updateGameState();
	}

	onLeaderboard(data) {
		let newPlayers = [];

		// Save the data
		[this.leaderboardData, this.playerRank, this.playerLeaderboardItem] = data;

		// Convert the leaderboard in to client data
		let itemCount =
			this.leaderboardData.length + (this.playerRank >= this.leaderboardData.length ? 1 : 0);
		let leaderboardItems = [];
		for (let i = 0; i < itemCount; i++) {
			// Get the item and rank
			let rank;
			let item;
			if (i < this.leaderboardData.length) {
				rank = i;
				item = this.leaderboardData[i];
			} else if (this.playerLeaderboardItem) {
				rank = this.playerRank;
				item = this.playerLeaderboardItem;
			} else {
				continue;
			}
			rank++; // Make rank 1-based index

			// Parse leaderboard
			let [clientId, allianceId, username, score] = item;

			// Get the alliance data
			let allianceData =
				allianceId != null ? this.allianceList.filter(a => a[0] === allianceId)[0] : null;

			// Add to the leaderboard
			leaderboardItems.push({
				rank,
				username,
				score,
				allianceName: allianceData ? allianceData[2] : null,
				allianceColor: allianceData ? utils.getAllianceColor(allianceData[0]) : null,
				isMine: clientId === this.clientId,
			});
		}

		// Save data to Vue
		this.vue.leaderboardItems = leaderboardItems;
	}

	onMinimap(minimap) {
		// Process minimap data to unquantize values
		let mapRadius = config.mapSize / 2;
		for (let value of minimap) {
			value[2] = utils.unquantize(value[2], -mapRadius, mapRadius, config.minimapPositionBits); // X pos
			value[3] = utils.unquantize(value[3], -mapRadius, mapRadius, config.minimapPositionBits); // Y pos
			value[4] = utils.unquantize(value[4], 0, config.minimapMaxRadius, config.minimapRadiusBits); // Radius
		}

		// Save minimap data
		this.minimapData = minimap;
	}

	onWeapons(data) {
		[this.ownedWeapons] = data;

		// Process weapons
		let vueWeaponList = this.vue.weaponList;
		for (let i = 0; i < this.ownedWeapons.length; i++) {
			let [weaponIndex, ammo] = this.ownedWeapons[i];
			let weapon = weapons.weapons[weaponIndex];
			let vueItem = vueWeaponList[i];

			// Create new item if needed
			let isNewItem = false;
			if (!vueItem) {
				vueItem = {};
				isNewItem = true;
			}

			// Update item
			let maxAmmo = this.currentPlayer ? this.currentPlayer.getMaxAmmo(weaponIndex) : weapon.maxAmmo;
			vueItem.id = weapon.id;
			vueItem.icon = assets.iconUrl(weapon.icon);
			vueItem.ammoCount = maxAmmo === -1 ? '\u221E' : `${ammo}/${maxAmmo}`;
			vueItem.index = weaponIndex;

			// Set in array
			if (isNewItem) {
				this.vue.$set(vueWeaponList, i, vueItem);
			}
		}

		// Remove extra items
		vueWeaponList.length = this.ownedWeapons.length;
	}

	onStructures(data) {
		[this.ownedStructures] = data;

		// Process structures
		let vueStructureList = this.vue.structureList;
		for (let i = 0; i < this.ownedStructures.length; i++) {
			let structureIndex = this.ownedStructures[i];
			let structure = structures.structures[structureIndex];
			let vueItem = vueStructureList[i];

			// Create new item if needed
			let isNewItem = false;
			if (!vueItem) {
				vueItem = {};
				isNewItem = true;
			}

			// Update item
			vueItem.id = structure.id;
			vueItem.planetItem = structure.planetItem;
			vueItem.index = structureIndex;
			vueItem.icon = assets.structureUrl(structure.image);

			// Set in array
			if (isNewItem) {
				this.vue.$set(vueStructureList, i, vueItem);
			}
		}

		// Remove extra items
		vueStructureList.length = this.ownedStructures.length;
	}

	onTextPopup(data) {
		let [text, x, y, icon, life] = data;

		// Spawn text
		this.textPopupManager.spawnText(text, x, -y, icon, life);
	}

	onMessage(data) {
		let [entityId, clientId, username, x, y, text] = data;

		// Easter egg: spawn explosion on reee
		let lowercaseText = text.toLowerCase();
		if (lowercaseText.startsWith('ree')) {
			// Create explosion based on the number of "e"s
			let eCount = lowercaseText.match(/e/g).length;
			this.explosionManager.spawnExplosion(x, -y, eCount * 10);

			// Replace text with frogs
			text = '';
			for (let i = 0; i < eCount; i++) {
				text += '🐸';
			}
		}

		// Save message
		this.chatMessages[entityId] = [text, clientId, username, x, -y, Date.now()];
	}

	onPing(data) {
		if (this.pingStart == null) {
			// Start ping
			this.pingStart = Date.now();
			let pingValidation = (data * this.clientId) % 128; // Validate by multiplying the number by the client ID
			this.sendPing(pingValidation);
		} else {
			// Save ping time
			let now = Date.now();
			this.ping = (now - this.pingStart) / 1000;
			this.pingStart = null;
		}
	}

	onNotification(data) {
		let [type, translationKey, translationData] = data;
		translationData = translationData || [];

		// Translate keys
		for (let i = 0; i < translationData.length; i++) {
			if (translationData[i].startsWith('structure:')) {
				translationData[i] = structures.structureForId(translationData[i].slice(10)).name;
			}
		}

		// Play sound
		switch (type) {
			case config.notificationTypes.PLAYER_KILL:
				assets.playSound('kill-player', 1.0);
				this.killVignetteProgress = 1.0;
				break;
			case config.notificationTypes.DEATH:
				// Play death
				assets.playSound('death', 1.0);

				// Mark death spot
				this.deathPosX = this.currentPlayer.x;
				this.deathPosY = this.currentPlayer.y;

				// Refresh ad
				if (window.refreshAd) {
					window.refreshAd();
				} else {
					console.error('No refresh ad function.');
				}

				break;
			case config.notificationTypes.JUST_STOP:
				window.onbeforeunload = null; // Don't warn before leaving
				location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
				break;
		}

		// Show notification
		this.lastNotificationDate = Date.now();
		this.lastNotificationText = utils.translate(translationKey, ...translationData);
	}

	onAllianceList(data) {
		// Save data
		this.allianceList = data;

		// Refresh alliances if needed
		if (this.showingAlliances) this.toggleAlliances(true);
	}

	onAllianceData(data) {
		// Save data
		this.allianceData = data;

		// Refresh alliances if needed
		if (this.showingAlliances) this.toggleAlliances(true);
	}

	onAllianceJoinRequest(data) {
		let holder = document.getElementById('joinRequestHolder');
		if (data.length > 0) {
			// Show holder
			holder.style.display = 'block';

			// Set title
			document.getElementById('joinRequestCount').innerText = data.length;

			// Set name
			document.getElementById('joinRequestName').innerText = data[0][1];
		} else {
			// Hide the holder
			holder.style.display = 'none';
		}
	}

	onResources(data) {
		// Get the new resources
		[this.score, this.resources, this.structureCounts] = data;
		[this.vue.score, this.vue.resources, this.vue.structureCounts] = data;

		// Update the resource display if in game
		let respawnTip = document.getElementById('respawnTip');
		if (this.score > 0 || this.resources.filter(r => r > 0).length > 0) {
			respawnTip.style.display = 'block';
			respawnTip.innerHTML = utils.translate(
				'respawn-tip',
				utils.generateResourcesHTML(this.resources),
				Math.floor(this.score)
			);
		} else {
			respawnTip.style.display = 'none';
		}
	}

	onUpgradeOptions(data) {
		// Read data
		let newPerkIndexes;
		[this.vue.upgradeOptions, newPerkIndexes] = data;

		// Save new perks immediately
		if (this.currentPlayer) this.currentPlayer.perks = newPerkIndexes;
	}

	/*** TOUCH ***/
	setUsingTouch(using) {
		this.usingTouch = using;
		this.vue.usingTouch = using;
	}

	canvasTouchStart(ev) {
		ev.preventDefault();
		ev.stopPropagation();
		this.setUsingTouch(true);

		this.vue.hoveringStructure = null;
		this.vue.hoveringnPerk = null;

		for (let t of ev.changedTouches) {
			if (t.pageX < document.body.scrollWidth / 2 && this.controllingTouch.id === -1) {
				this.controllingTouch.id = t.identifier;
				this.controllingTouch.startX = this.controllingTouch.currentX = t.pageX;
				this.controllingTouch.startY = this.controllingTouch.currentY = t.pageY;
				// All movements will be done in touch move
			} else if (t.pageX > document.body.scrollWidth / 2 && this.attackingTouch.id === -1) {
				this.attackingTouch.id = t.identifier;
				this.attackingTouch.startX = this.attackingTouch.currentX = t.pageX;
				this.attackingTouch.startY = this.attackingTouch.currentY = t.pageY;
				// All attack states will be done in the move event
			}
		}
	}

	canvasTouchMove(ev) {
		ev.preventDefault();
		ev.stopPropagation();
		this.setUsingTouch(true);

		for (let t of ev.changedTouches) {
			if (t.identifier === this.controllingTouch.id) {
				this.controllingTouch.currentX = t.pageX;
				this.controllingTouch.currentY = t.pageY;
			} else if (t.identifier === this.attackingTouch.id) {
				this.attackingTouch.currentX = t.pageX;
				this.attackingTouch.currentY = t.pageY;
			}
		}
	}

	canvasTouchEnd(ev) {
		ev.preventDefault();
		ev.stopPropagation();
		this.setUsingTouch(true);

		for (let t of ev.changedTouches) {
			if (t.identifier === this.controllingTouch.id) {
				this.controllingTouch.id = -1;
			} else if (t.identifier === this.attackingTouch.id) {
				this.attackingTouch.id = -1;
			}
		}
	}

	renderControl(ctx, startX, startY, currentX, currentY) {
		ctx.save();

		let diffX = currentX - startX;
		let diffY = currentY - startY;
		let dist = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
		let triggerThreshold = this.touchTriggerThreshold;
		let controlRadius = this.touchControlRadius;
		let isTriggering = dist > triggerThreshold;

		ctx.beginPath();
		ctx.arc(startX, startY, controlRadius, 0, Math.PI * 2, false);
		ctx.closePath();
		ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
		ctx.fill();

		ctx.beginPath();
		ctx.arc(startX, startY, triggerThreshold, 0, Math.PI * 2, false);
		ctx.closePath();
		ctx.fillStyle = isTriggering ? 'rgba(255, 100, 100, 0.5)' : 'rgba(255, 255, 255, 0.1)';
		ctx.fill();

		let offsetX = diffX;
		let offsetY = diffY;
		let mag = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2));
		let divisor = mag > controlRadius ? mag / controlRadius : 1;
		offsetX /= divisor;
		offsetY /= divisor;

		ctx.beginPath();
		ctx.arc(startX + offsetX, startY + offsetY, controlRadius * 0.5, 0, Math.PI * 2, false);
		ctx.closePath();
		ctx.fillStyle = 'white';
		ctx.fill();

		ctx.restore();
	}

	/*** UI ***/
	updateGameState() {
		let inGame = this.inGame;

		// Show/hide menu
		let showingLoading = (!this.socketOpen || !this.initiated) && !this.socketClosed;
		document.getElementById('loadingScreen').style.display = showingLoading ? 'flex' : 'none';
		let showingDisconnect = this.socketClosed;
		document.getElementById('disconnectScreen').style.display = showingDisconnect ? 'flex' : 'none';
		document.getElementById('mainMenu').style.display =
			!showingDisconnect && !showingLoading && !inGame ? 'block' : 'none';
		document.getElementById('gameOverlay').style.display =
			inGame && !this.modalShowing ? 'block' : 'none';

		// Update UI
		if (!inGame) {
			document.body.classList.remove('inGame');

			if (this.showingAlliances) this.toggleAlliances(false);
			if (this.showingChatBox) this.toggleChatBox(false);
			if (this.showingHelp) this.toggleHelp(false);
		} else {
			document.body.classList.add('inGame');
		}

		// Make sure only one modal showing
		if (this.showingAlliances && this.showingHelp) {
			this.toggleHelp(false);
		}
	}

	toggleAlliances(show) {
		let alliancesUI = document.getElementById('alliances');

		// Render alliance
		if (show) {
			// Add alliance items
			let allianceHolder = document.getElementById('allianceList');
			while (allianceHolder.firstChild) allianceHolder.removeChild(allianceHolder.firstChild);

			if (this.allianceData) {
				// Render members
				let [id, ownerId, name, members] = this.allianceData;

				for (let member of members) {
					let [memberId, username] = member;

					let memberItem = document.createElement('div');
					memberItem.classList.add('allianceItem');

					let allianceName = document.createElement('div');
					allianceName.classList.add('allianceName');
					allianceName.innerText = username;
					memberItem.appendChild(allianceName);

					if (ownerId === this.clientId && memberId !== this.clientId) {
						let kickButton = document.createElement('div');
						kickButton.classList.add('allianceJoin', 'button', 'compact');
						kickButton.innerText = utils.translate('alliance-kick');
						kickButton.addEventListener('click', () => this.sendKickMember(memberId));
						memberItem.appendChild(kickButton);
					}

					allianceHolder.appendChild(memberItem);
				}
			} else {
				// Render alliance list
				for (let alliance of this.allianceList || []) {
					let [id, ownerId, name, playerCount] = alliance;

					let allianceItem = document.createElement('div');
					allianceItem.style.color = utils.getAllianceColor(id);
					allianceItem.classList.add('allianceItem');

					let allianceName = document.createElement('div');
					allianceName.classList.add('allianceName');
					allianceName.innerText = `${name} (${playerCount})`;
					allianceItem.appendChild(allianceName);

					let joinButton = document.createElement('div');
					joinButton.classList.add('allianceJoin', 'button', 'compact');
					joinButton.innerText = utils.translate('alliance-join');
					joinButton.addEventListener('click', () => {
						// Send request
						this.sendJoinAlliance(id);

						// Notify requested
						joinButton.innerText = utils.translate('alliance-requested');
						joinButton.classList.add('disabled');
					});
					allianceItem.appendChild(joinButton);

					allianceHolder.appendChild(allianceItem);
				}
			}

			// Show/hide show state
			document.getElementById('createAllianceHolder').style.display = this.allianceData
				? 'none'
				: 'block';
			document.getElementById('leaveAllianceButton').style.display = this.allianceData
				? 'block'
				: 'none';
		}

		// Show alliance
		alliancesUI.style.display = show ? 'flex' : 'none';
		this.showingAlliances = show;
	}

	toggleChatBox(showing, defaultText = '') {
		// Prompt if on mobile
		if (this.usingTouch) {
			let response = prompt('Chat message:');
			if (response) this.sendMessage(response);
			return;
		}

		// Show chat box
		this.showingChatBox = showing;
		let chatBox = document.getElementById('chatBox');
		chatBox.value = defaultText;
		chatBox.style.display = showing ? 'block' : 'none';
		chatBox.placeholder = utils.translate('message-placeholder');
		chatBox.blur(); // Fixes for Safari and Firefox
		if (showing) chatBox.focus();
	}

	toggleHelp(show) {
		// Show help
		let helpUI = document.getElementById('helpOverlay');
		helpUI.style.display = show ? 'block' : 'none';
		this.showingHelp = show;
	}

	updateControlPanel() {
		let panel = document.getElementById('commandPanel');
		let planetPanel = document.getElementById('planetPanel');
		let structurePanel = document.getElementById('structurePanel');

		// Hide panel
		let player = this.currentPlayer;
		if (!player || !player.overlappingPlanet) {
			panel.style.display = 'none';
			return;
		} else {
			panel.style.display = 'block';
		}
		let planet = player.overlappingPlanet;
		let structure = player.visitingStructure;

		// Render planet panel
		if (planet) {
			planetPanel.style.display = 'block';
			document.getElementById('planetPanelTitle').innerText = utils.translate(
				'planet-label',
				planet.name
			);

			let resourceValues = [];
			for (let i = 0; i < planet.resources.length; i++) {
				let generationRate = planet.resourceGenerationRate[i] - planet.totalResourceDemand[i];
				resourceValues.push(
					`<span class="${planet.resources[i] < 10 ? 'warning' : ''}">${Math.floor(
						planet.resources[i]
					)}/${planet.resourceMax[i]}</span> (<span class="${
						generationRate < 0 ? 'warning' : ''
					}">${generationRate.toFixed(1)}/s</span>)`
				);
			}

			let details = `<div>${utils.translate('citizens')}: ${Math.floor(
				planet.totalLaborAvailable
			)}</div><div>${utils.translate('labor-demand')}: <span class="${
				planet.totalLaborDemand > planet.totalLaborAvailable ? 'warning' : ''
			}">${Math.floor(planet.totalLaborDemand)}</span></div>`;
			details += utils.generateResourcesHTML(resourceValues, true);
			document.getElementById('planetDetails').innerHTML = details;
		} else {
			planetPanel.style.display = 'none';
		}

		// Render structure panel
		if (structure) {
			structurePanel.style.display = 'block';

			// Set name
			document.getElementById('structurePanelTitle').innerText = structure.structure.name;

			// Get details
			let structureDetails = document.getElementById('structureDetails');

			// Details creation function; this is a way of easily rendering details without recreated the elements
			// every time this is called; in addition to better performance, it also prevents buttons from glitching out
			// when hovered or clicked and not maintaining state; this is done by adding elements with unique IDs, then
			// either creating or updating the element accordingly and removing all other elements which do not belong
			// to this update.
			let addedIDs = [];
			let addDetails = (id, text) => {
				let elementId = `${id}Detail${structure.id}`;
				let textElement = document.getElementById(elementId); // Reuse old element if possible
				if (!textElement) {
					textElement = document.createElement('div');
					textElement.id = elementId;
					structureDetails.appendChild(textElement);
				}

				textElement.innerHTML = text;

				addedIDs.push(elementId);
			};
			let addAction = (id, label, cb, enabled = true) => {
				let elementId = `${id}Button${structure.id}`;
				let buttonElement = document.getElementById(elementId); // Reuse old element if possible
				if (!buttonElement) {
					buttonElement = document.createElement('div');
					buttonElement.id = elementId;
					buttonElement.classList.add('button', 'compact');
					structureDetails.appendChild(buttonElement);
				}

				buttonElement.classList.toggle('disabled', !enabled);
				while (buttonElement.firstChild) buttonElement.removeChild(buttonElement.firstChild);
				if (typeof label === 'string') {
					buttonElement.innerHTML = label;
				} else {
					for (let child of label) buttonElement.appendChild(child);
				}

				buttonElement.onmousedown = cb; // Don't use `addEventListener` since we ant to replace the old cb; we use onmousedown, since `onclick` may get cancelled if the children are updated

				addedIDs.push(elementId);
			};

			// Add details
			if (structure.isWorkingStructure) {
				// Count
				addDetails(
					'workingStructureCount',
					`${utils.translate('count')}: ${Math.floor(structure.count)}/${Math.floor(
						structure.maxCount
					)}`
				);

				// Labor
				let percentLaborFulfilled = structure.percentLaborFulfilled;
				addDetails(
					'workingStructureLabor',
					`${utils.translate('labor')}: <span class="${
						percentLaborFulfilled < 0.5 ? 'warning' : ''
					}">${Math.floor(percentLaborFulfilled * 100)}% (${Math.floor(
						structure.laborDemand * percentLaborFulfilled
					)}/${structure.laborDemand})</span>`
				);
			}

			// Add interact actions
			let collectCount = Math.ceil(structure.maxCount / 10);
			let allCount = structure.count;
			let canCollect = structure.count >= collectCount;
			if (structure.canInteract(this.clientId)) {
				if (structure.isMine) {
					// Draw consumption rate
					addDetails(
						'mineConsumption',
						`${utils.translate('consumption-label')}:${utils.generateResourceHTML(
							structure.resourceIndex,
							Math.floor(structure.adjustedGenerationRate)
						)}/s`
					);

					// Mine actions
					addAction(
						'mineCollectCount',
						`${utils.translate('collect-label')}${utils.generateResourceHTML(
							structure.resourceIndex,
							collectCount
						)}`,
						() => {
							this.sendStructureAction(structures.actions.COLLECT, collectCount);
						},
						canCollect
					);
					addAction(
						'mineCollectAll',
						`${utils.translate('collect-label')}${utils.generateResourceHTML(
							structure.resourceIndex,
							utils.translate('all-label')
						)}`,
						() => {
							this.sendStructureAction(structures.actions.COLLECT, allCount);
						},
						allCount > 0
					);
				} else if (structure.isFactory) {
					// Factory stats
					let resourceStats = [];
					let produceCount = -1; // How many can be built before running out of resources
					for (let i = 0; i < structure.depositedResources.length; i++) {
						let deposited = structure.depositedResources[i];
						let bulletResource = structure.weapon.bulletResources[i];

						// Determine how many can be built
						if (
							bulletResource !== 0 &&
							(produceCount === -1 || deposited / bulletResource < produceCount)
						) {
							produceCount = deposited / bulletResource;
						}

						// Add the statistic; it's a warning if deposited < sign(bulletResource) so it's only there if
						// the factory requires > 1 of that given resource
						resourceStats.push(
							`<span class="${
								deposited < Math.sign(bulletResource) ? 'warning' : ''
							}">${Math.floor(deposited)}</span> (${bulletResource.toFixed(1)}/unit)`
						);
					}
					addDetails(
						'factoryResources',
						utils.generateResourcesHTML(
							resourceStats,
							true,
							false,
							i => structure.weapon.bulletResources[i] > 0
						)
					);
					if (produceCount > 0) {
						addDetails(
							'factoryProductCount',
							utils.translate(
								produceCount > 1 ? 'units-remaining' : 'unit-remaining',
								Math.ceil(produceCount)
							)
						);
					} else {
						addDetails('factoryProductCount', utils.translate('out-of-resources'));
					}

					// Deposit action
					let depositDuration = 15; // Deposit materials for 15 seconds of factory functioning
					let depositCounts = [];
					let canAfford = true;
					for (let i = 0; i < structure.depositedResources.length; i++) {
						// The count is either enough to run the factory for 15 seconds or enough for 1 bullet (for things like shields)
						let count = Math.max(
							structure.generationRate * structure.bulletResources[i] * depositDuration,
							structure.bulletResources[i]
						);
						depositCounts.push(count); // Save the count
						if (this.resources[i] < count) canAfford = false; // Determine if can afford
					}
					addAction(
						'factoryDeposit',
						`${utils.translate('deposit-label')}${utils.generateResourcesHTML(
							depositCounts,
							false,
							true
						)}`, // Space inserted by icon margin
						() => this.sendStructureAction(structures.actions.DEPOSIT, depositCounts),
						canAfford
					);

					// Collect actions
					addAction(
						'factoryCollectCount',
						`${utils.translate('collect-label')} ${collectCount} ${structure.weapon.name}`,
						() => {
							this.sendStructureAction(structures.actions.COLLECT, collectCount);
						},
						canCollect
					);
					addAction(
						'factoryCollectAll',
						`${utils.translate('collect-label')} ${utils.translate('all-label')} ${
							structure.weapon.name
						}`,
						() => {
							this.sendStructureAction(structures.actions.COLLECT, allCount);
						},
						allCount > 0
					);
				}

				// Add owner actions
				if (structure.isOwner(this.clientId)) {
					addAction(
						`structureSharingToggle`,
						`[${utils
							.translate(structure.allianceSharing ? 'on-label' : 'off-label')
							.toUpperCase()}] ${utils.translate('toggle-sharing')}`,
						() => {
							this.sendStructureAction(
								structures.actions.TOGGLE_SHARING,
								!structure.allianceSharing
							);
						}
					);

					// Demolish + Confirm messages
					if (!this.demolishConfirm) {
						addAction(
							'demolish',
							`${utils.translate('demolish')}`,
							() => {
								this.demolishConfirm = true;
							},
							true
						);
					} else if (this.demolishConfirm) {
						addAction('demolish', `${utils.translate('confirmation-question')}`, () => {
							this.sendStructureAction(structures.actions.DEMOLISH, true);
						});
					}
				}
			}

			// Clear children that were not added this update; we have to remove the children in a separate loop,
			// otherwise, only one element will be removed per call since the list shortens as children are removed
			let removeChildren = [];
			for (let child of structureDetails.childNodes) {
				// Find all old children
				if (addedIDs.indexOf(child.id) === -1) removeChildren.push(child);
			}
			for (let child of removeChildren) {
				// Remove all old children
				structureDetails.removeChild(child);
			}
		} else {
			structurePanel.style.display = 'none';
			this.demolishConfirm = false; // Make the demolish promt reset if go off structure
		}
	}

	renderServerList(options) {
		let serverSelector = document.getElementById('serverSelector');
		while (serverSelector.firstChild) serverSelector.removeChild(serverSelector.firstChild);

		// Add all options
		for (let optionData of options) {
			let option = document.createElement('option');
			option.text = optionData.text;
			option.disabled = !!optionData.disabled;
			option.value = optionData.value;
			option.selected = !!optionData.selected;
			serverSelector.appendChild(option);
		}

		// Call callback on change
		serverSelector.onchange = () => {
			let option = options.filter(o => o.value === serverSelector.value)[0];
			option.onSelect();
		};
	}

	/*** REWARDS ***/
	hasReward(reward) {
		return this.rewards.has(reward);
	}
	addReward(reward) {
		this.rewards.add(reward);
		this._saveRewards();
	}
	removeReward(reward) {
		this.rewards.delete(reward);
		this._saveRewards();
	}
	_saveRewards() {
		this.vue.rewards = [...this.rewards.values()];
		localStorage.setItem('r', [...this.rewards.values()]);
	}

	/*** WORLD ***/
	get worldScale() {
		return this.height / (config.viewportHeight * this.viewDistanceMultiplier);
	}

	get viewWidth() {
		return this.width / this.worldScale;
	}

	get viewHeight() {
		return this.height / this.worldScale;
	}

	localToWorldX(x) {
		return (x - this.width / 2) / this.worldScale + this.viewportX;
	}

	localToWorldY(y) {
		return (y - this.height / 2) / this.worldScale + this.viewportY;
	}

	pointVisible(x, y, padding = 0) {
		return (
			x < this.viewportX + this.viewWidth / 2 + padding &&
			x > this.viewportX - this.viewWidth / 2 - padding &&
			y < this.viewportY + this.viewHeight / 2 + padding &&
			y > this.viewportY - this.viewHeight / 2 - padding
		);
	}
}

GameClient.dt = 1 / 60; // 60 FPS no matter the frame rate

GameClient.weaponKeys = '1234567890-=yuiop[]\\';

module.exports = GameClient;
