const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
  amount: { type: Number },
  type: { type: String },
});

const incomeModel = mongoose.model('income', incomeSchema);
module.exports = incomeModel;