import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Log } from './log.entry';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LogService {
  constructor(@InjectRepository(Log) private logRep: Repository<Log>) {}
  async findLogsByUserId(id) {
    const res = await this.logRep.findOne({
      where: {
        id: id,
      },
      relations: ['user'],
    });

    // const res = this.logRep
    //   .createQueryBuilder('log')
    //   .where('id=:id', { id })
    //   .getMany();
    return res;
  }
}
