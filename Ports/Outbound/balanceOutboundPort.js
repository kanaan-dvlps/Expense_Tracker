const { balanceProxy } = require('../../Adapters/Outbound/balanceProxy');

const balanceOutboundPort = async (data) => {
  try {

    const balance = await balanceProxy(data);
    return balance;

  } catch (error) {
    throw error;
  }
};

module.exports = { balanceOutboundPort };
