import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  // providers: [{ provide: DI_TEST, useValue: 'Hello from DI' }],
  template: `<app-header [title]="title"></app-header>
    <div class="content"><router-outlet></router-outlet></div>`,
})
export class AppComponent {
  title = 'standalone';
}
