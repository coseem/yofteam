export enum Role {
  CLIENT = 'client',
  EXECUTOR = 'executor',
  ADMIN = 'admin',
}

export interface UserDto {
  id: string;
  email: string;
  fullName: string;
  role: Role;
  createdAt: string;
}
