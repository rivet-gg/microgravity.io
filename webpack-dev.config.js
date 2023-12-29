const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
dotenv.config({ path: '.env.dev' });

const baseConfig = require('./webpack-base.config.js');

process.env['BABEL_ENV'] = 'development';

module.exports = Object.assign({}, baseConfig, {
	mode: 'development'
});
