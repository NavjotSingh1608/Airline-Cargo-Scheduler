
const { assignTerminal } = require('../utils/heuristics');

exports.scheduleFlight = (flight) => {
  flight.terminal = assignTerminal(flight.departureTime);
  flight.remainingCapacity = flight.capacity;
  flight.cargo = [];
};
