import { NgModule } from '@angular/core';
import { SharedModule } from './../shared.module';
import { TestHomeComponent } from './test-home.component';
import { TestHomeRoutingModule } from './test-home-routing.module';

@NgModule({
    imports:[
        SharedModule,
        TestHomeRoutingModule
    ],
    exports:[
    ],
    declarations:[
        TestHomeComponent
    ],
    providers:[
    ]
})
export class TestHomeModule {}