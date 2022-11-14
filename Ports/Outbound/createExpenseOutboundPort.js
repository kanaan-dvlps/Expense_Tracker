const { createExpenseProxy } = require('../../Adapters/Outbound/createExpenseProxy');

const createExpenseOutboundPort = async (data) => {
  try {
    
    const result = await createExpenseProxy(data);
    return result;

  } catch (error) {
    throw error;
  }
};

module.exports = { createExpenseOutboundPort };