const { sumOfIncomes } = require('../../Repositories/incomeDAO');

const sumOfIncomesProxy = async () => {
  try {

    const sum = await sumOfIncomes();
    return sum;

  } catch (error) {
    throw error;
  }
};

module.exports = { sumOfIncomesProxy };
