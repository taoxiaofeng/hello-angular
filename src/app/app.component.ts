import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}

