import React, { useState } from 'react';
import { addFlight } from '../services/api';

const FlightForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    flightNumber: '',
    destination: '',
    capacity: '',
    departureTime: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addFlight(formData);
    onAdd();
    setFormData({
      flightNumber: '',
      destination: '',
      capacity: '',
      departureTime: ''
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-4 w-full max-w-md mx-auto"
    >
      <h2 className="text-lg font-semibold text-center">🛫 Add Flight</h2>

      <input
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Flight Number"
        value={formData.flightNumber}
        onChange={e => setFormData({ ...formData, flightNumber: e.target.value })}
        required
      />

      <input
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Destination"
        value={formData.destination}
        onChange={e => setFormData({ ...formData, destination: e.target.value })}
        required
      />

      <input
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Capacity"
        type="number"
        value={formData.capacity}
        onChange={e => setFormData({ ...formData, capacity: e.target.value })}
        required
      />

      <input
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="datetime-local"
        value={formData.departureTime}
        onChange={e => setFormData({ ...formData, departureTime: e.target.value })}
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
      >
      Add Flight
      </button>
    </form>
  );
};

export default FlightForm;
