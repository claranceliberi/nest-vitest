import { Injectable } from '@nestjs/common';
import { HelloDto } from './hello.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHello2(): HelloDto {
    return {
      name: 'funny',
    };
  }
}
