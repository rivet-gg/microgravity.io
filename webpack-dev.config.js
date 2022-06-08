const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

process.env['BABEL_ENV'] = 'development';

let defineValues = {};

// Expose environment variables
const envValues = {
	API_MATCHMAKER_URL: process.env.RIVET_MATCHMAKER_API_URL
};
for (let key in envValues) {
	defineValues[`ENV_${key}`] = JSON.stringify(process.env[key] || envValues[key]);
}
console.log('defineValues:', defineValues);

module.exports = {
	entry: {
		client: './src/client/client.js'
	},
	devtool: 'source-map',
	mode: 'development',
	output: {
		filename: '[name].[chunkhash:6].js',
		path: path.join(__dirname, 'public'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader',
					options: {
						minimize: true
					}
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin(defineValues),
		new HtmlWebpackPlugin({
			// Compile HTML so it matches the client hash
			template: path.join(__dirname, 'src', 'index.html'),
			minify: true
		})
	],
	stats: {
		colors: true
	},
	externals: {
		redis: true
	}
};
