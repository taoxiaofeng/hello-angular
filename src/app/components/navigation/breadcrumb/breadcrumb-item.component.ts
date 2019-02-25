import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb.component';

@Component({
    selector: 'app-breadcrumb-item',
    templateUrl: './breadcrumb-item.component.html',
    styles:[`
    app-breadcrumb-item:last-child {
      color: rgba(0, 0, 0, 0.65);
    }

    app-breadcrumb-item:last-child .breadcrumb-separator {
      display: none;
    }
    `]
})
export class BreadcrumbItemComponent implements OnInit {
    constructor( public breadcrumbComponent:BreadcrumbComponent) { }

    ngOnInit(): void { }
}
