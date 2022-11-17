const { deleteIncome } = require('../../Repositories/incomeDAO');
const deleteIncomeProxy = async (id) => {
  try {

    const deletedIncome = await deleteIncome(id);
    return deletedIncome;

  } catch (error) {
    throw error;
  }
};

module.exports = { deleteIncomeProxy };
