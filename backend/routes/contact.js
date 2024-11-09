const express = require('express');
const { getAllContact , sendContact } = require('../controllers/contact');

const router = express.Router();

router.get('/', getAllContact );
router.post('/', sendContact );

module.exports = router;
