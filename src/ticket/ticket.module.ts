import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BoxModule } from 'src/box/box.module';

@Module({
  imports: [PrismaModule, BoxModule],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
