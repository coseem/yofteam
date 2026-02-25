import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthResponseDto, LoginDto, RegisterDto, Role } from '@yofteam/shared-types';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  login(payload: LoginDto): AuthResponseDto {
    if (!payload.email || !payload.password) {
      throw new UnauthorizedException('Email and password are required');
    }

    return {
      accessToken: this.jwtService.sign({ sub: 'demo-user-id', role: Role.CLIENT }),
      userId: 'demo-user-id',
      role: Role.CLIENT,
    };
  }

  register(payload: RegisterDto): AuthResponseDto {
    return {
      accessToken: this.jwtService.sign({ sub: payload.email, role: payload.role }),
      userId: payload.email,
      role: payload.role,
    };
  }
}
