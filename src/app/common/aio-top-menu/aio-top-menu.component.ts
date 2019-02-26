import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
    selector: 'aio-top-menu',
    templateUrl: './aio-top-menu.component.html',
    styleUrls: ['./aio-top-menu.component.css']
})
export class AioTopMenuComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() { }

    //dashboard
    dashboard() {
        this.router.navigate(['/dashboard/']);
    }
    //heroes
    heroes() {
        this.router.navigate(['/hero/my-heroes']);
    }
    //dynamic
    dynamic() {
        this.router.navigate(['/dynamic']);
    }
    // routerDemo
    routerDemo() {
        this.router.navigate(['/router-demo']);
    }
}