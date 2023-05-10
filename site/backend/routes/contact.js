const express = require('express');
const {getContact, postContact } = require("../controllers/contact");
const router = express.Router();

router.get('/', getContact);
router.post('/', postContact);


module.exports = router;
