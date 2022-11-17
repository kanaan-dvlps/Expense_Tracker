const { getIncomeByIdInboundPort } = require('../../Ports/Inbound/getIncomeByIdInboundPort');
const getIncomeByIdAdapter = async (id) => {
  try {

    const income = await getIncomeByIdInboundPort(id);
    return income;

  } catch (error) {
    throw error;
  }
};

module.exports = { getIncomeByIdAdapter };
