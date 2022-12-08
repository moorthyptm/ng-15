import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./app/home.component').then((tsm) => tsm.HomeComponent),
  },
  {
    path: 'page1',
    loadComponent: () =>
      import('./app/page1.component').then((tsm) => tsm.Page1Component),
  },
];
