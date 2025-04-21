
const express = require('express');
const router = express.Router();
const { getAllFlights, createFlight } = require('../controllers/flightController');

router.get('/', getAllFlights);   
router.post('/', createFlight);    

module.exports = router;
