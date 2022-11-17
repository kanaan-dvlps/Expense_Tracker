const { getIncomeById } = require('../../Repositories/incomeDAO');
const getIncomeByIdProxy = async (id) => {
  try {

    const income = await getIncomeById(id);
    return income;

  } catch (error) {
    throw error;
  }
};

module.exports = { getIncomeByIdProxy };
