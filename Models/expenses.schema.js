const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  expense: { type: Number },
  category: { type: String },
})