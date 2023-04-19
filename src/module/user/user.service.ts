import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findUserLogsById(id: number) {
    return id;
  }
}
