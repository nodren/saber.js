//setup a base path so we don't need ../ in our imports
import 'app-module-path/register';
import { addPath } from 'app-module-path';
addPath(__dirname);

import path from 'path';
//grab express from saber library
import { server, listen } from 'saber/server';
//grab the react router based server side rendering middleware
import routingMiddleware from 'saber/routingMiddleware';
//grab the webpack hot reloading middleware
import { devMiddleware, hotMiddleware } from 'saber/webpackMiddleware';
//grab the epilogue middlware
import rest from 'saber/rest';
//es6 controllers
import { easyControllers } from 'easy-express-controllers';

//our root react component
import App from 'frontend/App';
//model specific bootstrapping for epilogue
import modelBootstrap from './model-bootstrap.js';
//webpack config for webpack middleware
import webpackConfig from './webpack.config.js';

let app = server();
app.use(devMiddleware(webpackConfig));
app.use(hotMiddleware(webpackConfig));
rest.init(app);
rest.loadModels(modelBootstrap);
easyControllers.createAllControllers(app, {}, {controllerPath: 'backend/controllers'});
//our index.html file is defined here, as is the name of our root react component
app.use(routingMiddleware(path.resolve(__dirname, './public/index.html'), App));
listen();
