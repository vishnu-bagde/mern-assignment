const Customer = require("../models/Customer");

exports.getActiveCustomers = async (req, res) => {
  try {
    const activeCustomers = await Customer.find({ active: true });
    return res.json(activeCustomers);
  } catch (error) {
    console.error("Error fetching active customers:", error.message);
    res.status(500).json({ message: error.message });
  }
};
