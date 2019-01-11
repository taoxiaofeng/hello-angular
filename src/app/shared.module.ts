import { TreeModule } from 'angular-tree-component';
import { NgModule } from '@angular/core';
import { MyToolbarModule } from './common/my-toolbar/my-toolbar.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { HeroSearchModule } from './common/hero-search/hero-search.module';
import { AioTopMenuModule } from './common/aio-top-menu/aio-top-menu.module';
import { HighlightDirectiveModule } from './attribute-directive/highlight.ditective.module';

@NgModule({
    imports:[
        NgbModule,
        FormsModule,
        CommonModule,
        TreeModule,
        HeroSearchModule,
        MyToolbarModule,
        AioTopMenuModule,
        HighlightDirectiveModule
    ],
    exports:[
        NgbModule,
        FormsModule,
        CommonModule,
        TreeModule,
        HeroSearchModule,
        MyToolbarModule,
        AioTopMenuModule,
        HighlightDirectiveModule
    ],
    declarations:[
        
    ]
})
export class SharedModule {}