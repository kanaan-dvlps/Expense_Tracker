const { expenseAPIBodyValidator } = require('../../Validators/expensesValidator');
const { createExpenseInboundPort } = require('../../Ports/Inbound/createExpenseInboundPort');
const { VALIDATED } = require('../../Helpers/responses.json');

const createExpenseAdapter = async (request) => {
  try {

    const expense = await expenseAPIBodyValidator(request);
    const newExpense = await createExpenseInboundPort(expense);
    return newExpense;

  } catch (error) {
    throw error;
  }
}

module.exports = { createExpenseAdapter };