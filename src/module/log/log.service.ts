import { Injectable } from '@nestjs/common';

@Injectable()
export class LogService {
  findLogsByUserId(id) {
    return id;
  }
}
