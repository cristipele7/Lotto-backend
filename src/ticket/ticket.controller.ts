import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { BoxService } from 'src/box/box.service';
import { CreateTicketEntity } from './ticket.entity';

@Controller('ticket')
export class TicketController {
  constructor(
    private readonly ticketService: TicketService,
    private readonly boxService: BoxService,
  ) {}

  @Post('/')
  async createTicket(@Body() data: CreateTicketEntity) {
    if (!data.numberOfBoxes || isNaN(data.numberOfBoxes)) {
      throw new BadRequestException('numberOfBoxes (number) is mandatory!');
    }

    const createdTicket = await this.ticketService.create({
      data: {
        superzahl: data.superzahl ? Math.random() * 10 : null,
      },
    });

    const numberOfBoxes: number = data.numberOfBoxes;
    const boxes: number[][] = [];
    for (let i = 0; i < numberOfBoxes; i++) {
      const numbers: number[] = [];
      while (numbers.length < 6) {
        const newNumber = Math.floor(Math.random() * (50 - 1) + 1);
        if (!numbers.includes(newNumber)) {
          numbers.push(newNumber);
        }
      }
      boxes.push(numbers);
    }

    await this.boxService.createMany({
      data: boxes.map((numbers: number[]) => {
        const sortedNumber = numbers.sort((a: number, b: number) => a - b);
        return {
          numbers: sortedNumber,
          ticketId: createdTicket.id,
        };
      }),
    });

    return createdTicket;
  }

  @Get('/')
  async getTickets() {
    return this.ticketService.getMany({
      include: {
        boxes: true,
      },
    });
  }

  @Get('/:id')
  async getTicket(@Param('id') id: string) {
    return this.ticketService.get({
      where: {
        id: parseInt(id),
      },
      include: {
        boxes: true,
      },
    });
  }

  @Delete('/:id')
  async deleteTicket(@Param('id') id: string) {
    return this.ticketService.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}
