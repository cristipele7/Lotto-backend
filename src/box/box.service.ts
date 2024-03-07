import { Injectable } from '@nestjs/common';
import { Box, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BoxService {
  constructor(private readonly prisma: PrismaService) {}

  async getBoxes(params?: Prisma.BoxFindManyArgs): Promise<Box[]> {
    return this.prisma.box.findMany(params);
  }
}
