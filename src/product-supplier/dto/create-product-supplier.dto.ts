import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateProductSupplierDto {
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

  @IsString()
  nombreImage: string;
}
