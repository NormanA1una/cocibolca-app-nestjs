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

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: CreateUserDto) {
    console.log(signInDto);

    return this.authService.signIn(signInDto.correo, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profileEx')
  getProfile(@Request() req) {
    return req.user;
  }
}
