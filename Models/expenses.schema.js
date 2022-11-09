const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  expense: { type: Number },
  category: { type: 'expense' },
  expenseType: { type: String },
});

const expenseModel = mongoose.model('expense', expenseSchema);
module.exports = expenseModel;