exports.canAssignCargo = (flight, cargo) => {
    return (
      flight.destination === cargo.destination &&
      flight.remainingCapacity >= cargo.weight
    );
  };
  