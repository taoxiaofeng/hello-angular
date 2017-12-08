import { HomeComponent } from './../home.component';
import { Routes, RouterModule, CanActivate, Router } from "@angular/router";
import { Injectable, ModuleWithProviders, NgModule } from "@angular/core";
import { DynamicComponent } from './dynamic.component';


const routes:Routes = [{
    path:'dynamic',
    component:DynamicComponent,
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

export class DynamicRoutingModule {}