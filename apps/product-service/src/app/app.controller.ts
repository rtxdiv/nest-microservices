import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('sum')
  sum(@Payload() data: { a: number; b: number }): number {
    console.log('sum request:', data)
    return this.appService.sum(data.a, data.b)
  }

  @MessagePattern('hello')
  hello(@Payload() data: { name: string }): string {
    console.log('hello request:', data.name)
    return this.appService.hello(data.name)
  }
}
