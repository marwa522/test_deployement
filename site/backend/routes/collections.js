const express = require('express');
const {getCollections, postCollections, deleteCollections} = require("../controllers/collections");
const router = express.Router();

router.get('/', getCollections);
router.post('/', postCollections);
router.delete('/', deleteCollections);

module.exports = router;