import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { DI_TEST } from 'src/tokens';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
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
  constructor(@Inject(DI_TEST) private DIPropValue: string) {
    console.log(this.DIPropValue);
  }
}
