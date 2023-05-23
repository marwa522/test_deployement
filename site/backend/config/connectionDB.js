const mysql = require("mysql");
const pool = mysql.createPool({
    host: '34.79.25.79',
    user: 'root',
    password: 'admin',
    database: 'siteKabori',
    connectionLimit: 10 // Nombre maximal de connexions dans la pool
});

module.exports = mysql;
module.exports = pool;