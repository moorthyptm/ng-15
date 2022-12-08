import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header [title]="title"></app-header>
    <div class="content">
      <!-- {{ isEven() }} -->
      <app-display [isEven]="isEven"></app-display>
      <button (click)="setValue($event)">Try</button>
    </div>
  `,
  styles: [
    `
      .content {
        height: calc(100vh - 6.5em);
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
      }

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
export class AppComponent {
  title = 'standalone';
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
