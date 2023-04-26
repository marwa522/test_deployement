const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');
const nodemailer = require('nodemailer');

// Configuration de la base de données
const connection = mysql.createPool({
    host: "34.79.25.79",
    user: "root",
    password: "admin",
    database : "siteKabori"
});

// Route GET pour afficher la page de contact
router.get('/', async (req, res) => {
    try {
        const [rows, fields] = await connection.query('SELECT * FROM contact');
        res.render('contact', { data: rows[0] });
    } catch (err) {
        console.error(err);
        res.render('error');
    }
});

// Route POST pour envoyer le message de contact
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        // Enregistrement des données dans la base de données
        const [result, fields] = await connection.query(
            'INSERT INTO contact (name, email, message) VALUES (?, ?, ?)',
            [name, email, message]
        );
        console.log(`Nouveau message de ${name} (${email}) : ${message}`);

        // Envoi d'un email de confirmation
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'yourgmailusername',
                pass: 'yourgmailpassword'
            }
        });

        const mailOptions = {
            from: 'yourgmailusername@gmail.com',
            to: email,
            subject: 'Message de contact envoyé',
            text: 'Votre message de contact a été envoyé avec succès.'
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`Email de confirmation envoyé à ${email} : ${info.response}`);
            }
        });

        res.redirect('/contact');
    } catch (err) {
        console.error(err);
        res.render('error');
    }
});

module.exports = router;