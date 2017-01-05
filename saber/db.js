'use strict';
import { Sequelize } from 'sequelize';
import config from './config';

let sequelizeObj = null;

export default (function() {
    if (!sequelizeObj) {
        let dbConfig = config.database;
        sequelizeObj = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig.options);
    }
    return sequelizeObj;
})()