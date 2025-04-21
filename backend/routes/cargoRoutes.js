const express = require('express');
const router = express.Router();
const { getAllCargo, addCargo } = require('../controllers/cargoController');

router.get('/', getAllCargo);
router.post('/', addCargo);

module.exports = router;
