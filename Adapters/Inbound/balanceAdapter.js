const { balanceInboundPort } = require('../../Ports/Inbound/balanceInboundPort');

const balanceAdapter = async () => {
  try {

    const balance = await balanceInboundPort();
    return balance;

  } catch (error) {
    throw error;
  }
};

module.exports = { balanceAdapter };
