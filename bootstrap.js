// import 'babel-polyfill';
import 'app-module-path/register';
import { addPath } from 'app-module-path';
addPath(__dirname);

import path from 'path';
import { server, listen } from 'saber/server';
import routingMiddleware from 'saber/routingMiddleware';
import { devMiddleware, hotMiddleware } from 'saber/webpackMiddleware';
import rest from 'saber/rest';

import Main from 'frontend/App';
import modelBootstrap from './model-bootstrap.js';
import webpackConfig from './webpack.config.js';

let app = server();
app.use(devMiddleware(webpackConfig));
app.use(hotMiddleware(webpackConfig));
rest.init(app);
rest.loadModels(modelBootstrap);
app.use(routingMiddleware(path.resolve(__dirname, './public/index.html'), Main));
listen();