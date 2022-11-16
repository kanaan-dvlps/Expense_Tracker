const { getExpenseByIdProxy } = require('../../Adapters/Outbound/getExpenseByIdProxy');

const getExpenseByIdOutboundPort = async (id) => {
  try {
    
    const expense = await getExpenseByIdProxy(id);
    return expense;

  } catch (error) {
    throw error;
  }
};

module.exports = { getExpenseByIdOutboundPort };
