import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class Logger implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('--------middleWare:logger end-------');
    console.log(req.method + ':' + req.url);
    console.log('--------middleWare:logger start-------');

    next();
  }
}
