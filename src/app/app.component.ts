import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="app-name-text-banner">
      <label>{{title}}</label>
    </div>
    <menu></menu>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-app';
}
