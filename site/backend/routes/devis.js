const express = require('express');
const {getDevis, postDevis} = require("../controllers/devis");
const router = express.Router();

router.get('/', getDevis);
router.post('/', postDevis);


module.exports = router;
