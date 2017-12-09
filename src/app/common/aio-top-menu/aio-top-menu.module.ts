import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AioTopMenuComponent } from './aio-top-menu.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        AioTopMenuComponent
    ],
    declarations: [
        AioTopMenuComponent
    ]
})

export class AioTopMenuModule { }