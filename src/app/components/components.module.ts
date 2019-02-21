import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsRoutingModule } from './component-routing.module';
import { IconCmpComponent } from './icon-cmp/icon-cmp.component';
import { ButtonCmpComponent } from './button-cmp/button-cmp.component';
import { SharedModule } from '../shared.module';
//共享模块


@NgModule({
    declarations: [
        ButtonCmpComponent,
        IconCmpComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComponentsRoutingModule,
        SharedModule
    ],
    exports: [
        ButtonCmpComponent,
        IconCmpComponent
    ]
})
export class ComponentsModule { }
