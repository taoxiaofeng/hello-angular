import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroSearchComponent } from './hero-search.component';

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    exports:[
        HeroSearchComponent
    ],
    declarations:[
        HeroSearchComponent
    ]
})

export class HeroSearchModule {}