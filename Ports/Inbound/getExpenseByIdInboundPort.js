const { getExpenseById } = require('../../DomainLogics/expensesDomainLogic');

const getExpenseByIdInboundPort = async (id) => {
  try {
    
    const expense = await getExpenseById(id);
    return expense;

  } catch (error) {
    throw error;
  }
};

module.exports = { getExpenseByIdInboundPort };
