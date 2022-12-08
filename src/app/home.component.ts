import { Component } from '@angular/core';
import { DI_TEST } from 'src/tokens';
import { DisplayComponent } from './display.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DisplayComponent],
  // providers: [{ provide: DI_TEST, useValue: 'Hello from DI' }],
  template: `
    <!-- {{ isEven() }} -->
    <app-display [isEven]="isEven"></app-display>
    <button (click)="setValue($event)">Try</button>
  `,
  styles: [
    `
      button {
        padding: 1em 2em;
        font-size: 1.5em;
        color: white;
        background-color: dodgerblue;
        outline: none;
        border: none;
        border-radius: 0.5em;
        &:hover {
          cursor: pointer;
          background-color: darken($color: dodgerblue, $amount: 10);
        }
      }
    `,
  ],
})
export class HomeComponent {
  x: number | undefined;

  get isEven(): boolean {
    console.log('Getter called');
    if (this.x) return !(this.x % 2);
    console.error('Not able to determine since its undefined');
    return false;
  }

  setValue(event: MouseEvent): void {
    this.x = event.clientX;
  }

  // isEven():boolean {
  //   console.log('Method called');
  //   if (this.x) return !(this.x % 2);
  //   console.error('Not able to determine since its undefined');
  //   return false;
  // }
}
