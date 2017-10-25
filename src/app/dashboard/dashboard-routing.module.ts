import { Routes, RouterModule, CanActivate, Router } from "@angular/router";
import { Injectable, ModuleWithProviders, NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard.component';


const routes:Routes = [{
    path:'my-dashboard',
    component: DashboardComponent,
    pathMatch:'full'
}]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class DashboardRoutingModule {}