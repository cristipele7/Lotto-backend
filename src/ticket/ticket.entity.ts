import { IsBoolean, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateTicketEntity {
  @IsNumber()
  @Min(1)
  numberOfBoxes: number;

  @IsBoolean()
  @IsOptional()
  superzahl: boolean;
}
