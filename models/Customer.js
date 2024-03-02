// models/Customer.js
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: String,
  address: String,
  birthdate: { type: mongoose.Schema.Types.Mixed },
  email: { type: String, required: true, unique: true },
  active: Boolean,
  accounts: [{ type: Number, ref: 'Account' }],
  tier_and_details: { type: Object },
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
