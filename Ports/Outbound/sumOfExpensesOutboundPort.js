const { sumOfExpensesProxy } = require('../../Adapters/Outbound/sumOfExpensesProxy');

const sumOfExpensesOutboundPort = async () => {
  try {

    const sum = await sumOfExpensesProxy();
    return sum;

  } catch (error) {
    throw error;
  }
};

module.exports = { sumOfExpensesOutboundPort };
