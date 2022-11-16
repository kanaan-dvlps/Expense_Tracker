const { addExpense } = require('../../Repositories/expensesDAO');

const createExpenseProxy = async (data) => {
  try {
    
    const result = await addExpense(data);
    return result;

  } catch (error) {
    throw error;
  }
};

module.exports = { createExpenseProxy };
