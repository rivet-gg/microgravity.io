const Structure = require('./Structure');
const config = require('../../config/config');
const utils = require('../../utils');
const weapons = require('../../config/weapons');
const bullets = require('../../config/bullets');
const assets = require('../../client/assets');

class Turret extends Structure {
	constructor(game) {
		super(game);
		this.isTurret = true;

		this.radius = 44;
		this.health = 3.0;

		// Target
		this.target = null;
		this.aimDir = 0;
		this.viewDistance = 100;
		this.groundedAimRange = Math.PI * 0.3;
		this.srcObj = { x: 0, y: 0 }; // Used for `utils.intercept`
		this.dstObj = { x: 0, y: 0, vx: 0, vy: 0 }; // Same as above

		// Weapon
		this.weaponIndex = -1;
		this.weapon = null;

		// Firing
		this.fireTimer = 0;
	}

	update(dt) {
		if (config.isServer && this.isConstructed) {
			// Seek new target if destroyed target (which will nullify target) or has waited long enough
			if ((this.target && this.target.destroyed) || this.game.updateIndex % 10 === 0) {
				this.seekTarget();
			}

			// Move to target
			let canFire = false;
			if (this.target) {
				// Configure source
				this.srcObj.x = 0;
				this.srcObj.y = 0;

				// Configure destination
				this.dstObj.x = this.target.x - this.x;
				this.dstObj.y = this.target.y - this.y;
				this.dstObj.vx = this.target.velX;
				this.dstObj.vy = this.target.velY;

				// Get the bullet speed
				let bullet = bullets.bullets[bullets.bullets.findIndex(b => b.id === this.weapon.bulletId)];
				let bulletSpeed = bullet.bulletSpeed;
				bulletSpeed *= 0.9; // Over-shoot the bullet to be more accurate

				// Override for missile, since it uses an acceleration; this value is manually chosen
				if (bullet.id === 'missile') {
					bulletSpeed = 850;
				}

				// let aimDir = -Math.atan2(this.target.y - this.y, this.target.x - this.x);
				let aimDir = utils.intercept(this.srcObj, this.dstObj, bulletSpeed);
				if (aimDir != null) aimDir = -aimDir; // Negate it because... yeah
				if (this.canAimAt(aimDir)) {
					this.aimDir = aimDir;
					canFire = true;
				}
			}

			// Update the fire timer
			let attemptFire = this.target && canFire;
			this.fireTimer -= dt;
			if (!attemptFire) this.fireTimer = Math.max(this.fireTimer, 0); // Don't let the fire timer go down
			while (this.fireTimer <= 0 && attemptFire) {
				// Fire enough bullets to make up for the lost bullets in the last tick
				// Reset timer
				this.fireTimer += this.weapon.fireInterval;
				let timeOffset = Math.max(-this.fireTimer, 0);

				// Fire the weapon
				this.game.fireWeapon(this.weapon, this, timeOffset);
			}
		}

		super.update(dt);
	}

	onInit() {
		super.onInit();

		// Aim "up"
		if (this.structure.planetItem) {
			this.aimDir = this.rot - Math.PI / 2;
		}

		// Set view distance
		this.viewDistance = this.structure.planetItem ? 1200 : 900;

		// Set the weapon
		let weaponId = this.structure.weaponId;
		this.weaponIndex = weapons.weapons.findIndex(w => w.id === weaponId);
		this.weapon = weapons.weapons[this.weaponIndex];

		// Set the fire timer
		this.fireTimer = this.weapon.fireInterval;
	}

	onFinishedConstruction() {
		super.onFinishedConstruction();

		// Find target
		this.seekTarget();
	}

	seekTarget() {
		if (!config.isServer) return;

		// Find a target
		let closestTarget = null;
		let closestTargetDistance = -1;
		this.game.queryCircle(this.x, this.y, this.viewDistance, entity => {
			if (this.structure.planetItem) {
				// Only shoot at players and asteroids
				if (!entity.isPlayer && !entity.isAsteroid) return;
			} else {
				// Only shoot at players
				if (!entity.isPlayer) return;
			}
			if (entity.isPlayer && this.clientOwner.isFriendly(entity.clientId)) return;

			// Save the target
			let distance = utils.dist(this.x, this.y, entity.x, entity.y);
			if (closestTargetDistance === -1 || distance < closestTargetDistance) {
				closestTarget = entity;
				closestTargetDistance = distance;
			}
		});

		// Set the target
		this.target = closestTarget;
	}

	canAimAt(angle) {
		if (angle == null) return false;
		if (this.structure.planetItem) {
			return Math.abs(utils.dirDiff(angle + Math.PI / 2, this.rot)) < this.groundedAimRange;
		} else {
			return true;
		}
	}

	/**
	 * @param {CanvasRenderingContext2D} ctx
	 */
	render(ctx) {
		super.render(ctx);

		ctx.save();
		this.applyConstructionStyle(ctx);

		// Draw the base
		ctx.save();
		ctx.fillStyle = this.ownerAllianceId ? utils.getAllianceColor(this.ownerAllianceId) : '#3e3e3e';
		utils.polygonPath(ctx, 6, this.radius);
		ctx.fill();
		ctx.restore();

		// Draw the rotating part
		let topRadius = this.radius * 0.7;
		ctx.save();

		// Draw barrel base
		ctx.fillStyle = utils.grayscaleColor(0.0, 0.25);
		ctx.beginPath();
		utils.polygonPath(ctx, 6, topRadius + 4);
		ctx.fill();

		// Draw top with barrel
		let barrelWidth = topRadius;
		let barrelHeight = topRadius * 0.8;
		ctx.lineWidth = 8;
		ctx.fillStyle = 'white';
		ctx.rotate(this.aimDir - this.rot);
		ctx.beginPath();
		utils.polygonPath(ctx, 6, topRadius);
		ctx.rect(topRadius - barrelWidth / 2, -barrelHeight / 2, barrelWidth, barrelHeight);
		ctx.fill();
		ctx.restore();

		// Draw weapon backdrop and icon
		if (!this.structure.planetItem) {
			let iconSize = 24;
			ctx.save();
			ctx.fillStyle = utils.grayscaleColor(0.5);
			ctx.beginPath();
			ctx.arc(0, 0, iconSize * 0.7, 0, Math.PI * 2);
			ctx.fill();
			ctx.restore();
			utils.drawImage(ctx, assets.iconUrl(this.weapon.icon), 0, 0, iconSize, iconSize);
		}

		ctx.restore();

		// Draw the view distance
		if (this.showBuildTips) {
			let color = '#D35E45';
			if (this.structure.planetItem) {
				utils.drawBuildTipCircle(
					ctx,
					color,
					0,
					0,
					this.viewDistance,
					this.id,
					-Math.PI / 2 - this.groundedAimRange,
					-Math.PI / 2 + this.groundedAimRange
				);
			} else {
				utils.drawBuildTipCircle(ctx, color, 0, 0, this.viewDistance, this.id);
			}
		}

		super.postRender(ctx);
	}
}

Turret.addSyncKeys({
	key: 'aimDir',
	type: 'float',
	update: true,
	sendMap: v => utils.modFix(v, Math.PI * 2)
});

module.exports = Turret;
