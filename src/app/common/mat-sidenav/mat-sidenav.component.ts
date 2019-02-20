import { Component, OnInit, Input, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "mat-sidenav",
    templateUrl: "./mat-sidenav.component.html",
    styleUrls: ["./mat-sidenav.component.css"]
})
export class MatSidenavComponent implements OnInit {
    @Input() matSidenavStatus: boolean = true;
    @Input() menus: any;
    // public menuUnfold:boolean = false;
    public selectSubMenu: any;
    public selectThreeMenu: any;
    constructor(
        public router:Router
    ) { }
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
    checkedMenus(hierarchy:string,menu: any) {
         console.log(menu);
        switch (hierarchy) {
            case 'subMenu':
                if (!this.selectSubMenu || (this.selectSubMenu && this.selectSubMenu.name != menu.name)) {
                    this.selectSubMenu = menu;
                } else {
                    this.selectSubMenu = {};
                }
                break;
            case 'threeMenu':
                this.selectThreeMenu  = menu;
                this.router.navigate([menu.url]);
                break;
            default:
                break;
        }
    }
}
