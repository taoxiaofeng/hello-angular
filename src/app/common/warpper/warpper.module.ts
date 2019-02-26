import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WarpperComponent } from './warpper.component';

@NgModule({
    declarations: [
        WarpperComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports:[
        WarpperComponent
    ]
})
export class WarpperModule { }
