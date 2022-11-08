const { ERROR } = require('../Helpers/responses.json');

class BadRequest extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
    this.code = 406;
    this.type = ERROR;


    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BadRequest);
    }
  }
}

globalThis.BadRequest = BadRequest;