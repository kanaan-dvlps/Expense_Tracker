const { getExpensesProxy } = require('../../Adapters/Outbound/getExpensesProxy');

const getExpensesOutboundPort = async () => {
  try {

    const expenses = await getExpensesProxy();
    return expenses;

  } catch (error) {
    throw error;
  }
};

module.exports = { getExpensesOutboundPort };
