const { sumOfExpenses } = require('../../Repositories/expensesDAO');

const sumOfExpensesProxy = async () => {
  try {

    const sum = await sumOfExpenses();
    return sum;

  } catch (error) {
    throw error;
  }
};

module.exports = { sumOfExpensesProxy };
