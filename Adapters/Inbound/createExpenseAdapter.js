const { expenseAPIBodyValidator } = require('../../Validators/expensesValidator');
const { VALIDATED } = require('../../Helpers/responses.json');

const createExpenseAdapter = async (request) => {
  try {

    const expense = await expenseAPIBodyValidator(request);
    return expense

  } catch (error) {
    throw error;
  }
}

module.exports = { createExpenseAdapter };