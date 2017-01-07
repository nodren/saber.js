import Sequelize from 'sequelize';
import {Options, Attributes} from 'sequelize-decorators'
import sequelize from 'saber/db';

@Options({
	sequelize,
	tableName: 'users',
})
@Attributes({
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	username: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isAlphanumeric: true,
		}
	},
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isAlpha: true,
		},
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isAlpha: true,
		}
	},
})
class User extends Sequelize.Model {
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	set fullName(fullName) {
		let names = fullName.split(' ');
		this.lastName = names.pop();
		this.firstName = names.join(' ');
	}
}
export default User;
