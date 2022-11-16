const { getExpensesInboundPort } = require('../../Ports/Inbound/getExpensesInboundPort');

const getExpensesAdapter = async () => {
  try {

    const expenses = await getExpensesInboundPort();
    return expenses;

  } catch (error) {
    throw error;
  }
};

module.exports = { getExpensesAdapter };
