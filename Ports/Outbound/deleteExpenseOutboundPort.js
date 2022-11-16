const { deleteExpenseProxy } = require('../../Adapters/Outbound/deleteExpenseProxy');

const deleteExpenseOutboundPort = async (id) => {
  try {

    const deletedExpense = await deleteExpenseProxy(id);
    return deletedExpense;

  } catch (error) {
    throw error
  }
};

module.exports = { deleteExpenseOutboundPort };
