const { getIncomesProxy } = require('../../Adapters/Outbound/getIncomesProxy');
const getIncomesOutboundPort = async () => {
  try {

    const incomes = await getIncomesProxy();
    return incomes;

  } catch (error) {
    throw error;
  }
};

module.exports = { getIncomesOutboundPort };
