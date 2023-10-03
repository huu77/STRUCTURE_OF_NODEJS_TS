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