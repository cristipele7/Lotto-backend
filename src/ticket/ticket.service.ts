import { Injectable } from '@nestjs/common';
import { Prisma, Ticket } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TicketService {
  constructor(private readonly prisma: PrismaService) {}

  async create(params?: Prisma.TicketCreateArgs): Promise<Ticket> {
    return this.prisma.ticket.create(params);
  }

  async getMany(params?: Prisma.TicketFindManyArgs): Promise<Ticket[]> {
    return this.prisma.ticket.findMany(params);
  }

  async get(params?: Prisma.TicketFindUniqueArgs): Promise<Ticket> {
    return this.prisma.ticket.findUnique(params);
  }

  async delete(params?: Prisma.TicketDeleteArgs): Promise<Ticket> {
    return this.prisma.ticket.delete(params);
  }
}
