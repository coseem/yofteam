import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Role } from '@yofteam/shared-types';
import { roleGuard } from './role.guard';

@Component({ standalone: true, template: '<h1>Admin Login</h1>' })
class AdminLoginComponent {}

@Component({ standalone: true, template: '<h1>Admin Dashboard</h1>' })
class AdminDashboardComponent {}


@Component({ standalone: true, template: '<h1>Page Not Found</h1>' })
class NotFoundComponent {}

export const ADMIN_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: AdminLoginComponent },
  {
    path: 'dashboard/admin',
    canActivate: [roleGuard([Role.ADMIN])],
    component: AdminDashboardComponent,
  },
  { path: '**', component: NotFoundComponent },
];
