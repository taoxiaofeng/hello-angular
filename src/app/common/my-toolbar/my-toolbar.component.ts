import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-toolbar',
    templateUrl: './my-toolbar.component.html',
    styleUrls: ['./my-toolbar.component.css']
})
export class MyToolbarComponent implements OnInit {
    private host = window.location.href;
    private angularLogoImg='../../../assets/images/logo-nav@2x.png';
    constructor() { }

    ngOnInit() { }
}