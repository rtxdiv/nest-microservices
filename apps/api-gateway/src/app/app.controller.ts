import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express'
import { AppService } from './app.service';
import { join } from 'path';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'src', 'assets', 'root.html'))
  }
}
