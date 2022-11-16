const { addExpense } = require('../../DomainLogics/expensesDomainLogic');

const createExpenseInboundPort = async (data) => {
  try {
    const result = await addExpense(data);
    return result;

  } catch (error) {
    throw error;
  }
};

module.exports = { createExpenseInboundPort };