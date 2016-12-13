//this can go later, using it now to prevent having to fart with syntax all the time
import 'app-module-path/register';
import { addPath } from 'app-module-path';
addPath(__dirname);

import path from 'path';
import { server, listen } from 'sber/server';
import routingMiddleware from 'sber/routingMiddleware';
import { devMiddleware, hotMiddleware } from 'sber/webpackMiddleware';

import Main from './frontend/Main';
import config from './webpack.config.js';

let app = server();
app.use(devMiddleware(config));
app.use(hotMiddleware(config));
app.use(routingMiddleware(path.resolve(__dirname, './public/index.html'), Main));
listen();