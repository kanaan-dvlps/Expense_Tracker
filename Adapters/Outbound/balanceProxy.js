const { getBalances } = require('../../Repositories/balanceDAO');

const balanceProxy = async (amount) => {
  try {

    const balance = await getBalances(amount);
    return balance;

  } catch (error) {
    throw error;
  }
};

module.exports = { balanceProxy };
