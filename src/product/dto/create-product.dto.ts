import { IsEnum, IsInt, IsString } from 'class-validator';
import { EnumStatus } from '../Enums/enums.product';

export class CreateProductDto {
  @IsInt()
  supplier_id: number;

  @IsString()
  title: string;

  @IsString()
  image: string;

  @IsString()
  presentation: string;

  @IsEnum(EnumStatus)
  order_status: EnumStatus;
}
