
const express = require('express');
const { data_product } = require('../controllers/data');

const router = express.Router();


router.get('/product', data_product );


module.exports = router;
