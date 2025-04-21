import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

const CargoLoadChart = ({ flights }) => {
  const data = flights.map(f => ({
    name: f.flightNumber,
    load: f.capacity - f.remainingCapacity,
  }));

  return (
    <div className="chart-box bg-white rounded-lg shadow p-6">
      <h3 className="chart-title text-lg font-semibold text-center mb-4">📦 Cargo Load per Flight</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis
            label={{ value: 'Load (kg)', angle: -90, position: 'insideLeft' }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length > 0) {
                return (
                  <div className="bg-white p-2 border border-gray-300 rounded shadow text-sm">
                    <strong>Flight: {payload[0].payload.name}</strong><br />
                    📦 Load: {payload[0].payload.load} kg
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="load" fill="#48BB78" barSize={35} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CargoLoadChart;
