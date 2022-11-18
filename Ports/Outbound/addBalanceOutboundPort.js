const { addBalanceProxy } = require('../../Adapters/Outbound/addBalanceProxy');

const addBalanceOutboundPort = async (data) => {
  try {
    
    const newBalance = await addBalanceProxy(data);
    return newBalance;

  } catch (error) {
    throw error;
  }
};

module.exports = { addBalanceOutboundPort };
