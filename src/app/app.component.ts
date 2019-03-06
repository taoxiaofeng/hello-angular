import { Component, ChangeDetectorRef } from "@angular/core";
import { AdService } from "./add-banner/ad.service";
import { AdItem } from "./add-banner/ad-item";
import { MenuService } from "./menu/menu.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    providers: [MenuService]
})
export class AppComponent {
    title = "Tour of Heroes";
    ads: AdItem[];
    menus: any[] = [];
    matSidenavStatus: boolean = true;
    selectMenu:any;

    constructor(
        private adService: AdService,
        private changeDetectorRef: ChangeDetectorRef,
        private menuService: MenuService,
        private router: Router
    ) { }

    ngOnInit() {
        // this.changeDetectorRef.markForCheck();
        // this.ads = this.adService.getAds();
        // this.changeDetectorRef.detectChanges();
        this.menus = this.menuService.menus;
        this.selectMenu = this.menus[0];
        this.router.navigate(['/cmp/general/button']);
        
    }

    //获取 matSidenav 状态
    getMatSidenavStatus($event:boolean) {
        this.matSidenavStatus = $event;
    }

    //获取选择的一级菜单
    getMenu($event:any) {
        this.selectMenu = JSON.parse(JSON.stringify($event));
    }
}
