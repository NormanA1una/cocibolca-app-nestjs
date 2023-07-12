import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  correo: string;

  @IsString()
  nombreYApellidos: string;

  @IsString()
  password: string;
}
