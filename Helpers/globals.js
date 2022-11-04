class ExceptionBadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ExceptionBadRequestError';
    this.code = 406;
    this.type = 'EXCEPTION_VALIDATION_ERROR';
    

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ExceptionBadRequestError);
    }
  }
}

globalThis.ExceptionBadRequestError = ExceptionBadRequestError;