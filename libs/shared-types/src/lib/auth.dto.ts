import { Role } from './user.dto';

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  fullName: string;
  role: Role;
}

export interface AuthResponseDto {
  accessToken: string;
  refreshToken?: string;
  userId: string;
  role: Role;
}
