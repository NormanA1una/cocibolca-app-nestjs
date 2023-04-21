import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCatsMessage(): string {
    return 'Esta es la ruta de los gatos!';
  }
}
