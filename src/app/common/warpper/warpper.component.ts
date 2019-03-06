import { Component, OnInit, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'warpper',
    templateUrl: './warpper.component.html',
    styleUrls: ['./warpper.component.css']
})
export class WarpperComponent implements OnInit {
    show = true;
    items:any[] = [0, 0, 0];
    @ContentChild(TemplateRef) template: TemplateRef<any>;
    constructor() { }

    ngOnInit() {
    }

    getStatus() {}

}
