import { Controller } from '@nestjs/common';
import { BoxTicketService } from './box_ticket.service';

@Controller('box-ticket')
export class BoxTicketController {
  constructor(private readonly boxTicketService: BoxTicketService) {}
}
