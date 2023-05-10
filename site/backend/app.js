const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const mysql = require('mysql');

const cors = require('cors');

const path = require('path');

const eventRoutes = require('./routes/photoevents');

const creationsRoutes = require('./routes/photocreations');

const collectionsRoutes = require('./routes/collections');

const categRoutes = require('./routes/categ');

const prodRoutes = require('./routes/produits');

const contactRoutes = require('./routes/contact');


//app.use(contactRouter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



const con = mysql.createConnection({
  host: "34.79.25.79",
  user: "root",
  password: "admin",
  database : "siteKabori"
});

// Créer une connexion pool
const pool = mysql.createPool({
  host: '34.79.25.79',
  user: 'root',
  password: 'admin',
  database: 'siteKabori',
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
app.use('/categ', categRoutes);
app.use('/collections',collectionsRoutes);
app.use('/photoevents', eventRoutes);
app.use('/photocreations',creationsRoutes);
app.use('/prod', prodRoutes);
app.use('/contact', contactRoutes);


app.use(express.json());
module.exports = app;






