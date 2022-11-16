const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  amount: { type: Number },
  type: { type: String },
});

const expenseModel = mongoose.model('expense', expenseSchema);
module.exports = expenseModel;