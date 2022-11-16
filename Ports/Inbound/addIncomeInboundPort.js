const { addIncome } = require('../../DomainLogics/incomeDomainLogic');

const addIncomeInboundPort = async (data) => {
  try {

    const newIncome = await addIncome(data);
    return newIncome;

  } catch (error) {
    throw error;
  }
};

module.exports = { addIncomeInboundPort };
