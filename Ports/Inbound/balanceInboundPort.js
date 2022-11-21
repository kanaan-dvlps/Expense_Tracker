const { getBalance } = require('../../DomainLogics/balanceDomainLogic');

const balanceInboundPort = async () => {
  try {

    const balance = await getBalance();
    return balance;

  } catch (error) {
    throw error;
  }
};

module.exports = { balanceInboundPort };
