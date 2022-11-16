const { addIncome } = require('../../Repositories/incomeDAO');

const addIncomeProxy = async (data) => {
  try {

    const newIncome = await addIncome(data);
    return newIncome;

  } catch (error) {
    throw error;
  }
};

module.exports = { addIncomeProxy };
