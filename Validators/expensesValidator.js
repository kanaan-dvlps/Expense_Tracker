const joi = require('joi');
const { VALIDATED, EMPTY_BODY_VALIDATION_ERROR } = require('../Helpers/responses.json');
// ! Refactor to factory pattern
async function expenseAPIBodyValidator(body) {
  try {
    const { expense, expenseType } = body;
    const validateSchema = joi.object().keys({
      expense: joi.number().strict().required(),
      expenseType: joi.string().required(),
    });

    if (Object.keys(body).length === 0 && body.constructor === Object) {
      // throw `body can't be empty`;
      throw new BadRequest(EMPTY_BODY_VALIDATION_ERROR);
    } else if (validateSchema.validate(body).error !== undefined || validateSchema.validate(body).error !== null) {
      throw new BadRequest(validateSchema.validate(body).error.message);
    } else {
      return VALIDATED
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { expenseAPIBodyValidator };