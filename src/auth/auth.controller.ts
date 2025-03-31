import { Body, Controller, Post } from '@nestjs/common'; // Added Post import
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/local/singup')
  singupLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signupLocal(dto);
  }

  @Post('/local/singin')
  singinLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signinLocal(dto);
  }

  @Post('/logout')
  logout() {
    return this.authService.logout();
  }

  @Post('/refresh')
  refreshTokens() {
    return this.authService.refreshTokens();
  }
}
