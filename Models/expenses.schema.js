const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  expense: { type: Number },
  parent: { type: 'expense' },
  expenseType: { type: String },
});

expenseSchema.index({ parent: 1 });

const expenseModel = mongoose.model('expense', expenseSchema);
module.exports = expenseModel;