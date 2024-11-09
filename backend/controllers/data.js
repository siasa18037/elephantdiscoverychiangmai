const express = require('express');

const app = express();

const product = require('../data/product.json')

exports.data_product = async (req, res) => {
    try {
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


