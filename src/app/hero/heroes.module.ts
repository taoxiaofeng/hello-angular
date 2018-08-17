import { NgModule } from '@angular/core';
import { SharedModule } from './../shared.module';
import { HeroesComponent } from './heroes.component';
// import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesRoutingModule } from './heroes-routing.module';


@NgModule({
    imports:[
        SharedModule,
        HeroesRoutingModule
    ],
    exports:[
    ],
    declarations:[
        HeroesComponent,
        // HeroSearchComponent,
        HeroDetailComponent
    ],
    providers:[
    ]
})
export class HeroesModule {}