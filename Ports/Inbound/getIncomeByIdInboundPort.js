const { getIncomeById } = require('../../DomainLogics/incomeDomainLogic');
const getIncomeByIdInboundPort = async (id) => {
  try {

    const income = await getIncomeById(id);
    return income;

  } catch (error) {
    throw error;
  }
};

module.exports = { getIncomeByIdInboundPort };
