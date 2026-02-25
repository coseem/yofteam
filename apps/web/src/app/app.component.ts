import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'yofteam-web-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/login">Login</a>
      <a routerLink="/register">Register</a>
      <a routerLink="/dashboard/client">Client</a>
      <a routerLink="/dashboard/executor">Executor</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
