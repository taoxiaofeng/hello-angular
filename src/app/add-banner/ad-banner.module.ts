import { NgModule } from '@angular/core';
import { SharedModule } from './../shared.module';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component'
import { AdBannerComponent } from './ad-banner.component';
import { AdService } from './ad.service'; 
import { AdDirective } from './ad.directive';

@NgModule({
    imports:[
        SharedModule
    ],
    exports:[
        HeroJobAdComponent,
        HeroProfileComponent,
        AdBannerComponent,
        AdDirective
    ],
    declarations:[
        HeroJobAdComponent,
        HeroProfileComponent,
        AdBannerComponent,
        AdDirective
    ],
    providers:[
        AdService
    ]
})
export class AdBannerModule {}