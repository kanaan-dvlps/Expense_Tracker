const Expense = require('../Models/expenses.schema');

const addExpense = async (entities) => {
  try {
    const { amount, type } = entities;

    const newExpense = await new Expense({ amount, type });
    const savedExpense = await newExpense.save();

    return savedExpense;
  } catch (error) {
    throw new BadRequest(error);
  }
};

const getExpenses = async () => {
  try {
    const expenses = await Expense.find({});
    return expenses;
  } catch (error) {
    throw new BadRequest(error);
  }
};

const getExpenseById = async (id) => {
  try {
    const expense = await Expense.findOne({ _id: id });
    return expense;
  } catch (error) {
    throw new BadRequest(error);
  }
};
const deleteExpense = async (id) => {
  try {
    const deletedExpense = await Expense.findOneAndDelete({ _id: id });
    return deletedExpense;
  } catch (error) {
    throw new BadRequest(error);
  }
};

const sumOfExpenses = async () => {
  try {

    const result = await Expense.aggregate([{
      $group: {
        _id: '',
        'amount': { $sum: '$amount' }
      }
    }, {
      $project: {
        _id: 0,
        'Total': '$amount'
      }
    }]);
    return result;

  } catch (error) {
    // throw new BadRequest(error);
    return error.message;
  }
}

module.exports = {
  addExpense,
  getExpenses,
  getExpenseById,
  deleteExpense,
  sumOfExpenses,
};