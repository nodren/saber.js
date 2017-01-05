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
};
let config = rc('saber', defaults);
export default config;