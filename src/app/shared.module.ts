import { MyToolbarModule } from './common/my-toolbar/my-toolbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeModule } from 'angular2-tree-component';
import { provideInterceptorService } from 'ng2-interceptors';
import { NgbModule, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { HeroSearchModule } from './common/hero-search/hero-search.module';
import { AioTopMenuModule } from './common/aio-top-menu/aio-top-menu.module';

@NgModule({
    imports:[
        NgbModule,
        FormsModule,
        CommonModule,
        TreeModule,
        HeroSearchModule,
        MyToolbarModule,
        AioTopMenuModule
    ],
    exports:[
        NgbModule,
        FormsModule,
        CommonModule,
        TreeModule,
        HeroSearchModule,
        MyToolbarModule,
        AioTopMenuModule
    ],
    declarations:[

    ]
})
export class SharedModule {}