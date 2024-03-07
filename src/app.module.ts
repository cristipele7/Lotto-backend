import { Module } from '@nestjs/common';
import { BoxModule } from './box/box.module';
import { TicketModule } from './ticket/ticket.module';
import { BoxTicketModule } from './box_ticket/box_ticket.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, BoxModule, TicketModule, BoxTicketModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
