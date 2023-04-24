const mysql = require("mysql");
const pool = mysql.createPool({
    host: '34.79.25.79',
    user: 'root',
    password: 'admin',
    database: 'siteKabori',
    connectionLimit: 10 // Nombre maximal de connexions dans la pool
});

exports.getCateg = (req, res) => {
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM categ", (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.postCateg = (req, res) => {
    // Récupération des valeurs depuis le corps de la requête
    const description = req.body.description;
    const nom = req.body.nom;

    // Requête d'insertion avec des valeurs paramétrées pour éviter les attaques par injection SQL
    const sql = "INSERT INTO categ (nom, description) VALUES (?, ?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [nom, description], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.deleteCateg = (req, res) => {
    // Récupération des valeurs depuis le corps de la requête
    const nom = req.body.nom;

    // Suppression sur base du nom
    const sql = "DELETE FROM categ WHERE nom = (?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [nom], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.updateCateg = (req, res) => {
    // Récupération des valeurs depuis le corps de la requête
    const nomCateg = req.body.nom
    const valMisAJour = {
        nom : req.body.nom,
        description : req.body.description
    }

    // Suppression sur base du nom
    const sql = "UPDATE categ SET ? WHERE nom = (?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [valMisAJour, nomCateg], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};