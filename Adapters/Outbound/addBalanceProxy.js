const { addBalance } = require('../../Repositories/balanceDAO');

const addBalanceProxy = async (data) => {
  try {
    
    const newBalance = await addBalance(data);
    return newBalance;

  } catch (error) {
    throw error;
  }
};

module.exports = { addBalanceProxy };
