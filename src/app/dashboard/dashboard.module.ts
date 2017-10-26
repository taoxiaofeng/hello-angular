import { NgModule } from '@angular/core';
import { SharedModule } from './../shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
    imports:[
        SharedModule,
        DashboardRoutingModule
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