'use strict';
import express from 'express';
import bodyParser from 'body-parser';

let expressObj = null;
export function server() {
    expressObj = express();
    expressObj.use(bodyParser.json());
    expressObj.use(bodyParser.urlencoded({extended: false}));
    return expressObj;
}
export function listen() {
    expressObj.listen(3000, (err) => {
        if (err) {
            console.log(err);
        }
        console.info('==> Listening on port 3000.  Open up http://localhost:3000/ in your browser.');
    });
}