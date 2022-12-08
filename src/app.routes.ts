import { Route } from '@angular/router';
import { HomeComponent } from './app/home.component';
import { Page1Component } from './app/page1.component';

export const APP_ROUTES: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'page1', component: Page1Component },
];
