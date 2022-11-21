const { addBalanceProxy } = require('../../Adapters/Outbound/addBalanceProxy');

const addBalanceOutboundPort = async (amount) => {
  try {

    const newBalance = await addBalanceProxy(amount);
    return newBalance;

  } catch (error) {
    throw error;
  }
};

module.exports = { addBalanceOutboundPort };
