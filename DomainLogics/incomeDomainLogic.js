const { addIncomeOutboundPort } = require('../Ports/Outbound/addIncomeOutboundPort');
const { getIncomeByIdOutboundPort } = require('../Ports/Outbound/getIncomeByIdOutboundPort');
const { getIncomesOutboundPort } = require('../Ports/Outbound/getIncomesOutboundPort');
const { deleteIncomeOutboundPort } = require('../Ports/Outbound/deleteIncomeOutboundAdapter');

const addIncome = async (data) => {
  try {

    const newIncome = await addIncomeOutboundPort(data);
    return newIncome;

  } catch (error) {
    throw error;
  }
};

const getIncomeById = async (id) => {
  try {

    const income = await getIncomeByIdOutboundPort(id);
    return income;

  } catch (error) {
    throw error;
  }
};

const getIncomes = async () => {
  try {

    const incomes = await getIncomesOutboundPort();
    return incomes;

  } catch (error) {
    throw error;
  }
};

const deleteIncome = async (id) => {
  try {

    const deletedIncome = await deleteIncomeOutboundPort(id);
    return deletedIncome;

  } catch (error) {
    throw error;
  }
};

module.exports = {
  addIncome,
  getIncomeById,
  getIncomes,
  deleteIncome,
};
