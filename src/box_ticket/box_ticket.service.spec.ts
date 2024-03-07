import { Test, TestingModule } from '@nestjs/testing';
import { BoxTicketService } from './box_ticket.service';

describe('BoxTicketService', () => {
  let service: BoxTicketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoxTicketService],
    }).compile();

    service = module.get<BoxTicketService>(BoxTicketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
