import { PartialType } from '@nestjs/mapped-types';
import { CreateSupplierDto } from './create-supplier.dto';
import { IsBoolean, IsString } from 'class-validator';

export class UpdateSupplierDto extends PartialType(CreateSupplierDto) {
  @IsString()
  nombreProveedor: string;

  @IsString()
  tipoDeProducto: string;

  @IsBoolean()
  estado: boolean;

  @IsString()
  logo: string;

  @IsString()
  nombreImage?: string;
}
