const { deleteExpense } = require('../../Repositories/expensesDAO');

const deleteExpenseProxy = async (id) => {
  try {

    const deletedExpense = await deleteExpense(id);
    return deletedExpense;

  } catch (error) {
    throw error
  }
};

module.exports = { deleteExpenseProxy };
