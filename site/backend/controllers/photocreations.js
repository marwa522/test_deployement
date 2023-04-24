const mysql = require("mysql");
const pool = mysql.createPool({
    host: '34.79.25.79',
    user: 'root',
    password: 'admin',
    database: 'siteKabori',
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

exports.postPhotocreations = (req, res) => {
    // Récupération des valeurs depuis le corps de la requête
    const url = req.body.url;
    const description = req.body.description;
    const nom = req.body.nom;

    // Requête d'insertion avec des valeurs paramétrées pour éviter les attaques par injection SQL
    const sql = "INSERT INTO photocreations (url, description, nom) VALUES (?, ?, ?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [url, description, nom], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.deletePhotocreations = (req, res) => {
    // Récupération des valeurs depuis le corps de la requête
    const nom = req.params.nom;

    // Suppression sur base du nom
    const sql = "DELETE FROM photocreations WHERE nom = (?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [nom], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};