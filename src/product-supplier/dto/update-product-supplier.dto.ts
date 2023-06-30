import { PartialType } from '@nestjs/mapped-types';
import { CreateProductSupplierDto } from './create-product-supplier.dto';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class UpdateProductSupplierDto extends PartialType(
  CreateProductSupplierDto,
) {
  @IsString()
  nombreProducto: string;

  @IsNumber()
  cantidadAMano: number;

  @IsNumber()
  cantidadContada: number;

  @IsString()
  presentacion: string;

  @IsDate()
  fechaDeInventario: Date;

  @IsString()
  nombreSupplier: string;
}
