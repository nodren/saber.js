import 'babel-polyfill';
import React from 'react';
import { BrowserRouter } from 'react-router';
import App from 'frontend/App';
import ReactDom from 'react-dom';

ReactDom.render(<BrowserRouter>
    <App />
</BrowserRouter>, document.querySelector('#root'));

