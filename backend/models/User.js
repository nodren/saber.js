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
    username: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
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