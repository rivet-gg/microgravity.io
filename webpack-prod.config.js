const baseConfig = require('./webpack-base.config.js');

require('dotenv').config({ path: ".env.prod" });

process.env['NODE_ENV'] = 'production';
process.env['BABEL_ENV'] = 'production';

module.exports = Object.assign({}, baseConfig, {
	// Disabled since this breaks something
	// devtool: "nosources-source-map",  // This will replace any older source map
	mode: "production"
});
