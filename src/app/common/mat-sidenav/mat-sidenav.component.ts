import { Component, OnInit, Input, Output } from "@angular/core";

@Component({
    selector: "mat-sidenav",
    templateUrl: "./mat-sidenav.component.html",
    styleUrls: ["./mat-sidenav.component.css"]
})
export class MatSidenavComponent implements OnInit {
    @Input() matSidenavStatus: boolean = true;
    @Input() menus: any;
    // public menuUnfold:boolean = false;
    public selectMenu: any;
    constructor() { }
    ngOnInit() { }

    //设置右侧展示的箭头Class
    // setArrowsClass(): Object {
    //     let classes = {
    //         "icon-arrows-right": !this.menuUnfold,
    //         "icon-arrows-down": this.menuUnfold
    //     };
    //     return classes;
    // }

    //展开菜单
    extendedMenus(menu: any) {
        // this.menuUnfold  = !this.menuUnfold;
        if (!this.selectMenu || (this.selectMenu && this.selectMenu.name != menu.name)) {
            this.selectMenu = menu;
        } else {
            this.selectMenu = {};
        }
        console.log(this.selectMenu);
    }
}
