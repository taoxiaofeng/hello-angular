import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeModule } from 'angular2-tree-component';
import { provideInterceptorService } from 'ng2-interceptors';
import { NgbModule, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { HeroSearchModule } from './common/hero-search/hero-search.module';

@NgModule({
    imports:[
        NgbModule,
        FormsModule,
        CommonModule,
        TreeModule,
        HeroSearchModule
    ],
    exports:[
        NgbModule,
        FormsModule,
        CommonModule,
        TreeModule,
        HeroSearchModule
    ],
    declarations:[]
})
export class SharedModule {}