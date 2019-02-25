import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsRoutingModule } from './component-routing.module';
import { GeneralModule } from './general/general.module';
import { NavigationModule } from './navigation/navigation.module';
import { LayoutModule } from './layout/layout.module';
import { DataEntryModule } from './data-entry/data-entry.module';
//共享模块
import { SharedModule } from '../shared.module';
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ComponentsRoutingModule,
        SharedModule,
        GeneralModule,
        LayoutModule,
        NavigationModule,
        DataEntryModule
    ],
    exports: []
})
export class ComponentsModule { }
