const bullets = {};

bullets.bullets = [
	/* Normal Weapons */
	{
		id: 'machine-gun',
		bulletSpeed: 1300,
		damage: 0.2,
		volume: 0.3
	},
	{
		id: 'shotgun',
		bulletSpeed: 1600,
		damage: 0.2,
		trailLength: 10,
		life: 0.35
	},
	{
		id: 'minigun',
		bulletSpeed: 1600,
		damage: 0.15,
		life: 1.0,
		volume: 0.25
	},
	{
		id: 'sniper',
		trailLength: 60,
		bulletSpeed: 3000,
		damage: 0.9
	},
	{
		id: 'bomb',
		checkCircle: true,
		radius: 15,
		bulletSpeed: -250,
		bulletDrag: 0.4,
		damage: 0,
		life: 5,
		pulseInterval: 0.7,
		explosionRadius: 150,
		explosionDamage: 2.0,
		explosionVelocity: 750,
		renderType: 'circle'
	},
	{
		id: 'anti-follow',
		checkCircle: true,
		radius: 8,
		bulletSpeed: 400,
		bulletDrag: 2,
		damage: 0.15,
		life: 3,
		pulseInterval: 0.3,
		renderType: 'circle',
		volume: 0.3
	},
	{
		id: 'missile',
		// checkCircle: true,
		radius: 10,
		trailLength: 60,
		bulletSpeed: 100,
		bulletAcceleration: 3000,
		bulletAccelerationDelay: 0.25,
		life: 1.3,
		damage: 0.5,
		explosionRadius: 100,
		explosionDamage: 0.8,
		explosionVelocity: 250,
		renderType: 'triangle'
	},
	{
		id: 'nuke',
		checkCircle: true,
		radius: 40,
		bulletSpeed: -50,
		bulletDrag: 0.0,
		damage: 0,
		life: 120,
		pulseInterval: 2.0,
		blinkInterval: 0.2,
		explosionRadius: 2000,
		explosionDamage: 50.0,
		explosionVelocity: 2000,
		explosionSpeed: 200, // Render speed
		renderType: 'circle',
		renderColor: '#EBD820',
		renderIcon: 'nuke'
	},

	/* Bot Weapons */
	{
		id: 'alien-gun',
		bulletSpeed: 1100,
		trailLength: 10,
		damage: 0.15,
		volume: 0.2
	}
];

for (let bullet of bullets.bullets) {
	// Add camel case ID
	let normalizedId = '';
	let nextCaps = false;
	for (let i = 0; i < bullet.id.length; i++) {
		let char = bullet.id[i];
		if (char === '-') {
			nextCaps = true;
		} else {
			normalizedId += nextCaps ? char.toUpperCase() : char;
			nextCaps = false;
		}
	}
	bullet.normalizedId = normalizedId;
}

module.exports = bullets;
