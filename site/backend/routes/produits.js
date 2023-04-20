const express = require('express');
const {getAllProd, deleteProd, postProd, updateProd, getProdCol, getProdNom, getProdCateg, getProdPrix, getProdColCateg,
getProdColPrix, getProdCategPrix
} = require("../controllers/produits");
const router = express.Router();

router.get('/', getAllProd);
router.get('/:nom',getProdNom);
router.get('/:col', getProdCol);
router.get('/:categ',getProdCateg);
router.get('/:prix',getProdPrix);
router.get('/:col/:categ', getProdColCateg);
router.get('/:col/:prix', getProdColPrix);
router.get('/:categ/:prix', getProdCategPrix);

router.post('/', postProd);

router.delete('/:nom/:col/:categ', deleteProd);

router.put('/:nom', updateProd);

module.exports = router;