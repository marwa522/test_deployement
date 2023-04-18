const express = require('express');
const {getProd, deleteProd, postProd, updateProd} = require("../controllers/produits");
const router = express.Router();

router.get('/', getProd);
router.post('/', postProd);
router.delete('/', deleteProd);
router.put('/', updateProd);

module.exports = router;