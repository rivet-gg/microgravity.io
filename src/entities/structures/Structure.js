const Entity = require('../Entity');
const utils = require('../../utils');
const assets = require('../../client/assets');
const structures = require('../../config/structures');
const config = require('../../config/config');

class Structure extends Entity {
	get structure() {
		return structures.structures[this.structureIndex];
	}

	get customText() {
		return null;
	}

	get clientOwnerId() {
		return config.isClient ? this._clientOwnerId : this.clientOwner.id;
	}
	set clientOwnerId(id) {
		this._clientOwnerId = id;
	}
	get ownerAllianceId() {
		return config.isClient
			? this._ownerAllianceId
			: this.clientOwner.alliance
			? this.clientOwner.alliance.id
			: null;
	}
	set ownerAllianceId(id) {
		this._ownerAllianceId = id;
	}
	get ownerUsername() {
		return config.isClient ? this._ownerUsername : this.clientOwner.username;
	}
	set ownerUsername(username) {
		this._ownerUsername = username;
	}

	get isConstructed() {
		return this.constructionTimer <= 0;
	}

	get adjustedMaxHealth() {
		return this.isConstructed ? this.maxHealth : this.constructionHealth;
	}
	get constructionProgress() {
		return 1 - this.constructionTimer / config.structureConstructionTime;
	}

	get showBuildTips() {
		return (
			this.game.buildTipSlot === this.structure.slot && // Hovering on a structure that matches this slot
			this.game.currentPlayer &&
			this.game.currentPlayer.isFriendlyClientId(this.clientOwnerId)
		); // This is a friendly structure
	}

	constructor(game) {
		super(game);
		this.isStructure = true;

		// Configure entity
		this.checkCollisions = true;
		this.renderLayers = [-10];

		// Structure properties
		this.clientOwner = null;
		this.hostPlanet = null;
		this.pinAngle = 0;
		this.structureIndex = -1;
		this.constructionTimer = config.structureConstructionTime; // Entity has no collisions and no effect until complete
		this.spaceStructureCollisions = true;

		// Health
		this.health = 1.0;
		this.healthRegenSpeed = 0.05;
		this.constructionHealth = 0.2; // How much health to have when being constructed
	}

	update(dt) {
		// Remove velocity
		this.setVelocity(0, 0);

		if (config.isServer) {
			this.health = Math.min(this.health + this.healthRegenSpeed * dt, this.adjustedMaxHealth);
		}

		// Update construction timer
		if (this.constructionTimer > 0) {
			this.constructionTimer = Math.max(this.constructionTimer - dt, 0);

			// Call finish event
			if (this.constructionTimer <= 0 && config.isServer) this.onFinishedConstruction();
		}

		super.update(dt);
	}

	onFinishedConstruction() {
		// Set max health if finished constructing
		this.health = this.maxHealth;
	}

	onInit() {
		// Update build count
		if (config.isServer) {
			this.clientOwner.structureCounts[this.structure.slotIndex] =
				(this.clientOwner.structureCounts[this.structure.slotIndex] || 0) + 1;
			this.clientOwner.sendResources();
		}

		// Save max health
		if (!this.maxHealth) {
			this.maxHealth = this.health;
		}
	}

	onCollision(entity, dt) {
		if (entity.isPlayer || entity.isAsteroid) {
			if (this.structure.planetItem) {
				// Destroy asteroid and cause damage if ground item
				if (entity.isAsteroid) {
					let damage = entity.isLarge ? 2.0 : 0.6;
					entity.destroy();
					utils.damageEntity(entity, this, damage);
				}

				// Cause damage to player if sitting on planet item that's not friendly
				if (config.isServer && entity.isPlayer && !entity.isFriendlyClientId(this.clientOwnerId)) {
					let damage = 0.15 * dt; // 0.15 dps
					utils.damageEntity(this, entity, damage);
				}
			} else {
				// Repel entities in space
				if (this.constructionTimer <= 0 && this.spaceStructureCollisions) {
					utils.repelEntities(this, entity, 100, false, true);
				}
			}
		} else if (entity.isBullet) {
			if (entity.shooterEntityId === this.id) return;

			// Destroy the bullet
			entity.destroyBullet();

			// Only cause damage if shooter is player
			let damageMultiplier = this.structure.planetItem && entity.explosionRadius === 0 ? 0.5 : 1.0;
			if (entity.shooterEntity && entity.shooterEntity.isPlayer)
				utils.damageEntity(entity, this, entity.damage * damageMultiplier);
		}
	}

	onDestroy() {
		// Update build count
		if (config.isServer) {
			this.clientOwner.structureCounts[this.structure.slotIndex] =
				(this.clientOwner.structureCounts[this.structure.slotIndex] || 1) - 1;
			this.clientOwner.sendResources();
		}

		// Spawn explosion
		if (config.isClient) {
			this.game.explosionManager.spawnExplosion(this.x, -this.y, this.radius * 2);
		}
	}

	onKilled(killer) {
		if (config.isServer) {
			// Get the client
			let client = this.clientOwner;
			if (!client) return;

			// Notify player destroyed
			let destroyerLabel = utils.killerLabel(killer);

			// Send notification
			if (destroyerLabel) {
				let structureName = `structure:${this.structure.id}`;
				let notificationLabel = this.hostPlanet
					? 'notification-structure-destroyed-planet'
					: 'notification-structure-destroyed';
				let notificationData = this.hostPlanet
					? [destroyerLabel, structureName, this.hostPlanet.name]
					: [destroyerLabel, structureName];
				this.clientOwner.sendNotification(
					config.notificationTypes.STRUCTURE_DESTROYED,
					notificationLabel,
					notificationData
				);
			}
		}
	}

	applyConstructionStyle(ctx) {
		if (!this.isConstructed) {
			let progress = utils.easingFunctions.easeOutQuad(this.constructionProgress);
			let scale = 1 - (1 - progress) * 0.3;
			ctx.globalAlpha = progress;
			ctx.scale(scale, scale);
		}
	}

	drawImage(ctx, scale = 1) {
		// Draw body
		ctx.save();
		this.applyConstructionStyle(ctx);
		utils.drawImage(
			ctx,
			assets.structureUrl(this.structure.image),
			0,
			0,
			this.radius * 2 * scale,
			this.radius * 2 * scale
		);
		ctx.restore();
	}

	render(ctx) {
		ctx.save();

		// Undo rotation if needed
		if (!this.structure.planetItem) ctx.rotate(-this.rot);

		// Draw glow if planet item
		if (this.structure.planetItem) {
			utils.drawGlow(
				ctx,
				0,
				0,
				this.radius * 2,
				this.ownerAllianceId ? utils.getAllianceColor(this.ownerAllianceId) : null,
				this.ownerAllianceId ? 0.2 : 0.07
			);
		}

		ctx.restore();
	}

	postRender(ctx) {
		ctx.save();

		if (!this.structure.planetItem) ctx.rotate(-this.rot);

		// Check if hovering
		let mouseX = this.game.localToWorldX(this.game.mouseX) - this.x;
		let mouseY = this.game.localToWorldY(this.game.mouseY) + this.y;
		let hovering = utils.dist(mouseX, mouseY) <= this.radius;

		if (hovering || this.health < this.adjustedMaxHealth) {
			// Draw health
			utils.renderHealth(ctx, this, this.adjustedMaxHealth, false);
		}

		ctx.save();
		if (hovering) {
			// Draw username
			ctx.fillText(this.ownerUsername, 0, -this.radius - 45);

			// Draw structure name
			ctx.fillText(this.structure.name, 0, -this.radius - 75);

			// Draw custom text if needed
			let customText = this.customText;
			if (customText) {
				ctx.fillText(customText, 0, -this.radius - 105);
			}
		}
		ctx.restore();

		// Draw build progress
		if (!this.isConstructed) {
			let xPos = 0;
			let yPos = 0;
			let radius = this.radius * 0.75;
			if (this.structure.planetItem) {
				yPos = -this.radius / 2;
				radius = this.radius / 4;
			}

			let angleOffset = -Math.PI / 2;
			ctx.beginPath();
			ctx.moveTo(xPos, yPos);
			ctx.arc(xPos, yPos, radius, angleOffset, angleOffset + Math.PI * 2 * this.constructionProgress);
			ctx.fill();
		}

		ctx.restore();
	}
}

Structure.addSyncKeys(
	{ key: 'structureIndex', type: 'int', update: false },
	{ key: 'health', type: 'float', update: true },
	{ key: 'maxHealth', type: 'float', update: false },
	{ key: 'constructionTimer', type: 'float', update: false }, // Don't send updates, since this will automatically decrease
	{ key: 'clientOwnerId', type: 'int', update: false },
	{ key: 'ownerAllianceId', type: 'int', update: true },
	{ key: 'ownerUsername', type: 'string', update: false }
);

module.exports = Structure;
