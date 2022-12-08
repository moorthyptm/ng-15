import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app/app.component';
import { DI_TEST } from './tokens';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    { provide: DI_TEST, useValue: 'Hello from DI' },
    provideRouter(APP_ROUTES),
  ],
}).catch((err) => console.error(err));
