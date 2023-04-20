const mysql = require("mysql");
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'gestiondeprojet',
    connectionLimit: 10 // Nombre maximal de connexions dans la pool
});

/*exports.getAllProd = (req, res) => {
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM produits", (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};*/

exports.getColProd = (req, res) => {
    const col = req.params.col

    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM produits WHERE collection = ?", [col], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.postProd = (req, res) => {
    // Récupération des valeurs depuis le corps de la requête
    const nom = req.body.nom;
    const photo1 = req.body.photo1;
    const photo2 = req.body.photo2;
    const photo3 = req.body.photo3;
    const photo4 = req.body.photo4;
    const categ = req.body.categ;
    const col = req.body.col;
    const description = req.body.description;
    const prix = req.body.prix;


    // Requête d'insertion avec des valeurs paramétrées pour éviter les attaques par injection SQL
    const sql = "INSERT INTO produits (nom,photo1,photo2,photo3,photo4,categ,collection,description,prix) VALUES (?,?,?,?,?,?,?,?,?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [nom,photo1,photo2,photo3,photo4,categ,col,description,prix], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.deleteProd = (req, res) => {
    // Récupération des valeurs depuis le corps de la requête
    const nom = req.body.nom;
    const col = req.body.col;
    const categ = req.body.categ;


    // Suppression sur base du nom
    const sql = "DELETE FROM produits WHERE (nom = ? OR collection = ? OR categ = ? )";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [nom, col, categ], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.updateProd = (req, res) => {
    // Récupération des valeurs depuis le corps de la requête
    const nomProd = req.body.nom
    const valMisAJour = {
        nom : req.body.nom,
        photo1 : req.body.photo1,
        photo2 : req.body.photo2,
        photo3 : req.body.photo3,
        photo4 : req.body.photo4,
        categ :req.body.categ,
        col : req.body.col,
        description : req.body.description,
        prix : req.body.prix
    }

    // Suppression sur base du nom
    const sql = "UPDATE produits SET ? WHERE nom = (?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [valMisAJour, nomProd], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};