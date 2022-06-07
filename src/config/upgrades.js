const structures = require('./structures');
const assets = require('../client/assets');

const upgrades = {};

upgrades.upgrades = [
	[
		{ structureId: 'launch-pad' },
		{ structureId: 'shotgun-factory' },
		{ structureId: 'super-minigun-factory' }
	],
	[
		{ moveSpeed: 1.15, label: 'upgrade-move-speed' },
		{ boostSpeed: 1.2, label: 'upgrade-boost-speed' },
		{ boostAmount: 1.4, label: 'upgrade-boost-fuel' }
	], // Testing Tier
	[
		{ bombInterval: 0.65, bombAmmo: 1.5, label: 'upgrade-bomb' },
		{
			machineGunInterval: 0.9,
			minigunInterval: 0.9,
			minigunAmmo: 2,
			superMinigunAmmo: 4,
			label: 'upgrade-minigun'
		},
		{ structureId: 'ground-sniper-turret' }
	], // Tier 1  // { buildTime: 0.1 }
	[
		{ collisionDamage: 1 / 1400, label: 'upgrade-collision-damage' },
		{ viewDistance: 1.05, label: 'upgrade-view-distance' },
		{ structureId: 'ground-missile-turret' }
	], // Tier 2  // { cityPopulation: 1.5 }
	[{ structureId: 'missile-factory' }, { structureId: 'sniper-turret' }, { structureId: 'ground-wall' }],
	[{ structureId: 'sniper-factory' }, { structureId: 'wall-strong' }, { structureId: 'missile-turret' }],
	[
		{ missileInterval: 0.75, missileAmmo: 1.5, label: 'upgrade-missile' },
		{
			machineGunDamage: 1.08,
			minigunDamage: 1.1,
			label: 'upgrade-machine-gun'
		},
		{ structureId: 'ied' }
	], // Tier 3  // { cost: 0.9 }
	[
		{ structureId: 'anti-follow-factory' },
		{ structureId: 'minigun-turret' },
		{ structureId: 'ground-minigun-turret' }
	],
	[
		{ structureId: 'super-minigun-turret' },
		{ explosionRadius: 1.5, label: 'upgrade-explosion-radius' },
		{
			machineGunLife: 1.05,
			minigunLife: 1.05,
			shotgunLife: 1.3,
			label: 'upgrade-weapon-range'
		}
	], // Tier 4  // { turretBulletLife: 1.5 }
	[{ structureId: 'heal-factory' }, { structureId: 'teleport-factory' }, { structureId: 'shield-factory' }],
	[{ structureId: 'boost-pad' }, { structureId: 'trap' }],
	[
		{ structureId: 'nuke-factory' },
		{
			shotgunAmmo: 3,
			minigunAmmo: 3,
			antiFollowAmmo: 3,
			sniperAmmo: 3,
			label: 'upgrade-tripple-ammo'
		}
	] // Tier 5  // { /* Max turret max count */ }
];

// Check if any structures are missing
structureLoop: for (let structure of structures.structures) {
	// Skip special structures
	if (structure.special) continue;

	// Skip if in default owned
	if (structures.defaultOwned.indexOf(structure.index) !== -1) continue;

	// Try to find a matching upgrade
	for (let upgradeOptions of upgrades.upgrades) {
		for (let upgrade of upgradeOptions) {
			if (upgrade.structureId === structure.id) {
				continue structureLoop;
			}
		}
	}

	// Log that it's missing
	console.warn(`Missing upgrade for structure ${structure.id}.`);
}

// Put perks in to an array for easy indexing
upgrades.perks = [];
for (let options of upgrades.upgrades) {
	for (let upgrade of options) {
		if (upgrade.structureId == null && upgrades.perks.indexOf(upgrade)) {
			upgrades.perks.push(upgrade);
		}
	}
}

// Process upgrades
for (let upgradeOptions of upgrades.upgrades) {
	for (let upgrade of upgradeOptions) {
		if (upgrade.structureId) {
			// Get the structure object
			upgrade.structure = structures.structureForId(upgrade.structureId);
			if (upgrade.structure == null) throw new Error(`Invalid structure ID ${upgrade.structureId}.`);

			// Set the icon
			upgrade.icon = assets.structureUrl(upgrade.structure.image);
		} else {
			// Add the ID of the perk
			upgrade.perkIndex = upgrades.perks.indexOf(upgrade);
		}
	}
}

module.exports = upgrades;
