const mysql = require("mysql");
const pool = mysql.createPool({
    host: '34.79.25.79',
    user: 'root',
    password: 'admin',
    database: 'siteKabori',
    connectionLimit: 10 // Nombre maximal de connexions dans la pool
});

exports.getAllClients = (req, res) => {
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM clients", (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.getClientsNom = (req, res) => {
    const nom = req.params.nom

    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM clients WHERE nom = ?", [nom], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.getClientsPrenom = (req, res) => {
    const prenom = req.params.prenom

    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM clients WHERE prenom = ?", [prenom], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.getClientsMail = (req, res) => {
    const email = req.params.email

    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM clients WHERE email = ?", [email], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.getClientsNum = (req, res) => {
    const num = req.params.num

    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM clients WHERE num = ?", [num], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.postClients = (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const adresse = req.body.adresse;
    const email = req.body.email;
    const num = req.body.num;
    const motdepasse = req.body.motdepasse;


    // Requête d'insertion avec des valeurs paramétrées pour éviter les attaques par injection SQL
    const sql = "INSERT INTO clients (nom,prenom,adresse,email,num,motdepasse) VALUES (?,?,?,?,?,?)";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [nom,prenom,adresse,email,num,motdepasse], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.deleteClients = (req, res) => {
    // Récupération des valeurs depuis le corps de la requête
    const id = req.params.id;
    const nom = req.params.nom;
    const email = req.params.email;


    // Suppression sur base du nom de la collection ou de la catégorie
    const sql = "DELETE FROM clients WHERE (id = ? OR nom = ? OR email = ? )";
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query(sql, [id, nom, email], (err, result, fields) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};