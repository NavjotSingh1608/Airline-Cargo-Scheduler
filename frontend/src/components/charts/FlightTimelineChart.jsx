import React from 'react';
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  CartesianGrid
} from 'recharts';

const COLORS = ['#3182CE', '#38A169', '#ED8936', '#D53F8C', '#805AD5', '#ECC94B', '#319795'];

const FlightTimelineChart = ({ flights }) => {
  const now = new Date();

  const getDateLabel = (date) =>
    date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  const upcomingFlights = flights
    .filter(f => new Date(f.departureTime) > now)
    .map((f, index) => {
      const dt = new Date(f.departureTime);
      const hour = dt.getHours() + dt.getMinutes() / 60;
      return {
        x: hour,
        y: getDateLabel(dt),
        flightNumber: f.flightNumber,
        destination: f.destination,
        terminal: f.terminal,
        timeLabel: dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        color: COLORS[index % COLORS.length],
      };
    });

  const nowHour = now.getHours() + now.getMinutes() / 60;

  return (
    <div className="chart-box bg-white rounded-lg shadow p-6">
      <h3 className="chart-title text-lg font-semibold text-center mb-4">🗓️ Flight Schedule by Date & Time</h3>
      <ResponsiveContainer width="100%" height={350}>
        <ScatterChart margin={{ top: 20, right: 30, bottom: 40, left: 60 }}>
          <CartesianGrid stroke="#e5e7eb" />
          <XAxis
            type="number"
            dataKey="x"
            domain={[0, 24]}
            name="Departure Time"
            tickFormatter={(tick) =>
              `${String(Math.floor(tick)).padStart(2, '0')}:${String(Math.round((tick % 1) * 60)).padStart(2, '0')}`
            }
            label={{ value: 'Time (HH:MM)', position: 'insideBottom', offset: -10 }}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            type="category"
            dataKey="y"
            name="Date"
            label={{ value: 'Date', angle: -90, position: 'insideLeft' }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            cursor={{ strokeDasharray: '3 3' }}
            content={({ active, payload }) => {
              if (active && payload && payload.length > 0) {
                const data = payload[0].payload;
                return (
                  <div className="bg-white p-3 border border-gray-300 rounded shadow text-sm">
                    <strong className="block mb-1">✈️ Flight {data.flightNumber}</strong>
                    <div>🕓 {data.timeLabel} on {data.y}</div>
                    <div>📍 {data.destination}</div>
                    <div>🏢 Terminal: {data.terminal || 'N/A'}</div>
                  </div>
                );
              }
              return null;
            }}
          />
          <ReferenceLine x={nowHour} stroke="red" label="Now" />
          <Scatter data={upcomingFlights} fill="#3182CE" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FlightTimelineChart;
