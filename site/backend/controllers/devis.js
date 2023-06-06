const mysql = require("mysql");
const nodemailer = require('nodemailer');

const pool = mysql.createPool({
    host: '34.79.25.79',
    user: 'root',
    password: 'admin',
    database: 'siteKabori',
    connectionLimit: 100
});

exports.getDevis = (req, res) => {
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM commandes", (err, result) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.postDevis = (req, res) => {
    const client = req.body.nom;
    const emailclient = req.body.email;
    const produit = req.body.modele;
    const descriptionClient = req.body.remarque;
    const statut = 'Devis demandé';

    const sql = "INSERT INTO commandes (client, emailclient, produit, descriptionClient, statut) VALUES (?, ?, ?, ?, ?)";

    pool.getConnection((err, con) => {
        if (err) {
            console.log(err);
            res.status(500).send('Erreur lors de la connexion à la base de données');
            return;
        }
        con.query(sql, [client, emailclient, produit, descriptionClient, statut], (err) => {
            con.release();
            if (err) {
                console.log(err);
                res.status(500).send('Erreur lors de l\'insertion des données dans la base de données');
                return;
            }
            sendEmail(client, emailclient, produit, descriptionClient, statut, res);
        });
    });
};

function sendEmail(client, emailclient, produit, descriptionClient, statut, res) {
    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false,
        auth: {
            user: 'sitekabori@outlook.fr',
            pass: 'Kabori123@',
        },
        tls: {
            ciphers: 'SSLv3'
        }
    });

    const mailOptions = {
        from: 'sitekabori@outlook.fr',
        to: 'chennaouimarwa0@gmail.com',
        subject: 'Nouvelle demande de devis',
        html: `
            <p>Nouvelle demande de devis :</p>
            <ul>
                <li><strong>Client :</strong> ${client}</li>
                <li><strong>Email du client :</strong> ${emailclient}</li>
                <li><strong>Produit :</strong> ${produit}</li>
                <li><strong>Description du client :</strong> ${descriptionClient}</li>
            </ul>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            if (res && typeof res.status === "function") {
                res.status(500).json({ message: "Une erreur est survenue lors de l'envoi de la commande." });
            } else {
                console.error("Erreur lors de l'envoi de la commande :", error);
            }
        } else {
            console.log('Message envoyé: %s', info.messageId);
            res.json({ message: 'La commande a été envoyée avec succès.' });
        }
    });
}
