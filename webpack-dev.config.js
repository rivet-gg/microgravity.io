const baseConfig = require('./webpack-base.config.js');

require('dotenv').config({ path: ".env.dev" });

process.env['BABEL_ENV'] = 'development';

module.exports = Object.assign({}, baseConfig, {
	mode: "development"
});

