'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import sequelize from './db';
import session from 'express-session';
import SessionSequelize from 'connect-session-sequelize';
const SequelizeStore = SessionSequelize(session.Store);

let expressObj = null;
export function server() {
	expressObj = express();
	expressObj.use(bodyParser.json());
	expressObj.use(bodyParser.urlencoded({extended: false}));
	let sessionConfig = config.session;
	if (sessionConfig.store == 'sequelize') {
		sessionConfig.store = new SequelizeStore({db: sequelize});
		sessionConfig.store.sync();
	}
	expressObj.use(session(sessionConfig));
	return expressObj;
}
export function listen() {
	let server = expressObj.listen(3000, (err) => {
		if (err) {
			console.log(err);
		}
		console.info('==> Listening on port 3000.  Open up http://localhost:3000/ in your browser.');
	});
	process.once('SIGUSR2', () => {
		server.close(() => {
			process.kill(process.pid, 'SIGUSR2');
		});
	})
}
