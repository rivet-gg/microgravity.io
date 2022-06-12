const Bullet = require('../entities/Bullet');
const utils = require('../utils');

/**
 * @typedef {Object} WeaponData
 * @property {string} id
 * @property {string} name
 * @property {?boolean} isPowerup - If it doesn't actually do any damage.
 * @property {?boolean} botWeapon - If a bot may use this weapon.
 * @property {string} icon
 * @property {number} maxAmmo
 * @property {number} fireInterval
 * @property [number} kickback
 * @property {?boolean} immediateFire - If the weapon should be able to fire immediately when selected.
 * @property {?string} bulletId
 * @property fire
 */

let weapons = {};

/** @type {WeaponData[]} */
weapons.weapons = [
	/* Damage Weapons */
	{
		id: 'machine-gun',
		icon: 'machine-gun',
		factoryPrice: [0, 0, 0],
		bulletResources: [0, 0, 0],
		generationRate: 1,
		maxAmmo: -1,
		fireInterval: 0.25,
		kickback: 0.02,
		bulletId: 'machine-gun',
		fire: (shooter, t) => {
			let b = new Bullet(shooter.game, 'machine-gun');
			b.fireFrom(shooter, t);
			return b;
		}
	},
	{
		id: 'shotgun',
		icon: 'shotgun',
		factoryPrice: [0, 100, 0],
		bulletResources: [15, 0, 0],
		generationRate: 2,
		laborDemand: 40,
		maxAmmo: 100,
		fireInterval: 0.5,
		kickback: 0.25,
		bulletId: 'shotgun',
		fire: (shooter, t) => {
			let angleRange = Math.PI * 0.1;
			let bulletCount = 5;
			let bullets = [];
			for (let i = 0; i < bulletCount; i++) {
				// Calculate angle offset to give shotgun effect
				let angleProgress = i / (bulletCount - 1);
				let angleOffset = angleRange * (angleProgress - 0.5);

				// Fire bullet
				let b = new Bullet(shooter.game, 'shotgun');
				b.angleOffset = angleOffset;
				b.fireFrom(shooter, t);
				bullets.push(b);
			}
			return bullets;
		}
	},
	{
		id: 'minigun',
		icon: 'minigun',
		factoryPrice: [0, 100, 50],
		bulletResources: [3, 4, 0],
		generationRate: 20,
		laborDemand: 60,
		maxAmmo: 1500,
		fireInterval: 0.1,
		kickback: 0.04,
		bulletId: 'minigun',
		fire: (shooter, t) => {
			let b = new Bullet(shooter.game, 'minigun');
			b.fireFrom(shooter, t);
			return b;
		}
	},
	{
		id: 'bomb',
		icon: 'bomb',
		factoryPrice: [50, 100, 0],
		bulletResources: [0, 20, 10],
		generationRate: 0.7,
		laborDemand: 50,
		maxAmmo: 30,
		fireInterval: 2,
		bulletId: 'bomb',
		fire: (shooter, t) => {
			let b = new Bullet(shooter.game, 'bomb');
			b.fireFrom(shooter, t, true);
			return b;
		}
	},
	{
		id: 'missile',
		icon: 'missile',
		factoryPrice: [150, 250, 100],
		bulletResources: [20, 15, 25],
		generationRate: 0.5,
		laborDemand: 80,
		maxAmmo: 30,
		fireInterval: 0.8,
		bulletId: 'missile',
		fire: (shooter, t) => {
			let b = new Bullet(shooter.game, 'missile');
			b.fireFrom(shooter, t);
			return b;
		}
	},
	{
		id: 'sniper',
		icon: 'sniper',
		factoryPrice: [150, 250, 150],
		bulletResources: [0, 20, 20],
		generationRate: 0.4,
		laborDemand: 95,
		maxAmmo: 20,
		fireInterval: 1.2,
		kickback: 1,
		bulletId: 'sniper',
		fire: (shooter, t) => {
			let b = new Bullet(shooter.game, 'sniper');
			b.trailLength = 60;
			b.bulletSpeed = 2000;
			b.damage = 0.9;
			b.fireFrom(shooter, t);
			return b;
		}
	},
	{
		id: 'anti-follow',
		icon: 'bomb',
		factoryPrice: [200, 350, 200],
		bulletResources: [20, 20, 40],
		generationRate: 0.9,
		laborDemand: 110,
		maxAmmo: 100,
		fireInterval: 0.2,
		kickback: -0.15,
		bulletId: 'anti-follow',
		fire: (shooter, t) => {
			let angleOffset = Math.PI * 0.05;
			let angleRange = Math.PI * 0.25;
			let bullets = [];

			// Left
			let b1 = new Bullet(shooter.game, 'anti-follow');
			b1.angleOffset = Math.PI + angleOffset + (Math.random() - 0.5) * angleRange;
			b1.fireFrom(shooter, t, true);
			bullets.push(b1);

			// Right
			let b2 = new Bullet(shooter.game, 'anti-follow');
			b2.angleOffset = Math.PI - angleOffset + (Math.random() - 0.5) * angleRange;
			b2.fireFrom(shooter, t, true);
			bullets.push(b2);

			return bullets;
		}
	},
	{
		id: 'super-minigun',
		icon: 'minigun',
		factoryPrice: [300, 350, 300],
		bulletResources: [30, 50, 50],
		generationRate: 5,
		laborDemand: 150,
		maxAmmo: 200,
		fireInterval: 0.05,
		kickback: 0.03,
		bulletId: 'minigun',
		fire: (shooter, t) => {
			let b = new Bullet(shooter.game, 'minigun');
			b.fireFrom(shooter, t);
			return b;
		}
	},

	/* Power ups */
	{
		id: 'shield',
		icon: 'shield',
		isPowerup: true,
		factoryPrice: [400, 400, 400],
		bulletResources: [150, 150, 500],
		generationRate: 0.1,
		laborDemand: 125,
		maxAmmo: 2,
		fireInterval: 1,
		immediateFire: true,
		fire: (shooter, t) => {
			shooter.shieldTimer += 15;
		}
	},
	{
		id: 'heal',
		icon: 'heart',
		isPowerup: true,
		factoryPrice: [400, 400, 400],
		bulletResources: [150, 150, 200],
		generationRate: 0.2,
		laborDemand: 125,
		maxAmmo: 4,
		fireInterval: 1,
		immediateFire: true,
		fire: (shooter, t) => {
			shooter.health = 1.0;
		}
	},
	{
		id: 'teleport',
		icon: 'teleport',
		isPowerup: true,
		factoryPrice: [400, 400, 400],
		bulletResources: [150, 150, 300],
		generationRate: 0.2,
		laborDemand: 125,
		maxAmmo: 2,
		fireInterval: 1,
		immediateFire: true,
		fire: (shooter, t) => {
			[shooter.x, shooter.y] = shooter.game.chooseSpawnPoint(shooter.radius);
		}
	},

	/* Special */
	{
		id: 'nuke',
		icon: 'nuke',
		factoryPrice: [2000, 10000, 20000],
		bulletResources: [0, 20000, 20000],
		generationRate: 0.0033, // 5 minutes
		laborDemand: 800,
		maxAmmo: 1,
		fireInterval: 10,
		bulletId: 'nuke',
		fire: (shooter, t) => {
			let b = new Bullet(shooter.game, 'nuke');
			b.fireFrom(shooter, t, true);
			return b;
		}
	},

	/* Bot Weapons */
	{
		id: 'alien-gun',
		icon: 'machine-gun',
		dontSell: true,
		botWeapon: true,
		factoryPrice: [0, 0, 0],
		bulletResources: [0, 0, 0],
		generationRate: 1,
		maxAmmo: -1,
		fireInterval: 0.75,
		kickback: 0.02,
		fire: (shooter, t) => {
			let b = new Bullet(shooter.game, 'alien-gun');
			b.fireFrom(shooter, t);
			return b;
		}
	},
	{
		id: 'super-alien-gun',
		icon: 'machine-gun',
		dontSell: true,
		botWeapon: true,
		factoryPrice: [0, 0, 0],
		bulletResources: [0, 0, 0],
		generationRate: 1,
		maxAmmo: -1,
		fireInterval: 0.75,
		kickback: 0.02,
		fire: (shooter, t) => {
			let b = new Bullet(shooter.game, 'alien-gun');
			b.fireFrom(shooter, t);
			return b;
		}
	}
];

weapons.weaponForId = function (id) {
	return weapons.weapons[weapons.weapons.findIndex(w => w.id === id)];
};

for (let weapon of weapons.weapons) {
	// Add camel case ID
	let normalizedId = '';
	let nextCaps = false;
	for (let i = 0; i < weapon.id.length; i++) {
		let char = weapon.id[i];
		if (char === '-') {
			nextCaps = true;
		} else {
			normalizedId += nextCaps ? char.toUpperCase() : char;
			nextCaps = false;
		}
	}
	weapon.normalizedId = normalizedId;

	// Add the translated name
	Object.defineProperty(weapon, 'name', {
		get() {
			return utils.translate(`weapon-${this.id}`);
		}
	});
}

module.exports = weapons;
