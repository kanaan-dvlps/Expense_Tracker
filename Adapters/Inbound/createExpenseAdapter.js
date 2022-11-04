const { expenseAPIBodyValidator } = require('../../Validators/expensesValidator');

const createExpenseAdapter = async (request) => {
  try {
    const validation = await expenseAPIBodyValidator(request);
    return validation;
  } catch (error) {
    return error;
  }
}

module.exports = { createExpenseAdapter };