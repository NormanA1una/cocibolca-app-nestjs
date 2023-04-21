import { IsString } from 'class-validator';

export class CreateSupplierDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  image: string;
}
