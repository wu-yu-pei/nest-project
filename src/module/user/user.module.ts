import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entry';
import { Rule } from '../rule/rule.entry';
import printMiddleware from '../share/middleware/print.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([User, Rule])],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(printMiddleware).forRoutes(UserController);
  }
}
