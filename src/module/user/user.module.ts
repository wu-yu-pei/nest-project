import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entry';
import { Rule } from '../rule/rule.entry';

@Module({
  imports: [TypeOrmModule.forFeature([User, Rule])],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UserModule {}
