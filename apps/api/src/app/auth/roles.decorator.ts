import { SetMetadata } from '@nestjs/common';
import { Role } from '@yofteam/shared-types';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
