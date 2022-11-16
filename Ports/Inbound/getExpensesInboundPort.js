const { getExpenses } = require('../../DomainLogics/expensesDomainLogic');

const getExpensesInboundPort = async () => {
  try {

    const expenses = getExpenses();
    return expenses;

  } catch (error) {
    throw error;
  }
};

module.exports = { getExpensesInboundPort };
