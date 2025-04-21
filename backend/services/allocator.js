const Flight = require('../models/Flight');
const { canAssignCargo } = require('../utils/logicEngine');

exports.allocateCargo = async (cargo) => {
  const now = new Date();

  const flights = await Flight.find({
    destination: cargo.destination,
    departureTime: { $gt: now }
  });

  flights.sort((a, b) => new Date(a.departureTime) - new Date(b.departureTime));

  for (let flight of flights) {
    if (canAssignCargo(flight, cargo)) {
      flight.remainingCapacity -= cargo.weight;
      flight.cargo.push(cargo._id);
      await flight.save();

      cargo.assignedFlight = flight._id;
      await cargo.save();

      return { cargo, flight };
    }
  }

  return { cargo, message: 'No future flight available for this cargo.' };
};
