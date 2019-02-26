import { RouterDemoRoutingModule } from './router-demo-routing.module';
import { RouterDemoComponent } from './router-demo.component';
import { SharedModule } from './../shared.module';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        SharedModule,
        RouterDemoRoutingModule
    ],
    exports: [
        SharedModule,
        RouterDemoRoutingModule
    ],
    declarations: [
        RouterDemoComponent
    ]
})

export class RouterDemoModule { }