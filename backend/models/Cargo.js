const mongoose = require('mongoose');

const cargoSchema = new mongoose.Schema({
  name: String,
  weight: Number,
  destination: String,
  priority: { type: Number, default: 3 }, // 1: High, 2: Medium, 3: Low
  assignedFlight: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight', default: null }
});

module.exports = mongoose.model('Cargo', cargoSchema);
