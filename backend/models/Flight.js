const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  flightNumber: String,
  destination: String,
  departureTime: Date,
  capacity: Number,
  remainingCapacity: Number,
  terminal: Number,
  cargo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cargo' }],
});

module.exports = mongoose.model('Flight', flightSchema);
