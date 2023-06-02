const express = require('express');
const {getAvis, deleteAvis, postAvis} = require("../controllers/avis");
const router = express.Router();

router.get('/', getAvis);
router.post('/', postAvis);
router.delete('/', deleteAvis);

module.exports = router;