const mysql = require("mysql");
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'gestiondeprojet',
    connectionLimit: 10 // Nombre maximal de connexions dans la pool
});

exports.getCollections = (req, res) => {
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM collections", (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.postCollections = (req, res) => {
    // Récupération des valeurs depuis le corps de la requête
    const description = req.body.description;
    const nom = req.body.nom;

    // Requête d'insertion avec des valeurs paramétrées pour éviter les attaques par injection SQL
    const sql = "INSERT INTO collections (nom, description) VALUES (?, ?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [nom, description], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.deleteCollections = (req, res) => {
    // Récupération des valeurs depuis le corps de la requête
    const nom = req.body.nom;

    // Suppression sur base du nom
    const sql = "DELETE FROM collections WHERE nom = (?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [nom], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};