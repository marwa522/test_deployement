const express = require('express');
const {getAllClients, getClientsNom, getClientsPrenom, getClientsMail, getClientsNum, postClients, deleteClients} = require("../controllers/clients");
const router = express.Router();

router.get('/', getAllClients);
router.get('/:nom', getClientsNom);
router.get ('/:prenom', getClientsPrenom);
router.get('/:email', getClientsMail);
router.get('/:num', getClientsNum);

router.post('/', postClients);


router.delete('/:id/:nom/:email', deleteClients);


module.exports = router;