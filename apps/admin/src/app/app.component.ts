import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'yofteam-admin-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/login">Login</a>
      <a routerLink="/dashboard/admin">Admin Dashboard</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AdminAppComponent {}
