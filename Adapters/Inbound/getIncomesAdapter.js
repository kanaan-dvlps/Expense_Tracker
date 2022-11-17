const { getIncomesInboundPort } = require('../../Ports/Inbound/getIncomesInboundPort');
const getIncomesAdapter = async () => {
  try {

    const incomes = await getIncomesInboundPort();
    return incomes;

  } catch (error) {
    throw error;
  }
};

module.exports = { getIncomesAdapter };
