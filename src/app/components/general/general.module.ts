import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeneralRoutingModule } from './general-routing.module';
import { IconCmpComponent } from "./icon-cmp/icon-cmp.component";
import { ButtonCmpComponent } from "./button-cmp/button-cmp.component";
import { ButtonDemoModule } from '../components-demo/button-demo/button-demo.module';
import { HttpClientModule } from '@angular/common/http';
import { IconSvgHtmlPipe } from './icon-cmp/icon-svg-html.pipe';

@NgModule({
    declarations: [
        ButtonCmpComponent,
        IconCmpComponent,
        IconSvgHtmlPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        GeneralRoutingModule,
        ButtonDemoModule,
        HttpClientModule
    ],
    exports: [
        ButtonCmpComponent,
        IconCmpComponent
    ]
})
export class GeneralModule { }
