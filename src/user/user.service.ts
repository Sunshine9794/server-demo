import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUserInfo() {
    return {
      code: 200,
      data: 'hello world',
      msg: 'success',
    };
  }

  getRange(num) {
    return {
      code: 200,
      data: new Array(num).fill(0).map((v, i) => ++i),
      msg: 'success',
    };
  }
}
