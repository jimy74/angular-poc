import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'settings',
  styleUrls: ['./settings.component.scss'],
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div id="settings">
      <h1>Settings</h1>
      <p>Here you can configure this application to fit your preferences.</p>
      <p>This page is still under development...</p>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class SettingsComponent {
  constructor(private router: Router, private route: ActivatedRoute){}
}
