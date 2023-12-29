require('dotenv').config({ path: '.env.prod' });

const baseConfig = require('./webpack-base.config.js');

// process.env['NODE_ENV'] = 'production';
// process.env['BABEL_ENV'] = 'production';

// TODO: Only works under dev for some reason
process.env['BABEL_ENV'] = 'development';

module.exports = Object.assign({}, baseConfig, {
	// Disabled since this breaks something
	// devtool: "nosources-source-map",  // This will replace any older source map
	// mode: "production"
	// TODO: Only works under dev for some reason
	mode: 'development'
});
