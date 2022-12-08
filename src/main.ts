import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { DI_TEST } from './tokens';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [{ provide: DI_TEST, useValue: 'Hello from DI' }],
}).catch((err) => console.error(err));
