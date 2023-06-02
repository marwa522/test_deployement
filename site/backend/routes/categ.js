const express = require('express');
const {getCateg, deleteCateg, postCateg, updateCateg} = require("../controllers/categ");
const router = express.Router();

router.get('/', getCateg);
router.post('/', postCateg);
router.delete('/', deleteCateg);
router.put('/', updateCateg);

module.exports = router;