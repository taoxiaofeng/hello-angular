import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CounterModule } from './counter/counter.module';
import { WarpperModule } from './warpper/warpper.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        CounterModule,
        WarpperModule
    ],
    exports: [
        CounterModule,
        WarpperModule
    ]
})
export class SharedModule { }
