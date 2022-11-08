import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'not-found',
    styleUrls: ['./not-found.component.scss'],
    template: `
        <div id="not-found">
            <p> Page not found </p>
            <p> Ouups! This page doesn't existe anymore or never existed. </p>
            <p> Please check the url or go back to the <a routerLink="/home">home page</a>. </p>
        </div>
    `
})
export class NotFoundComponent {
    constructor(private router: Router, private route: ActivatedRoute){}
}