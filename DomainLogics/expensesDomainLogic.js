const { createExpenseOutboundPort } = require('../Ports/Outbound/createExpenseOutboundPort');
const { getExpenseByIdOutboundPort } = require('../Ports/Outbound/getExpenseByIdOutboundPort');
const { getExpensesOutboundPort } = require('../Ports/Outbound/getExpensesOutboundPort');
const { deleteExpenseOutboundPort } = require('../Ports/Outbound/deleteExpenseOutboundPort');

const addExpense = async (data) => {
  try {
    const newExpense = await createExpenseOutboundPort(data);
    return newExpense;

  } catch (error) {
    throw new BadRequest(error);
  }
};

const getExpenseById = async (id) => {
  try {

    const expense = await getExpenseByIdOutboundPort(id);
    return expense;

  } catch (error) {
    throw new BadRequest(error);
  }
};

const getExpenses = async () => {
  try {

    const expenses = await getExpensesOutboundPort();
    return expenses;

  } catch (error) {
    throw error;
  }
};

const deleteExpense = async (id) => {
  try {

    const deletedExpense = await deleteExpenseOutboundPort(id);
    return deletedExpense;

  } catch (error) {
    throw error
  }
}
module.exports = {
  addExpense,
  getExpenseById,
  getExpenses,
  deleteExpense,
};