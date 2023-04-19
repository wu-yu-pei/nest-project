import { Get, Controller, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entry';
import { Log } from './log.entry';

@Controller('log')
export class LogController {
  constructor(
    @InjectRepository(User) private userRep: Repository<User>,
    @InjectRepository(Log) private logRep: Repository<Log>,
  ) {}
  @Get()
  async findLogsByUserId(@Query('id') id: number) {
    const user = await this.userRep.findOne({
      where: {
        id,
      },
    });

    const logs = await this.logRep.find({
      where: {
        user: user,
      },
      relations: {
        user: true,
      },
    });
    return logs;
  }
}
