import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceService {
  handleMessage(message: string) {
    return `Hello from Microservice! You sent: ${message}`;
  }
}
