import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';
import { SlideShowRouting } from './slide-show-routing.module';
import { NgContentComponent } from './ng-content/ng-content.component';
import { SwitchViewComponent } from './switch-view/switch-view.component';
import { ChangeDetectorComponent } from './change-detector/change-detector.component';
import { MovieModule } from '../common/movie/movie.module';
import { OpenCloseComponent } from './open-close/open-close.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';

@NgModule({
    declarations: [
        NgContentComponent,
        SwitchViewComponent,
        ChangeDetectorComponent,
        OpenCloseComponent,
        InsertRemoveComponent,
        LazyLoadingComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        MovieModule,
        SlideShowRouting
    ],
    exports:[
        NgContentComponent
    ]
})
export class SlideShowModule { }
