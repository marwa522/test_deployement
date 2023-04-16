const express = require('express');
const mysql = require("mysql");
const router = express.Router();
const photoeventsCtrl = require('../controllers/photoevents');


router.get('/',photoeventsCtrl.getPhotoevents );

module.exports = router;