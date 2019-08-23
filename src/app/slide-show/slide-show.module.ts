import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';
import { SlideShowRouting } from './slide-show-routing.module';
import { NgContentComponent } from './ng-content/ng-content.component';
import { SwitchViewComponent } from './switch-view/switch-view.component';

@NgModule({
    declarations: [
        NgContentComponent,
        SwitchViewComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        SlideShowRouting
    ],
    exports:[
        NgContentComponent
    ]
})
export class SlideShowModule { }
