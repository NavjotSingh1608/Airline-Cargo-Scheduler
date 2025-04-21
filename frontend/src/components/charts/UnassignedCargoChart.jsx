import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Label } from 'recharts';

const UnassignedCargoChart = ({ cargo }) => {
  const unassigned = cargo.filter(c => !c.assignedFlight);
  const grouped = {};

  unassigned.forEach(c => {
    grouped[c.destination] = (grouped[c.destination] || 0) + 1;
  });

  const data = Object.entries(grouped).map(([name, value]) => ({ name, value }));

  return (
    <div className="chart-box bg-white rounded-lg shadow p-6">
      <h3 className="chart-title text-lg font-semibold text-center mb-4">
        📦 Unassigned Cargo by Destination
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" label={{ value: 'Destination', position: 'insideBottom', offset: -5 }} />
          <YAxis>
            <Label value="Count" angle={-90} position="insideLeft" />
          </YAxis>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length > 0) {
                const entry = payload[0];
                return (
                  <div className="bg-white p-2 border border-gray-300 rounded shadow text-sm">
                    <strong>{entry.payload.name}</strong>: {entry.payload.value} items
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="value" fill="#ECC94B" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UnassignedCargoChart;
