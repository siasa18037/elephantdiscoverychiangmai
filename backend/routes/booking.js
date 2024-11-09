const express = require('express');
const { getAllBooking , addNewBooking ,getBookingById} = require('../controllers/Booking');

const router = express.Router();

router.get('/', getAllBooking );
router.post('/', addNewBooking );
router.get('/:id_booking', getBookingById );

module.exports = router;
