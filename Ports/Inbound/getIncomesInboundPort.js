const { getIncomes } = require('../../DomainLogics/incomeDomainLogic');
const getIncomesInboundPort = async () => {
  try {

    const incomes = await getIncomes();
    return incomes;

  } catch (error) {
    throw error;
  }
};

module.exports = { getIncomesInboundPort };
