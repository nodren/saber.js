import rc from 'rc';

let defaults = {
	database: {
		database: "sber",
		username: "sber",
		password: "sber",
		options: {
			host: "localhost",
			port: "3306",
			dialect: "mysql",
		},
	},
	session: {
		cookie: {
			path:'/',
			httpOnly: true,
			secure: false,
			maxAge: null,
		},
		secret: 'CHANGEME',
		store: 'sequelize',
		resave: false,
		saveUninitialized: false,
		rolling: true,
	},
};
let config = rc('saber', defaults);
export default config;
