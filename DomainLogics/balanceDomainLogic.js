const { addBalanceOutboundPort } = require('../Ports/Outbound/addBalanceOutboundPort');
const { sumOfIncomesOutboundPort } = require('../Ports/Outbound/sumOfIncomesOutboundPort');
const { sumOfExpensesOutboundPort } = require('../Ports/Outbound/sumOfExpensesOutboundPort');

const addBalance = async (amount) => {
  try {

    const newBalance = await addBalanceOutboundPort(amount);
    return newBalance;

  } catch (error) {
    throw error;
  }
};

const getBalance = async () => {
  try {

    console.log('jest');
    const Incomes = await sumOfIncomesOutboundPort();
    const Expenses = await sumOfExpensesOutboundPort();

    // console.log(Incomes);
    // console.log(Expenses);

    const subtract = (Incomes[0].Total - Expenses[0].Total);

    // console.log(subtract);

    const newBalance = await addBalance(subtract);
    return newBalance;

  } catch (error) {
    throw error;
  }
};

module.exports = {
  getBalance,
}