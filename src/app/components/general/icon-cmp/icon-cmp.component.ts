import { Component, OnInit } from '@angular/core';
import { IconCmpService } from './icon-cmp.service';

@Component({
    selector: 'app-icon-cmp',
    templateUrl: './icon-cmp.component.html',
    styleUrls: ['./icon-cmp.component.css'],
    providers: [IconCmpService]
})
export class IconCmpComponent implements OnInit {

    constructor(
        private iconCmpService: IconCmpService
    ) { }

    ngOnInit() {
        this.getIconData();
    }

    getIconData() {
        this.iconCmpService.getIconData().subscribe(iconData => {
            console.log(iconData);
        })
    }

}
