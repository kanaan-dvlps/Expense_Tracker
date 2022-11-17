const joi = require('joi');
const { VALIDATED, EMPTY_BODY_VALIDATION_ERROR } = require('../Helpers/responses.json');
// ! Refactor to factory pattern
async function APIBodyValidator(body) {
  try {
    const { amount, type } = body;
    const validateSchema = joi.object().keys({
      amount: joi.number().strict().required(),
      type: joi.string().required(),
    });

    if (Object.keys(body).length === 0 && body.constructor === Object) {
      // throw `body can't be empty`;
      throw new BadRequest(EMPTY_BODY_VALIDATION_ERROR);
    } else if (validateSchema.validate(body).error !== undefined) {
      throw new BadRequest(validateSchema.validate(body).error.details[0].message);
    } else {
      return new Expense(amount, type);
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { APIBodyValidator };