import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './module/user/user.module';
import { User } from './module/user/user.entry';
import { RuleModule } from './module/rule/rule.module';
import { Log } from './module/log/log.entry';
import { LogModule } from './module/log/log.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '8.219.66.21',
      port: 3306,
      username: 'root',
      password: '19781209Wyp',
      database: 'nest',
      entities: [User, Log],
      synchronize: true,
    }),
    UserModule,
    RuleModule,
    LogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
