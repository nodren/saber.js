'use strict';
import epilogue from 'epilogue';
import sequelize from './db';

export default {
    init: function(app) {
        epilogue.initialize({
            app: app,
            sequelize: sequelize,
        });
    },
    loadModels: function(cb) {
        cb(epilogue);
    },
};
