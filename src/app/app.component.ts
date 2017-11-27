import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard/my-dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/hero/my-heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/test-home/test-home" routerLinkActive="active">TestHome</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
