const mongoose = require('mongoose');

const balanceSchema = new mongoose.Schema({
  amount: { type: Number },
  type: { type: String },
});

const balanceModel = mongoose.model('balance', balanceSchema);
module.exports = balanceModel;