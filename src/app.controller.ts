import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { HelloDto } from './hello.dto';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  @ApiOkResponse({ type: HelloDto })
  getHello2(): HelloDto {
    return this.appService.getHello2();
  }

  @Get('user')
  getUser(): string {
    return this.userService.findOne(2);
  }
}
