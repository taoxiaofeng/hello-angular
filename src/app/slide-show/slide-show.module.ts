import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';
import { SlideShowRoutingRouting } from './slide-show-routing.module';
import { NgContentComponent } from './ng-content/ng-content.component';

@NgModule({
    declarations: [
        NgContentComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        SlideShowRoutingRouting
    ],
    exports:[
        NgContentComponent
    ]
})
export class SlideShowModule { }
