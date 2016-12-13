import React from 'react';
import { BrowserRouter } from 'react-router';
import Main from './frontend/Main.jsx';
import ReactDom from 'react-dom';

ReactDom.render(<BrowserRouter>
    <Main />
</BrowserRouter>, document.querySelector('#root'));

