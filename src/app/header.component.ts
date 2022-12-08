import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DI_TEST } from 'src/tokens';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: ` <header>
    <h2>{{ title | titlecase }}</h2>

    <nav>
      <ul>
        <li>
          <a
            routerLink=""
            routerLinkActive="router-link-active"
            [routerLinkActiveOptions]="{ exact: true }"
            >Home</a
          >
        </li>
        <li>
          <a routerLink="page1" routerLinkActive="router-link-active">Page 1</a>
        </li>
      </ul>
    </nav>
  </header>`,
  styles: [
    `
      header {
        color: white;
        background-color: dodgerblue;
        padding: 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        li {
          cursor: pointer;
          padding: 1em;
          color: white;
          &:hover {
            color: darken(white, 10);
          }
        }
      }
      a {
        text-decoration: none;
        color: white;
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
