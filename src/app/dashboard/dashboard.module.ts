import { NgModule } from '@angular/core';
import { SharedModule } from './../shared.module';
import { DashboardComponent } from './dashboard.component';



@NgModule({
    imports:[
        SharedModule
    ],
    exports:[
    ],
    declarations:[
        DashboardComponent
    ],
    providers:[
    ]
})
export class DashboardModule {}