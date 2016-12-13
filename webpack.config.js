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
            'sber': path.resolve(__dirname, './sber')
        },
        extensions:['', '.webpack.js', '.web.js', '.jsx', '.js', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel'],
            }
        ]
    }
};
