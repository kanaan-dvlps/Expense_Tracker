const { getExpenseById } = require('../../Repositories/expensesDAO');

const getExpenseByIdProxy = async (id) => {
  try {
    
    const expense = await getExpenseById(id);
    return expense;

  } catch (error) {
    throw error;
  }
};

module.exports = { getExpenseByIdProxy };
