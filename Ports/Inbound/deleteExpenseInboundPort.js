const { deleteExpense } = require('../../DomainLogics/expensesDomainLogic');

const deleteExpenseInboundPort = async (id) => {
  try {

    const deletedExpense = await deleteExpense(id);
    return deletedExpense;

  } catch (error) {
    throw error
  }
};

module.exports = { deleteExpenseInboundPort };
