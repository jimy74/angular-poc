import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.scss'],
  template: `
    <div id="home">
      <h1>Welcome to the Admin Web Application!</h1>
      <p>Here you will be able to manage projects with a variety of attributes.</p>
      <p>We wish you the best on our fast, reactive, friendly app!</p>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class HomeComponent {
  constructor(private router: Router, private route: ActivatedRoute){}
}
