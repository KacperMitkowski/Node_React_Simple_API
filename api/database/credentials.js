/*
Credentials for access to postgres database
*/


const Pool = require('pg').Pool;
const pool = new Pool({
    host: "localhost",
    user: "kacper",
    password: "test_password",
    database: "events",
    port: "5432",
});

module.exports = pool;