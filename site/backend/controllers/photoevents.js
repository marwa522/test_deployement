const mysql = require("mysql");
const pool = mysql.createPool({
    host: '34.79.25.79',
    user: 'root',
    password: 'admin',
    database: 'siteKabori',
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

exports.postPhotoevents = (req, res) => {
    // Récupération des valeurs depuis le corps de la requête
    const url = req.body.url;
    const description = req.body.description;
    const nom = req.body.nom;

    // Requête d'insertion avec des valeurs paramétrées pour éviter les attaques par injection SQL
    const sql = "INSERT INTO photoevents (url, description, nom) VALUES (?, ?, ?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [url, description, nom], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.deletePhotoevents = (req, res) => {
    // Récupération des valeurs depuis le corps de la requête
    const nom = req.body.nom;

    // Suppression sur base du nom
    const sql = "DELETE FROM photoevents WHERE nom = (?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [nom], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};