const { ERROR } = require('../Helpers/responses.json');

class BadRequest extends Error {
  constructor(ERROR) {
    super(ERROR);
    this.name = 'BadRequestError';
    this.successful = false;
    this.reason = ERROR;


    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BadRequest);
    }
  }
}

class Expense {
  constructor(amount, type) {
    this.amount = amount;
    this.type = type;
    this.successful = true;
    return {
      amount: this.amount,
      type: this.type,
      successful: this.successful,
    }
  }
}

globalThis.BadRequest = BadRequest;
globalThis.Expense = Expense;