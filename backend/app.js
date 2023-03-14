const express = require('express');

const app = express();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database : "gestiondeprojet"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM tbcommandes", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  /**con.query("SELECT * FROM tbavis", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  con.query("SELECT idCommandes,prénomClient FROM tbcommandes JOIN tbclients WHERE idClients = '0001'", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });**/
});


app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


module.exports = app;