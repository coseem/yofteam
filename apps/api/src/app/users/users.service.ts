import { Injectable } from '@nestjs/common';
import { Role, UserDto } from '@yofteam/shared-types';

@Injectable()
export class UsersService {
  private readonly users: UserDto[] = [
    {
      id: '1',
      email: 'client@yofteam.local',
      fullName: 'Client User',
      role: Role.CLIENT,
      createdAt: new Date().toISOString(),
    },
  ];

  findAll(): UserDto[] {
    return this.users;
  }
}
