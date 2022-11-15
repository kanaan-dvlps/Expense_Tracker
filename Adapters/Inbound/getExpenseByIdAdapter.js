const { getExpenseByIdInboundPort } = require('../../Ports/Inbound/getExpenseByIdInboundPort');

const getExpenseByIdAdapter = async (id) => {
  try {
    
    const expense = await getExpenseByIdInboundPort(id);
    return expense;

  } catch (error) {
    throw error;
  }
};