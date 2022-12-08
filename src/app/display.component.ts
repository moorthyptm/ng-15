import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <p *ngIf="isEven; else odd">Its Even 🙌</p>
    </div>
    <ng-template #odd>
      <p>Its Odd 🤖</p>
    </ng-template>
  `,

  styles: [
    `
      p {
        font-size: 5em;
      }
    `,
  ],
})
export class DisplayComponent {
  @Input() isEven!: boolean;
}
