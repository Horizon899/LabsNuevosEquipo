// util/database.js
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'guitarras_db',
    password: 'gael123'
});

module.exports = pool.promise();