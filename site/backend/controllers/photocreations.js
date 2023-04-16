const mysql = require("mysql");
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'gestiondeprojet',
    connectionLimit: 10 // Nombre maximal de connexions dans la pool
});

exports.getPhotocreations = (req, res) => {
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM photocreations", (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};