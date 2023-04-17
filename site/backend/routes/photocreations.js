const express = require('express');
const {getPhotocreations, postPhotocreations, deletePhotocreations} = require("../controllers/photocreations");
const router = express.Router();

router.get('/', getPhotocreations);
router.post('/', postPhotocreations);
router.delete('/:nom', deletePhotocreations);

module.exports = router;