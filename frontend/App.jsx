'use strict';
import React from 'react';
import Match from 'react-router/Match'
import Link from 'react-router/Link'
import API from 'saber/API';
const User = new API('users');

export default class App extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/user/create">Create User</Link></li>
				</ul>

				<hr/>

				<Match exactly pattern="/" component={Home} />
				<Match pattern="/user/create" component={UserCreate} />
			</div>
		);
	}
}

const Home = () => (
	<div>
		<h2>Home page</h2>
	</div>
);

class UserCreate extends React.Component {
	submit = (e) => {
		e.preventDefault();
		User.create({
			firstName: this.refs.firstName.value || null,
			lastName: this.refs.lastName.value || null,
			username: this.refs.username.value || null,
		}).then((user) => {
			console.log(user);
		})
	}
	render() {
		return (
			<div>
				<h2>Create a user</h2>
				<form>
					<input type="text" ref="firstName" name="firstName" id="firstName" placeholder="First Name"/>
					<input type="text" ref="lastName" name="lastName" id="lastName" placeholder="Last Name"/>
					<input type="text" ref="username" name="username" id="username" placeholder="Username"/>
					<input type="submit" onClick={ this.submit }/>
				</form>
			</div>
		);
	}
}
