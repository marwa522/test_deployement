const mysql = require("mysql");
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'gestiondeprojet',
    connectionLimit: 10 // Nombre maximal de connexions dans la pool
});

exports.getPhotoevents = (req, res) => {
    // Obtenir une connexion à partir de la pool
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM photoevents", (err, result, fields) => {
            // Libérer la connexion une fois la requête terminée
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};