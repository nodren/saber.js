'use strict';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

let compilerObj = null;
function compiler(config) {
    if (!compilerObj) {
        compilerObj = webpack(config);
    }
    return compilerObj;
}
export function devMiddleware(config) {
    return webpackMiddleware(compiler(config), {
        publicPath: config.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });
}

export function hotMiddleware(config) {
    return webpackHotMiddleware(compiler(config));
}