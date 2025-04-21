import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const TerminalUsageChart = ({ flights }) => {
  const terminalCount = {};
  flights.forEach(f => {
    const t = f.terminal || 'N/A';
    terminalCount[t] = (terminalCount[t] || 0) + 1;
  });

  const data = Object.entries(terminalCount).map(([name, value]) => ({ name, value }));
  const colors = ['#63b3ed', '#f6ad55', '#68d391', '#fc8181', '#9f7aea', '#f56565'];

  return (
    <div className="chart-box flex flex-col items-center justify-center p-6 bg-white shadow rounded-lg">
      <h3 className="chart-title text-lg font-semibold mb-4">🛫 Terminal Usage</h3>
      <PieChart width={320} height={280}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={90}
          innerRadius={40}
          paddingAngle={5}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout="horizontal" verticalAlign="bottom" align="center" />
      </PieChart>
    </div>
  );
};

export default TerminalUsageChart;
