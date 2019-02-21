import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsRoutingModule } from './component-routing.module';
import { SharedModule } from '../shared.module';
import { GeneralModule } from './general/general.module';
//共享模块


@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComponentsRoutingModule,
        SharedModule,
        GeneralModule
    ],
    exports: [
        
    ]
})
export class ComponentsModule { }
