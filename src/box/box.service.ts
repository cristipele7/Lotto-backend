import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BoxService {
  constructor(private readonly prisma: PrismaService) {}

  async createMany(params?: Prisma.BoxCreateManyArgs): Promise<any> {
    return this.prisma.box.createMany(params);
  }
}
