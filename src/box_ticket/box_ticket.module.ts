import { Module } from '@nestjs/common';
import { BoxTicketService } from './box_ticket.service';
import { BoxTicketController } from './box_ticket.controller';

@Module({
  controllers: [BoxTicketController],
  providers: [BoxTicketService],
})
export class BoxTicketModule {}
