'use strict';
import express from 'express';

let expressObj = null;
export function server() {
    expressObj = express();
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