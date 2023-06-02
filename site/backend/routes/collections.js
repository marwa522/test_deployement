const express = require('express');
const {getCollections, postCollections, deleteCollections, updateCollections} = require("../controllers/collections");
const router = express.Router();

router.get('/', getCollections);
router.post('/', postCollections);
router.delete('/', deleteCollections);
router.put('/', updateCollections);

module.exports = router;