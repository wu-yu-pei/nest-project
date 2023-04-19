import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userSercice: UserService) {}

  @Get()
  @HttpCode(200)
  async findUserById(@Query('id') id: number) {
    console.log(id);

    const res = await this.userSercice.findUserById(id);

    return {
      data: [res],
    };
  }
}
