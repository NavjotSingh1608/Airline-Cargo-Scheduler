const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const flightRoutes = require('./routes/flightRoutes');
const cargoRoutes = require('./routes/cargoRoutes');
require('./database/db');

dotenv.config();
const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URI,
    credentials: true, 
  }));
app.use(express.json());

app.use('/api/flights', flightRoutes);
app.use('/api/cargo', cargoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
