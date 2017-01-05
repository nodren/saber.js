'use strict';
import React from 'react';
import Match from 'react-router/Match'
import Link from 'react-router/Link'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>

                <hr/>

                <Match exactly pattern="/" component={Home} />
                <Match pattern="/about" component={About} />
            </div>
        );
    }
}

const Home = () => (
    <div>
        <h2>Home page</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About us</h2>
    </div>
);