'use strict';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerRouter, createServerRenderContext } from 'react-router';
import fs from 'fs';

export default (html, Main) => {
    return (req, res) => {
        const context = createServerRenderContext();
        let page = fs.readFileSync(html, {encoding: 'utf8'});
        let markup = renderToString(
            <ServerRouter location={ req.url } context={ context }>
                <Main/>
            </ServerRouter>
        );
        const result = context.getResult();
        if (result.redirect) {
            res.redirect(301, result.redirect.pathname);
        } else {
            if (result.missed) {
                res.status(404);
                //yes this is an exact copy of the code above
                markup = renderToString(
                    <ServerRouter location={ req.url } context={ context }>
                        <Main/>
                    </ServerRouter>
                );
            }
            res.send(page.replace('%%content%%', markup));
        }
    }
}