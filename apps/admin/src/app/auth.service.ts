import { Injectable } from '@angular/core';
import { Role } from '@yofteam/shared-types';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private role: Role = Role.ADMIN;

  setRole(role: Role): void {
    this.role = role;
  }

  hasRole(allowedRoles: Role[]): boolean {
    return allowedRoles.includes(this.role);
  }
}
