import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Role } from '@yofteam/shared-types';
import { AuthService } from './auth.service';

export const roleGuard = (roles: Role[]): CanActivateFn => {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.hasRole(roles)) {
      return true;
    }

    return router.parseUrl('/login');
  };
};
