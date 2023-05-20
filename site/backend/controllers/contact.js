
const mysql = require("mysql");
const nodemailer = require('nodemailer');

const pool = mysql.createPool({
    host: '34.79.25.79',
    user: 'root',
    password: 'admin',
    database: 'siteKabori',
    connectionLimit: 20
});
exports.getContact= (req, res) => {
    pool.getConnection((err, con) => {
        if (err) throw err;
        con.query("SELECT * FROM contact", (err, result) => {
            con.release();
            if (err) throw err;
            res.json(result);
        });
    });
};

exports.postContact = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;

    const sql = "INSERT INTO contact (name, email, phone, message) VALUES (?, ?, ?, ?)";
    pool.getConnection((err, con) => {
        if (err) {
            console.log(err);
            res.status(500).send('Erreur lors de la connexion à la base de données');
            return;
        }
        con.query(sql, [name, email, phone, message], (err) => {
            con.release();
            if (err) {
                console.log(err);
                res.status(500).send('Erreur lors de l\'insertion des données dans la base de données');
                return;
            }
            sendEmail(name, email, message, res);
        });
    });
};

function sendEmail(name, email, message, res) {
    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false,
        auth: {
            user: 'marwachennaoui@outlook.be',
            pass: 'Tostos123@',
        },
        tls: {
            ciphers: 'SSLv3'
        }
    });

    const mailOptions = {
        from: 'marwachennaoui@outlook.be' ,
        to: 'safachennaoui12@gmail.com',
        subject: 'Nouveau message de formulaire de contact',
        html: `
            <p>Nouveau message de formulaire de contact:</p>
            <ul>
                <li><strong>Nom:</strong> ${name}</li>
                <li><strong>E-mail:</strong> ${email}</li>
                <li><strong>Message:</strong> ${message}</li>
            </ul>
        `
    };

    transporter.sendMail(mailOptions)
        .then((info) => {
            console.log('Message envoyé: %s', info.messageId);
            res.json({message: 'Le message a été envoyé avec succès.'});
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({message: 'Une erreur est survenue lors de l\'envoi du message.'});
        });
}
















