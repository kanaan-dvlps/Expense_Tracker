const { createExpenseOutboundPort } = require('../Ports/Outbound/createExpenseOutboundPort');

// TODO: Add the expense
// TODO: retrive the income
// TODO: check if the the income exists
// TODO: if yes subtract it from the expense if not add the expenses and return them


// ? Should we do everything here or we should have a separate domain logic for calculation?

const addExpense = async (data) => {
  try {
    const newExpense = await createExpenseOutboundPort(data);
    return newExpense;

  } catch (error) {
    throw new BadRequest(error);
  }
};

module.exports = {
  addExpense,
}