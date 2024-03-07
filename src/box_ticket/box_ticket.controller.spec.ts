import { Test, TestingModule } from '@nestjs/testing';
import { BoxTicketController } from './box_ticket.controller';
import { BoxTicketService } from './box_ticket.service';

describe('BoxTicketController', () => {
  let controller: BoxTicketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoxTicketController],
      providers: [BoxTicketService],
    }).compile();

    controller = module.get<BoxTicketController>(BoxTicketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
