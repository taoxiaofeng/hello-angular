import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'router-demo',
    templateUrl: './router-demo.component.html',
    styleUrls: ['./router-demo.component.css']
})

export class RouterDemoComponent implements OnInit {

    constructor(private router: Router) {

    }

    ngOnInit() { }

    //dashboard
    dashboard() {
        this.router.navigate(['/dashboard']);
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
        let tempUrl = '/router-demo/1001/小明';
        this.router.navigate(['/router-demo', { id: 1001, name: '小明' }]);
        // this.router.navigateByUrl(tempUrl);
    }
}