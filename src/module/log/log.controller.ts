import { Get, Controller, Query } from '@nestjs/common';
import { LogService } from './log.service';

@Controller('log')
export class LogController {
  constructor(private logService: LogService) {}
  @Get()
  findLogsByUserId(@Query() id: number) {
    return this.logService.findLogsByUserId(id);
  }
}
