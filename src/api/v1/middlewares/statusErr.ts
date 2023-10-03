 import {HttpStatusMessages,HttpStatusCode} from './type'

class BaseError extends Error {
  public readonly name: string;
  public readonly httpCode: HttpStatusCode;
  public readonly isOperational: boolean;

  constructor(
    name: string,
    httpCode: HttpStatusCode,
    message: string,
    isOperational: boolean,
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

class BadRequestError extends BaseError {
  constructor(message = HttpStatusMessages.BAD_REQUEST) {
    super('BadRequestError', HttpStatusCode.BAD_REQUEST, message, true);
  }
}

class UnauthorizedError extends BaseError {
  constructor(message = HttpStatusMessages.UNAUTHORIZED) {
    super('UnauthorizedError', HttpStatusCode.UNAUTHORIZED, message, true);
  }
}

class ForbiddenError extends BaseError {
  constructor(message = HttpStatusMessages.FORBIDDEN) {
    super('ForbiddenError', HttpStatusCode.FORBIDDEN, message, true);
  }
}

class NotFoundError extends BaseError {
  constructor(message = HttpStatusMessages.NOT_FOUND) {
    super('NotFoundError', HttpStatusCode.NOT_FOUND, message, true);
  }
}

class MethodNotAllowedError extends BaseError {
  constructor(message = HttpStatusMessages.METHOD_NOT_ALLOWED) {
    super('MethodNotAllowedError', HttpStatusCode.METHOD_NOT_ALLOWED, message, true);
  }
}

class ConflictError extends BaseError {
  constructor(message = HttpStatusMessages.CONFLICT) {
    super('ConflictError', HttpStatusCode.CONFLICT, message, true);
  }
}

class InternalServerError extends BaseError {
  constructor(message = HttpStatusMessages.INTERNAL_SERVER_ERROR) {
    super('InternalServerError', HttpStatusCode.INTERNAL_SERVER_ERROR, message, true);
  }
}
 
// example 
// const exampleError = new NotFoundError();
 
// console.log(`${exampleError.name}: ${exampleError.message}`);
// console.log(`HTTP Status Code: ${exampleError.httpCode}`);
// console.log(`Is Operational: ${exampleError.isOperational}`);
