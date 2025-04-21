import React, { useEffect, useState } from 'react';
import { getAllFlights, getAllCargo } from './services/api';
import FlightForm from './components/FlightForm';
import CargoForm from './components/CargoForm';
import FlightTable from './components/FlightTable';
import FlightTimelineChart from './components/charts/FlightTimelineChart';
import TerminalUsageChart from './components/charts/TerminalUsageChart';
import CargoLoadChart from './components/charts/CargoLoadChart';
import CargoAssignmentBreakdown from './components/charts/CargoAssignmentBreakdown';
import UnassignedCargoChart from './components/charts/UnassignedCargoChart';

function App() {
  const [flights, setFlights] = useState([]);
  const [cargo, setCargo] = useState([]);

  const loadData = async () => {
    const [fetchedFlights, fetchedCargo] = await Promise.all([
      getAllFlights(),
      getAllCargo(),
    ]);
    setFlights(fetchedFlights);
    setCargo(fetchedCargo);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center text-blue-700">✈️ Airline & Cargo Scheduler</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FlightForm onAdd={loadData} />
        <CargoForm onAdd={loadData} />
      </div>

      <FlightTable flights={flights} />

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">📊 Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-4">
            <FlightTimelineChart flights={flights} />
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <TerminalUsageChart flights={flights} />
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <CargoLoadChart flights={flights} />
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <CargoAssignmentBreakdown cargo={cargo} />
          </div>
          <div className="bg-white rounded-lg shadow p-4 col-span-1 md:col-span-2">
            <UnassignedCargoChart cargo={cargo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
