const { getExpenses } = require('../../Repositories/expensesDAO');

const getExpensesProxy = async () => {
  try {

    const expenses = await getExpenses();
    return expenses;

  } catch (error) {
    throw error;
  }
};

module.exports = { getExpensesProxy };
