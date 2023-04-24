const mysql = require("mysql");
const pool = mysql.createPool({
    host: '34.79.25.79',
    user: 'root',
    password: 'admin',
    database: 'siteKabori',
    connectionLimit: 10 // Nombre maximal de connexions dans la pool
});

exports.getAllProd = (req, res) => {
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM produits", (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.getProdCol = (req, res) => {
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

exports.getProdNom = (req, res) => {
    const nom = req.params.nom

    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM produits WHERE nom = ?", [nom], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.getProdCateg = (req, res) => {
    const categ = req.params.categ

    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM produits WHERE categ = ?", [categ], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.getProdPrix = (req, res) => {
    const prix = req.params.prix

    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM produits WHERE prix = ?", [prix], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.getProdColCateg = (req, res) => {
    const col = req.params.col;
    const categ = req.params.categ;

    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM produits WHERE collection = ? AND categ = ?", [col, categ], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.getProdColPrix = (req, res) => {
    const col = req.params.col;
    const prix = req.params.prix;

    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM produits WHERE collection = ? AND prix = ?", [col, prix], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.getProdCategPrix = (req, res) => {
    const categ = req.params.categ;
    const prix = req.params.prix;

    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM produits WHERE categ = ? AND prix = ?", [categ,prix], (err, result, fields) => {
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
    const nom = req.params.nom;
    const col = req.params.col;
    const categ = req.params.categ;


    // Suppression sur base du nom de la collection ou de la catégorie
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
    const nomProd = req.params.nom
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