const Flight = require('../models/Flight');
const { scheduleFlight } = require('../services/scheduler');

exports.getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find()
      .populate({
        path: 'cargo',
        select: 'name weight assignedFlight',
      });

    res.json(flights);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createFlight = async (req, res) => {
  try {
    const flight = new Flight(req.body);
    scheduleFlight(flight);
    await flight.save();
    res.status(201).json(flight);
  } catch (err) {
    console.error("Flight creation error:", err);
    res.status(500).json({ error: err.message });
  }
};
