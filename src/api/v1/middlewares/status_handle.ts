export enum HttpStatusCode {
  OK = 200, // Yêu cầu thành công, dữ liệu đã được trả về
  CREATED = 201, // Tài nguyên mới đã được tạo thành công
  ACCEPTED = 202, // Yêu cầu được chấp nhận và sẽ được xử lý sau
  NO_CONTENT = 204, // Yêu cầu thành công, không có dữ liệu trả về
  BAD_REQUEST = 400, // Yêu cầu không hợp lệ hoặc thiếu thông tin
  UNAUTHORIZED = 401, // Yêu cầu yêu cầu xác thực và người dùng chưa đăng nhập hoặc không có quyền
  FORBIDDEN = 403, // Yêu cầu đã được xác thực, nhưng người dùng không có quyền truy cập
  NOT_FOUND = 404, // Tài nguyên yêu cầu không được tìm thấy
  METHOD_NOT_ALLOWED = 405, // Phương thức HTTP không được hỗ trợ cho tài nguyên cụ thể
  CONFLICT = 409, // Xung đột xảy ra trong quá trình xử lý yêu cầu
  INTERNAL_SERVER_ERROR = 500, // Lỗi máy chủ không xác định
}

export enum HttpStatusMessages {
  OK = 'OK',
  CREATED = 'Created',
  ACCEPTED = 'Accepted',
  NO_CONTENT = 'No Content',
  BAD_REQUEST = 'Bad Request',
  UNAUTHORIZED = 'Unauthorized',
  FORBIDDEN = 'Forbidden',
  NOT_FOUND = 'Not Found',
  METHOD_NOT_ALLOWED = 'Method Not Allowed',
  CONFLICT = 'Conflict',
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
}

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
