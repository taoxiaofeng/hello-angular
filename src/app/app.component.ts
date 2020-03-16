import { Component, ChangeDetectorRef } from '@angular/core';
import { AdService } from './add-banner/ad.service';
import { AdItem } from './add-banner/ad-item';
import { MenuService } from './menu/menu.service';
import { Router } from '@angular/router';
import { InMemoryDataService } from './in-memory-data.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'my-app',
    animations: [
        trigger('openClose', [
            state('open', style({
                height: '200px',
                opacity: 1,
                backgroundColor: 'yellow'
            })),
            state('closed', style({
                height: '100px',
                opacity: 0.5,
                backgroundColor: 'green'
            })),
            transition('open => closed', [
                animate('1s')
            ]),
            transition('closed => open', [
                animate('0.5s')
            ])
        ])
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [MenuService, InMemoryDataService]
})
export class AppComponent {
    title = 'Tour of Heroes';
    ads: AdItem[];
    menus: any[] = [];
    matSidenavStatus = true;
    selectMenu: any;
    isOpen = true;

    constructor(
        private adService: AdService,
        private changeDetectorRef: ChangeDetectorRef,
        private menuService: MenuService,
        private router: Router,
        private inMemoryDataService: InMemoryDataService
    ) { }

    // tslint:disable-next-line: use-life-cycle-interface
    ngOnInit() {
        // this.changeDetectorRef.markForCheck();
        // this.ads = this.adService.getAds();
        // this.changeDetectorRef.detectChanges();
        this.getHeroes();
        this.menus = this.menuService.menus;
        this.selectMenu = this.menus[0];
        this.router.navigate(['/cmp/general/button']);
    }

    // 获取 matSidenav 状态
    getMatSidenavStatus($event: boolean) {
        this.matSidenavStatus = $event;
    }

    // 获取选择的一级菜单
    getMenu($event: any) {
        this.selectMenu = JSON.parse(JSON.stringify($event));
    }

    // 获取数据
    getHeroes(): void {
        this.inMemoryDataService.getHeroes()
            .subscribe(heroes => {
                console.log(heroes);
            });
    }

    toggle() {
        this.isOpen = !this.isOpen;
    }

}
