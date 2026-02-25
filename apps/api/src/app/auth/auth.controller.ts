import { Body, Controller, Post } from '@nestjs/common';
import { AuthResponseDto, LoginDto, RegisterDto } from '@yofteam/shared-types';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() dto: LoginDto): AuthResponseDto {
    return this.authService.login(dto);
  }

  @Post('register')
  register(@Body() dto: RegisterDto): AuthResponseDto {
    return this.authService.register(dto);
  }
}
