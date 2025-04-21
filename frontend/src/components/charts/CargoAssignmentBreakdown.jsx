import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CargoAssignmentBreakdown = ({ cargo }) => {
  const assigned = cargo.filter(c => c.assignedFlight).length;
  const unassigned = cargo.length - assigned;

  const data = [
    { name: 'Assigned', value: assigned },
    { name: 'Unassigned', value: unassigned },
  ];
  const colors = ['#38B2AC', '#E53E3E'];

  return (
    <div className="chart-box bg-white rounded-lg shadow p-6">
      <h3 className="chart-title text-lg font-semibold text-center mb-4">📊 Cargo Assignment Breakdown</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length > 0) {
                const entry = payload[0];
                return (
                  <div className="bg-white p-2 border border-gray-300 rounded shadow text-sm">
                    <strong>{entry.name}</strong>: {entry.value}
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CargoAssignmentBreakdown
