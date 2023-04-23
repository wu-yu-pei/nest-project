import { Get, Controller, Query } from '@nestjs/common';

import { LogService } from './log.service';

@Controller('log')
export class LogController {
  constructor(private logService: LogService) {}

  @Get()
  async findLogsByUserId(@Query('id') id: number) {
    return await this.logService.findLogsByUserId(id);
  }
}
