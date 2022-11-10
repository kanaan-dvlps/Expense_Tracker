const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
  income: { type: Number },
  category: { type: 'income' },
  incomeType: { type: String },
});

const incomeModel = mongoose.model('income', incomeSchema);
module.exports = incomeModel;