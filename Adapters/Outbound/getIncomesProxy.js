const { getIncomes } = require('../../Repositories/incomeDAO');
const getIncomesProxy = async () => {
  try {

    const incomes = await getIncomes();
    return incomes;

  } catch (error) {
    throw error;
  }
};

module.exports = { getIncomesProxy };
