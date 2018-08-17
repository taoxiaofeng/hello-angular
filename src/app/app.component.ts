import { Component, ChangeDetectorRef } from '@angular/core';
import { AdService } from './add-banner/ad.service';
import { AdItem } from './add-banner/ad-item';
import { MenuService } from './menu/menu.service';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [MenuService]
})
export class AppComponent {
    title = 'Tour of Heroes';
    ads: AdItem[];
    menus: any[] = [];

    constructor(
        private adService: AdService,
        private changeDetectorRef: ChangeDetectorRef,
        private menuService: MenuService
    ) { }

    ngOnInit() {
        this.changeDetectorRef.markForCheck();
        this.ads = this.adService.getAds();
        this.changeDetectorRef.detectChanges();

        this.menus = this.menuService.menus;
        console.log(this.menus);
    }
}
