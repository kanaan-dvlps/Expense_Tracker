const { addBalance } = require('../../Repositories/balanceDAO');

const addBalanceProxy = async (amount) => {
  try {

    const newBalance = await addBalance(amount);
    return newBalance;

  } catch (error) {
    throw error;
  }
};

module.exports = { addBalanceProxy };
