import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AdminAppComponent } from './app/app.component';
import { ADMIN_ROUTES } from './app/app.routes';

bootstrapApplication(AdminAppComponent, {
  providers: [provideRouter(ADMIN_ROUTES)],
}).catch((err) => console.error(err));
