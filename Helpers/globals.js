const { VALIDATION_ERROR } = require('../Helpers/responses.json');

class BadRequest extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
    this.code = 406;
    this.type = VALIDATION_ERROR;
    

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BadRequest);
    }
  }
}

globalThis.BadRequest = BadRequest;