import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicComponent } from './dynamic.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared.module';


@NgModule({
    imports:[
        SharedModule,
        DynamicRoutingModule
    ],
    exports:[
        SharedModule,
        DynamicRoutingModule
    ],
    declarations:[
        DynamicComponent
    ],
    providers:[
    ]
})
export class DynamicModule {}