// backend/app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const dataRoutes = require('./routes/data');
const contactRoutes = require('./routes/contact');
const bookingRoutes = require('./routes/booking');

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: process.env.REACT_APP_FRONTEND_URL,
    // origin: "*",
    credentials: true
}));


// Define routes
app.use('/data',dataRoutes);
app.use('/contact' ,contactRoutes);
app.use('/booking',bookingRoutes);

module.exports = app;
