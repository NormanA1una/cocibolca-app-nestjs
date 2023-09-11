import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString } from 'class-validator';

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
