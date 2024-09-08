import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateFlowersDTO } from './flowers.dto';
import { ConfigService } from '@nestjs/config';
import { EnumAppMode } from 'src/types';

@Injectable()
export class FlowersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}
  findAll() {
    console.log(this.configService.get<EnumAppMode>('MODE'));
    return this.prisma.flower.findMany();
  }

  create(dto: CreateFlowersDTO) {
    return this.prisma.flower.create({
      data: {
        name: dto.name,
        color: dto.color,
        price: dto.price,
        quantity: dto.quantity,
      },
    });
  }
}
