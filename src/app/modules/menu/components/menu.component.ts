import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'menu',
  styleUrls: ['./menu.component.scss'],
  template: `
    <div>
    <nav class="menu">
      <div class="menu-element">
        <a routerLink="/home" routerLinkActive="active">Home</a>
      </div>
      <div class="menu-element">
        <a routerLink="/projects" routerLinkActive="active">Projects</a>
      </div>
      <div class="menu-element">
        <a routerLink="/attributes" routerLinkActive="active">Attributes</a>
      </div>
      <div class="menu-element">
        <a routerLink="/settings" routerLinkActive="active">Settings</a>
      </div>
    </nav>
    </div>
    <router-outlet></router-outlet>
  `
})
export class MenuComponent {
  constructor(private route: ActivatedRoute){}
}
