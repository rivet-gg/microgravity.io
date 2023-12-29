const planets = {};

planets.planets = [
	{
		innerColor: '#D0D390',
		outerColor: '#5FBF6F',
		props: ['mountain-1', 'maple-tree', 'maple-tree']
	},
	{
		innerColor: '#CCD164',
		outerColor: '#A99B42',
		props: ['sahara-tree']
	},
	{
		innerColor: '#11B855',
		outerColor: '#358339',
		props: ['pine-tree', 'pine-tree', 'mountain-1']
	},
	{
		innerColor: '#E5E5E5',
		outerColor: '#C6C6C6',
		props: ['glacier-1', 'glacier-2']
	},
	{
		innerColor: '#11B6B8',
		outerColor: '#356683',
		props: ['glacier-1', 'glacier-2']
	},
	{
		innerColor: '#FFAC7F',
		outerColor: '#BF885F',
		props: ['dunes-1', 'sahara-tree']
	}
];

planets.props = {
	'maple-tree': {
		sizes: [96, 128]
	},
	'sahara-tree': {
		sizes: [96, 128]
	},
	'pine-tree': {
		sizes: [64, 96, 128, 160]
	},
	'mountain-1': {
		sizes: [192, 256]
	},
	'glacier-1': {
		sizes: [192]
	},
	'glacier-2': {
		sizes: [192]
	},
	'dunes-1': {
		sizes: [128, 192]
	}
};

module.exports = planets;
