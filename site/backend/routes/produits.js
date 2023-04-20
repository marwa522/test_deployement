const express = require('express');
const {getAllProd, deleteProd, postProd, updateProd, getColProd} = require("../controllers/produits");
const router = express.Router();

router.get('/:col', getColProd);
//router.get('/', getAllProd);
router.post('/', postProd);
router.delete('/', deleteProd);
router.put('/', updateProd);

module.exports = router;