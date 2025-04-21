import React, { useState } from 'react';
import { addCargo } from '../services/api';

const CargoForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    weight: '',
    destination: '',
    priority: 1
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCargo(formData);
    onAdd();
    setFormData({
      name: '',
      weight: '',
      destination: '',
      priority: 1
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-4 w-full max-w-md mx-auto"
    >
      <h2 className="text-lg font-semibold text-center">📦 Add Cargo</h2>

      <input
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Cargo Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />

      <input
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Weight (kg)"
        type="number"
        value={formData.weight}
        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
        required
      />

      <input
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Destination"
        value={formData.destination}
        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
        required
      />

      <input
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Priority (1-5)"
        type="number"
        min="1"
        max="5"
        value={formData.priority}
        onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
      />

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
      >
      Add Cargo
      </button>
    </form>
  );
};

export default CargoForm;
