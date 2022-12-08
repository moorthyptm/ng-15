import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ` <header>
    <h1>{{ title | titlecase }}</h1>
  </header>`,
  styles: [
    `
      header {
        color: white;
        background-color: dodgerblue;
        padding: 2em;
      }
    `,
  ],
})
export class HeaderComponent {
  @Input() title!: string;
}
