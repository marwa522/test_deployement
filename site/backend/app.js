const express = require('express');

const app = express();

const mysql = require('mysql');

const cors = require('cors');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database : "gestiondeprojet"
});

// Créer une connexion pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'gestiondeprojet',
  connectionLimit: 10 // Nombre maximal de connexions dans la pool
});

// Configurer les options CORS
const corsOptions = {
  origin: '*', // Mettre l'origine autorisée de votre choix, ou '*' pour autoriser toutes les origines
  methods: 'GET, POST, PUT, DELETE, PATCH, OPTIONS', // Spécifier les méthodes autorisées
  allowedHeaders: 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization', // Spécifier les en-têtes autorisés
};
app.get('/photoevent', (req, res) => {
  // Obtenir une connexion à partir de la pool
  pool.getConnection((err, con) => {
    if (err) throw err;
    con.query("SELECT * FROM tbphotoevent", (err, result, fields) => {
      // Libérer la connexion une fois la requête terminée
      con.release();
      if (err) throw err;
      res.json(result);
    });
  });
});
app.get('/photocreations', (req, res) => {

  pool.getConnection((err, con) => {
    if (err) throw err;
    con.query("SELECT * FROM tbphotocreations", (err, result, fields) => {
      con.release();
      if (err) throw err;
      res.json(result);
    });
  });
});


// Activer CORS avec les options configurées pour toutes les requêtes
app.use(cors(corsOptions));
app.use(express.json());
module.exports = app;