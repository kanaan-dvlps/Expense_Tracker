const { getIncomeByIdProxy } = require('../../Adapters/Outbound/getIncomeByIdProxy');
const getIncomeByIdOutboundPort = async (id) => {
  try {

    const income = await getIncomeByIdProxy(id);
    return income;

  } catch (error) {
    throw error;
  }
};

module.exports = { getIncomeByIdOutboundPort };
