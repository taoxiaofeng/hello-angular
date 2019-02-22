import { TreeModule } from 'angular-tree-component';
import { NgModule } from '@angular/core';
import { MyToolbarModule } from './common/my-toolbar/my-toolbar.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { HeroSearchModule } from './common/hero-search/hero-search.module';
import { AioTopMenuModule } from './common/aio-top-menu/aio-top-menu.module';
import { HighlightDirectiveModule } from './attribute-directive/highlight.ditective.module';
import { CounterModule } from './common/counter/counter.module';
import { WarpperModule } from './common/warpper/warpper.module';
import { GreetModule } from './common/greet/greet.module';
import { ChildModule } from './common/child/child.module';
import { ParentModule } from './common/parent/parent.module';

@NgModule({
    imports:[
        NgbModule,
        FormsModule,
        CommonModule,
        TreeModule,
        HeroSearchModule,
        MyToolbarModule,
        AioTopMenuModule,
        HighlightDirectiveModule,
        CounterModule,
        WarpperModule,
        GreetModule,
        ChildModule,
        ParentModule
    ],
    exports:[
        NgbModule,
        FormsModule,
        CommonModule,
        TreeModule,
        HeroSearchModule,
        MyToolbarModule,
        AioTopMenuModule,
        HighlightDirectiveModule,
        CounterModule,
        WarpperModule,
        GreetModule,
        ChildModule,
        ParentModule
    ],
    declarations:[
        
    ]
})
export class SharedModule {}