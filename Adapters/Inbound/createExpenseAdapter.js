const { APIBodyValidator } = require('../../Validators/APIBodyValidator');
const { createExpenseInboundPort } = require('../../Ports/Inbound/createExpenseInboundPort');
const { VALIDATED } = require('../../Helpers/responses.json');

const createExpenseAdapter = async (request) => {
  try {

    const expense = await APIBodyValidator(request);
    const newExpense = await createExpenseInboundPort(expense);
    return newExpense;

  } catch (error) {
    throw error;
  }
}

module.exports = { createExpenseAdapter };