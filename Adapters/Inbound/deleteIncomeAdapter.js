const { deleteIncomeInboundPort } = require('../../Ports/Inbound/deleteIncomeInboundPort');
const deleteIncomeAdapter = async (id) => {
  try {

    const deletedIncome = await deleteIncomeInboundPort(id);
    return deletedIncome;

  } catch (error) {
    throw error;
  }
};

module.exports = { deleteIncomeAdapter };
