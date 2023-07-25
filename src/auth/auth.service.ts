import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string) {
    const user = await this.userService.findOne(username);

    const isMatch = await bcrypt.compare(pass, user.password);

    console.log(isMatch);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.id,
      username: user.username,
      rol: [user.roles],
    };

    console.log(user);

    return {
      username: username,
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  getProfile() {
    return 'Esto retornaria los perfiles';
  }
}
