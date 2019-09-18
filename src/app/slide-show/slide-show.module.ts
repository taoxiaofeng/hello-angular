import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';
import { SlideShowRouting } from './slide-show-routing.module';
import { NgContentComponent } from './ng-content/ng-content.component';
import { SwitchViewComponent } from './switch-view/switch-view.component';
import { ChangeDetectorComponent } from './change-detector/change-detector.component';
import { MovieModule } from '../common/movie/movie.module';

@NgModule({
    declarations: [
        NgContentComponent,
        SwitchViewComponent,
        ChangeDetectorComponent
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
