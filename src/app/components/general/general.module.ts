import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeneralRoutingModule } from './general-routing.module';
import { IconCmpComponent } from "./icon-cmp/icon-cmp.component";
import { ButtonCmpComponent } from "./button-cmp/button-cmp.component";
import { ButtonDemoModule } from '../components-demo/button-demo/button-demo.module';

@NgModule({
    declarations: [
        ButtonCmpComponent,
        IconCmpComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        GeneralRoutingModule,
        ButtonDemoModule
    ],
    exports: [
        ButtonCmpComponent,
        IconCmpComponent
    ]
})
export class GeneralModule { }
