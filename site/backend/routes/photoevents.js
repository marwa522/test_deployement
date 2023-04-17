const express = require('express');
const mysql = require("mysql");
const router = express.Router();
const photoeventsCtrl = require('../controllers/photoevents');


router.get('/',photoeventsCtrl.getPhotoevents );
router.post('/',photoeventsCtrl.postPhotoevents );
router.delete('/',photoeventsCtrl.deletePhotoevents );

module.exports = router;