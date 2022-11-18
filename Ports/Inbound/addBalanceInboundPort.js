const { addBalance } = require('../../DomainLogics/balanceDomainLogic');

const addBalanceInboundPort = async (data) => {
  try {
    
    const newBalance = await addBalance(data);
    return newBalance;

  } catch (error) {
    throw error;
  }
};

module.exports = { addBalanceInboundPort };
