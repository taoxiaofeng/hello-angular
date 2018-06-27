import { Component, ChangeDetectorRef } from '@angular/core';

import { AdService } from './add-banner/ad.service';
import { AdItem } from './add-banner/ad-item';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';
    ads: AdItem[];

    constructor(
        private adService: AdService,
        private changeDetectorRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.changeDetectorRef.markForCheck();
        this.ads = this.adService.getAds();
        this.changeDetectorRef.detectChanges();
    }
}
