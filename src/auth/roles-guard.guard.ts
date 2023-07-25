import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/decorators/roles/roles.decorator';
import { User } from 'src/user/entities/user.entity';
import { Role } from 'src/user/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {
    console.log('Roles Guard');
  }

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      console.log('Retornara true');
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    console.log(user);

    return requiredRoles.some((role) => user.rol?.includes(role));
  }
}
