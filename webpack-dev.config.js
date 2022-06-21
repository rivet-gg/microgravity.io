const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

process.env['BABEL_ENV'] = 'development';

let defineValues = {};

// Expose environment variables
const envValues = {
	RIVET_IDENTITY_API_URL: process.env.RIVET_IDENTITY_API_URL,
	RIVET_MATCHMAKER_API_URL: process.env.RIVET_MATCHMAKER_API_URL,
	RIVET_CLIENT_TOKEN: process.env.RIVET_CLIENT_TOKEN,
};
console.log('envValues:', envValues);

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
	devServer: {
		port: 8080,
		static: {
			directory: path.join(__dirname, 'public'),
		},
	},
	plugins: [
		new webpack.EnvironmentPlugin(envValues),
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
