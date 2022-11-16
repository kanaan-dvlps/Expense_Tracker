const { deleteExpenseInboundPort } = require('../../Ports/Inbound/deleteExpenseInboundPort');

const deleteExpenseAdapter = async (id) => {
  try {

    const deletedExpense = await deleteExpenseInboundPort(id);
    return deletedExpense;

  } catch (error) {
    throw error
  }
};

module.exports = { deleteExpenseAdapter };
