import { IsBoolean, IsString } from 'class-validator';

export class CreateSupplierDto {
  @IsString()
  nombreProveedor: string;

  @IsString()
  tipoDeProducto: string;

  @IsBoolean()
  estado: boolean;

  @IsString()
  logo: string;
}
