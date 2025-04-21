import React from 'react';

const FlightTable = ({ flights }) => {
  const getCargoList = (cargo) =>
    cargo.map(c => `${c.name} (${c.weight}kg)`).join(', ');

  return (
    <div className="bg-white p-6 rounded-lg shadow overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">📋 Scheduled Flights</h2>
      <table className="min-w-full border border-gray-200 text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="px-4 py-2 border">Flight</th>
            <th className="px-4 py-2 border">Destination</th>
            <th className="px-4 py-2 border">Terminal</th>
            <th className="px-4 py-2 border">Departure</th>
            <th className="px-4 py-2 border">Capacity</th>
            <th className="px-4 py-2 border">Cargo Load</th>
            <th className="px-4 py-2 border">Cargo</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(flight => (
            <tr key={flight._id} className="text-center even:bg-gray-50">
              <td className="px-4 py-2 border font-medium">{flight.flightNumber}</td>
              <td className="px-4 py-2 border">{flight.destination}</td>
              <td className="px-4 py-2 border">{flight.terminal || 'N/A'}</td>
              <td className="px-4 py-2 border">
                {new Date(flight.departureTime).toLocaleString([], {
                  dateStyle: 'short',
                  timeStyle: 'short',
                })}
              </td>
              <td className="px-4 py-2 border">{flight.capacity} kg</td>
              <td className="px-4 py-2 border">{flight.capacity - flight.remainingCapacity} kg</td>
              <td className="px-4 py-2 border text-left">
                {flight.cargo?.length ? getCargoList(flight.cargo) : '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightTable;
