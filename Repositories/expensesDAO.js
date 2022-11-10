const Expenses = require('../Models/expenses.schema');

const addExpense = async (entities) => {
  try {
    const { expense, expenseType } = entities;

    const newExpense = await new Expenses({ expense, expenseType });
    const savedExpense = await newExpense.save();

    return savedExpense;
  } catch (error) {
    throw error;
  }
};

const getExpensesByParent = async (parent) => {
  try {
    const expenses = await Expenses.find({ parent });
    return expenses;
  } catch (error) {
    throw error;
  }
};

const getExpenseById = async (id) => {
  try {
    const expense = await Expenses.findOne({ _id: id });
    return expense
  } catch (error) {
    throw error;
  }
};

const updateExpense = async () => {
  try {
    
  } catch (error) {
    throw error;
  }
};

const deleteExpense = async (id) => {
  try {
    const deletedExpense = await Expenses.findOneAndDelete({ _id: id });
    return deleteExpense;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addExpense,
  getExpensesByParent,
  getExpenseById,
  deleteExpense,
};