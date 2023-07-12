import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(correo: string, pass: string) {
    const user = await this.userService.findOne(correo);

    const isMatch = await bcrypt.compare(pass, user.password);

    console.log(isMatch);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, correo: user.correo };

    console.log(user);

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
