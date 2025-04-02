import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AtGuard extends AuthGuard('jwt') {
  constructor(private refelector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext): any {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const isPublic = this.refelector.getAllAndOverride('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;
    return super.canActivate(context);
  }
}
