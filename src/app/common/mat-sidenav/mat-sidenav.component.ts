import { Component, OnInit, Input, Output, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
import { Menus } from "../../menu/menu";

@Component({
    selector: "mat-sidenav",
    templateUrl: "./mat-sidenav.component.html",
    styleUrls: ["./mat-sidenav.component.css"]
})
export class MatSidenavComponent implements OnInit {
    @Input() matSidenavStatus: boolean = true;
    @Input() menus: Menus;
    @Input() selectMenu: Menus;
    // public menuUnfold:boolean = false;
    public selectSubMenu: any;
    public selectThreeMenu: any;
    constructor(public router: Router) { }

    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        if (changes.selectMenu && changes.selectMenu.currentValue) {
            let curValue = changes.selectMenu.currentValue;
            if (curValue.children && curValue.children.length > 0) {
                // this.selectSubMenu = changes.selectMenu.currentValue.children[0];
                this.checkedMenus(
                    "subMenu",
                    changes.selectMenu.currentValue.children[0]
                );
                if (changes.selectMenu.currentValue.children[0].children) {
                    // this.selectThreeMenu = changes.selectMenu.currentValue.children[0].children[0];
                    this.checkedMenus(
                        "threeMenu",
                        changes.selectMenu.currentValue.children[0].children[0]
                    );
                }
            }
        }
    }
    ngOnInit() { }

    //展开菜单
    checkedMenus(hierarchy: string, menu: any) {
        if (!menu) {
            return;
        }
        switch (hierarchy) {
            case "subMenu":
                if (
                    !this.selectSubMenu ||
                    (this.selectSubMenu && this.selectSubMenu.name != menu.name)
                ) {
                    this.selectSubMenu = menu;
                } else {
                    this.selectSubMenu = {};
                }
                break;
            case "threeMenu":
                this.selectThreeMenu = menu;
                break;
            default:
                break;
        }
        this.router.navigate([menu.url]);
    }
}
