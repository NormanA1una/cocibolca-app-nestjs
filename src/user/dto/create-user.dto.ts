import { IsEnum, IsString } from 'class-validator';
import { Role } from 'src/user/role.enum';

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
