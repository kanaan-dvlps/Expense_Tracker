const { expenseAPIBodyValidator } = require('../../Validators/expensesValidator');
const { VALIDATED } = require('../../Helpers/responses.json');

const createExpenseAdapter = async (request) => {
  try {
    const validation = await expenseAPIBodyValidator(request);

    if (validation.type !== VALIDATED) {
      throw validation;
    } else {
      return validation;
    }

  } catch (error) {
    throw new BadRequest(error.message);
  }
}

module.exports = { createExpenseAdapter };