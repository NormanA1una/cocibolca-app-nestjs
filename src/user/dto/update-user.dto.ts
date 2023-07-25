import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEnum, IsString } from 'class-validator';
import { Role } from 'src/user/role.enum';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  correo: string;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  roles: string[];
}
