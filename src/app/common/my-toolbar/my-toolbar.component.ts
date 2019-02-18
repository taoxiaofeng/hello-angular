import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-toolbar',
    templateUrl: './my-toolbar.component.html',
    styleUrls: ['./my-toolbar.component.css']
})
export class MyToolbarComponent implements OnInit {
    private host = window.location.href;
    private angularLogoImg='../../../assets/images/logo-nav@2x.png';
    @Input() matSidenavStatus:boolean = true;
    @Input() menus:any[] = [];
    @Output() exportMatSidenavStatus = new EventEmitter();
    constructor() { }

    ngOnInit() { }

    sidenavStatus() {
        !this.matSidenavStatus ?  this.matSidenavStatus = true : this.matSidenavStatus = false;
        this.exportMatSidenavStatus.emit(this.matSidenavStatus);
    }
}