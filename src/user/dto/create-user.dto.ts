import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  correo: string;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  roles: string[];
}
