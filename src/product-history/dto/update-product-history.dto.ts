import { PartialType } from '@nestjs/mapped-types';
import { CreateProductHistoryDto } from './create-product-history.dto';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class UpdateProductHistoryDto extends PartialType(
  CreateProductHistoryDto,
) {
  @IsNumber()
  product_id: number;

  @IsString()
  nombreProducto: string;

  @IsNumber()
  cantidadAMano: number;

  @IsNumber()
  cantidadContada: number;

  @IsDate()
  fechaDeInventario: Date;

  @IsString()
  nombreSupplier: string;
}
