import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entry';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRep: Repository<User>) {}
  async findUserById(id: number) {
    const user = await this.userRep.findOne({
      where: {
        id,
      },
      relations: ['log'],
    });

    // const user = this.userRep
    //   .createQueryBuilder('user')
    //   .leftJoin('user.log', 'log')
    //   .addSelect('log')
    //   .where('user.id=:id', { id })
    //   .getMany();

    return user;
  }
}
