import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthGuard } from './auth-guard.guard';
import { Public } from 'src/decorators/is-public/is-public.decorator';
import { Roles } from 'src/decorators/roles/roles.decorator';
import { Role } from 'src/user/role.enum';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: CreateUserDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  /* @UseGuards(AuthGuard)
  @Get('profile')
  @Roles(Role.Admin)
  getProfile(@Request() req) {
    console.log(req.user);

    return req.user;
  } */
}
