import { IsNumber, IsString } from 'class-validator';

export class CreateFlowersDTO {
  @IsString()
  name: string;

  @IsString()
  color: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;
}

export type UpdateFlowersDTO = Partial<CreateFlowersDTO>;
