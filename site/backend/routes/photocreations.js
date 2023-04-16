const express = require('express');
const {getPhotocreations} = require("../controllers/photocreations");
const router = express.Router();

router.get('/', getPhotocreations);

module.exports = router;