'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-hot-middleware/client?reload=true',
		path.join(__dirname, 'client-bootstrap.jsx')
	],
	output: {
		path: path.resolve(__dirname, './public/js'),
		publicPath: '/js/',
		filename: '[name].js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	],
	resolve: {
		alias: {
			'frontend': path.resolve(__dirname, './frontend'),
			'backend': path.resolve(__dirname, './frontend'),
			'shared': path.resolve(__dirname, './frontend'),
			'saber': path.resolve(__dirname, './saber'),
		},
		extensions:['', '.webpack.js', '.web.js', '.jsx', '.js', '.json']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [
						["env", {
							targets: {
								browsers: ["last 2 versions", "ie >= 11"]
							},
							useBuiltIns: true
						}],
						'stage-2',
						'react',
					],
					plugins: [
						'transform-decorators-legacy',
					],
				},
			},
		],
	},
};
