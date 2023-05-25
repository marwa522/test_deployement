const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const avisRoutes = require('./routes/avis');
const clientsRoutes = require('./routes/clients');
const eventRoutes = require('./routes/photoevents');
const creationsRoutes = require('./routes/photocreations');
const collectionsRoutes = require('./routes/collections');
const categRoutes = require('./routes/categ');
const prodRoutes = require('./routes/produits');
const contactRoutes = require('./routes/contact');
const devisRoutes = require('./routes/devis');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mysql.createConnection({
  host: "34.79.25.79",
  user: "root",
  password: "admin",
  database: "siteKabori"
});
// Créer une connexion
const pool = mysql.createPool({
  host: '34.79.25.79',
  user: 'root',
  password: 'admin',
  database: 'siteKabori',
  connectionLimit: 20 // Nombre maximal de connexions dans la pool
});

// Configurer les options CORS
const corsOptions = {
  origin: '*', // Mettre l'origine autorisée de votre choix, ou '*' pour autoriser toutes les origines
  methods: 'GET, POST, PUT, DELETE, PATCH, OPTIONS', // Spécifier les méthodes autorisées
  allowedHeaders: 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization', // Spécifier les en-têtes autorisés
};

// Activer CORS avec les options configurées pour toutes les requêtes
app.use(cors(corsOptions));

// Différents appels API
app.use('/avis', avisRoutes);
app.use('/categ', categRoutes);
app.use('/clients', clientsRoutes);
app.use('/collections', collectionsRoutes);
app.use('/contact', contactRoutes);
app.use('/photoevents', eventRoutes);
app.use('/photocreations', creationsRoutes);
app.use('/prod', prodRoutes);
app.use('/devis', devisRoutes);

module.exports = app;
