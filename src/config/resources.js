const resources = {};

resources.types = {
	OIL: 0,
	ALUMINIUM: 1,
	URANIUM: 2
};

resources.resources = [
	{
		id: 'oil',
		name: 'Oil',
		icon: 'oil',
		mineIcon: 'oil-rig-1',
		factoryPrice: [0, 150, 150],
		generationRate: 20,
		laborDemand: 20
	},
	{
		id: 'aluminium',
		name: 'Aluminium',
		icon: 'aluminium',
		mineIcon: 'aluminium-mine-1',
		factoryPrice: [150, 0, 150],
		generationRate: 10,
		laborDemand: 40
	},
	{
		id: 'uranium',
		name: 'Uranium',
		icon: 'uranium',
		mineIcon: 'uranium-mine-1',
		factoryPrice: [150, 150, 0],
		generationRate: 5,
		laborDemand: 60
	}
];

resources.mineMaxCount = 5000;

module.exports = resources;
