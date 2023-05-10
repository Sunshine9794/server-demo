import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUserInfo() {
    return this.userService.getUserInfo();
  }
  @Get('range/:num')
  getRange(@Param('num') num): any {
    if (typeof +num === 'number' && +num > 0) {
      return this.userService.getRange(+num);
    }
    return '参数错误';
  }
}
