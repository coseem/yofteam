import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Role } from '@yofteam/shared-types';
import { roleGuard } from './role.guard';

@Component({ standalone: true, template: '<h1>Web Login Page</h1>' })
class LoginComponent {}

@Component({ standalone: true, template: '<h1>Web Register Page</h1>' })
class RegisterComponent {}

@Component({ standalone: true, template: '<h1>Client Dashboard</h1>' })
class ClientDashboardComponent {}

@Component({ standalone: true, template: '<h1>Executor Dashboard</h1>' })
class ExecutorDashboardComponent {}


@Component({ standalone: true, template: '<h1>Page Not Found</h1>' })
class NotFoundComponent {}

export const WEB_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard/client',
    canActivate: [roleGuard([Role.CLIENT])],
    component: ClientDashboardComponent,
  },
  {
    path: 'dashboard/executor',
    canActivate: [roleGuard([Role.EXECUTOR])],
    component: ExecutorDashboardComponent,
  },
  { path: '**', component: NotFoundComponent },
];
