// models/Transaction.js
const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  account_id: { type: Number, ref: 'Account' },
  transaction_count: Number,
  bucket_start_date: { type: mongoose.Schema.Types.Mixed },
  bucket_end_date: { type: mongoose.Schema.Types.Mixed },
  transactions: [
    {
      date: { type: mongoose.Schema.Types.Mixed },
      amount: Number,
      transaction_code: String,
      symbol: String,
      price: Number,
      total: Number,
    },
  ],
});

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;
