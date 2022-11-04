const joi = require('joi');

async function expenseAPIBodyValidator(body) {
  try {
    const { expense, category } = body;
    const validateSchema = joi.object().keys({
      expense: joi.number().required(),
      category: joi.string().required(),
    });

    if (Object.keys(body).length === 0 && body.constructor === Object) {
      // throw `body can't be empty`;
      throw new ExceptionBadRequestError(`body can't be empty`);
    } else if (validateSchema.validate(body).error !== undefined || null) {
      throw new ExceptionBadRequestError(validateSchema.validate(body).error.message);
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { expenseAPIBodyValidator };