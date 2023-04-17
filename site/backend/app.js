const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const mysql = require('mysql');

const cors = require('cors');

app.use(bodyParser.json());

const eventRoutes = require('./routes/photoevents');

const creationsRoutes = require('./routes/photocreations');

const collectionsRoutes = require('./routes/collections')


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

// Activer CORS avec les options configurées pour toutes les requêtes
app.use(cors(corsOptions));

//Différents appels API
app.use('/photoevents', eventRoutes);
app.use('/photocreations',creationsRoutes);
app.use('/collections',collectionsRoutes);

app.use(express.json());
module.exports = app;