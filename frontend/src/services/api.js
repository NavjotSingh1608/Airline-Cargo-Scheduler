import axios from 'axios'
const BASE = `${import.meta.env.VITE_API_BASE || 'http://localhost:5000'}/api`;

export const getAllFlights = async () => (await axios.get(`${BASE}/flights`)).data;
export const getAllCargo = async () => (await axios.get(`${BASE}/cargo`)).data;
export const addFlight = async (data) => (await axios.post(`${BASE}/flights`, data)).data;
export const addCargo = async (data) => (await axios.post(`${BASE}/cargo`, data)).data;

