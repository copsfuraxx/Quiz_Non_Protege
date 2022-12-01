const express = require('express');
const { hello, receiveQuestion } = require('../controllers/homeController');
const router = express.Router();

router.get('/hello', hello);
router.post('/question', receiveQuestion);
//router.post('/addBike', validateAddBike, checkAddBikeValidity, addBike)

module.exports = router;
