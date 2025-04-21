const Cargo = require('../models/Cargo');
const allocator = require('../services/allocator');

exports.getAllCargo = async (req, res) => {
  const cargo = await Cargo.find().populate('assignedFlight');
  res.json(cargo);
};

exports.addCargo = async (req, res) => {
  try {
    const { name, weight, destination, priority } = req.body;

    const newCargo = new Cargo({ name, weight, destination, priority });
    await newCargo.save();

    const allocationResult = await allocator.allocateCargo(newCargo);
    res.status(201).json(allocationResult);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
