const baseConfig = require('./webpack-base.config.js');

process.env['BABEL_ENV'] = 'development';

module.exports = Object.assign({}, baseConfig, {
	mode: 'development'
});
