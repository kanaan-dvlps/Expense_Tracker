const { sumOfIncomesProxy } = require('../../Adapters/Outbound/sumOfIncomesProxy');

const sumOfIncomesOutboundPort = async () => {
  try {

    const sum = await sumOfIncomesProxy();
    return sum;

  } catch (error) {
    throw error;
  }
};

module.exports = { sumOfIncomesOutboundPort };
