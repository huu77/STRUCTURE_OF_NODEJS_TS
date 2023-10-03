import {HttpStatusMessages,HttpStatusCode} from './type'

class Success {
  public readonly httpCode: HttpStatusCode;
  public readonly message: string;

  constructor(httpCode: HttpStatusCode, message: string) {
    this.httpCode = httpCode;
    this.message = message;
  }
}

class SuccessOK extends Success {
  public readonly data: any;
  constructor(data :any,message = 'OK') {
    super(HttpStatusCode.OK, message);
    this.data=data;
  }
}

class SuccessCreated extends Success {
  constructor(message = 'Created') {
    super(HttpStatusCode.CREATED, message);
  }
}

class SuccessAccepted extends Success {
  constructor(message = 'Accepted') {
    super(HttpStatusCode.ACCEPTED, message);
  }
}

class SuccessNoContent extends Success {
  constructor(message = 'No Content') {
    super(HttpStatusCode.NO_CONTENT, message);
  }
}
// Sử dụng lớp SuccessOK
const dataToReturn = { key: 'value' };
const okResponse = new SuccessOK(dataToReturn, 'Yêu cầu đã được xử lý thành công');

console.log(okResponse);
