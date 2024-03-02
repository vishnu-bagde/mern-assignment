// models/Account.js
const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  account_id: { type: Number, required: true, unique: true, },
  limit: Number,
  products: [String],
});

const Account = mongoose.model("Account", AccountSchema);

module.exports = Account;
