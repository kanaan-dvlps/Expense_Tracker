const { deleteIncomeProxy } = require('../../Adapters/Outbound/deleteIncomeProxy');
const deleteIncomeOutboundPort = async (id) => {
  try {

    const deletedIncome = await deleteIncomeProxy(id);
    return deletedIncome;

  } catch (error) {
    throw error;
  }
};

module.exports = { deleteIncomeOutboundPort };
