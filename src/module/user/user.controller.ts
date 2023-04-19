import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userSercice: UserService) {}

  @Get()
  @HttpCode(200)
  findUserLogsById(@Query() id: number) {
    return this.userSercice.findUserLogsById(id);
  }
}
