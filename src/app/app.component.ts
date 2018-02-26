import { Component } from '@angular/core';

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

    constructor(private adService: AdService) { }

    ngOnInit() {
        this.ads = this.adService.getAds();
    }
}
