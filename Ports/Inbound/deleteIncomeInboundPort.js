const { deleteIncome } = require('../../DomainLogics/incomeDomainLogic');
const deleteIncomeInboundPort = async (id) => {
  try {

    const deletedIncome = await deleteIncome(id);
    return deletedIncome;

  } catch (error) {
    throw error;
  }
};

module.exports = { deleteIncomeInboundPort };
