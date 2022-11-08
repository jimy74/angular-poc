import { Component } from '@angular/core';

@Component({
  selector: 'attributes-admin',
  styleUrls: ['./attributes-admin.component.scss'],
  template: `
    <div id="attributes-admin">
      <h1>Attributes administration dashboard</h1>
      <p>Here you can have a global overview on every attributes, and rework them as you want.</p>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class AttributesAdminComponent {
}
