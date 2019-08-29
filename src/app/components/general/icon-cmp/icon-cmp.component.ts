import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { IconCmpService } from './icon-cmp.service';

@Component({
    selector: 'app-icon-cmp',
    templateUrl: './icon-cmp.component.html',
    styleUrls: ['./icon-cmp.component.css'],
    providers: [IconCmpService]
})
export class IconCmpComponent implements OnInit, AfterViewInit {
    public IconList: any[] = [];
    constructor(
        private iconCmpService: IconCmpService
    ) { }

    ngOnInit(): void {
        this.getIconData();
    }

    ngAfterViewInit(): void {}

    getIconData() {
        this.iconCmpService.getIconData().subscribe(res => {
            console.log(res);
            if (res && res.code === 200 && res.data && res.data.icons) {
                this.IconList = res.data.icons;
            }
        })
    }

}
