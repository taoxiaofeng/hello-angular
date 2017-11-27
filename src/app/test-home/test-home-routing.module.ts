import { HomeComponent } from './../home.component';
import { Routes, RouterModule, CanActivate, Router } from "@angular/router";
import { Injectable, ModuleWithProviders, NgModule } from "@angular/core";
import { TestHomeComponent } from './test-home.component';


const routes:Routes = [{
    path:'test-home',
    component:TestHomeComponent,
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

export class TestHomeRoutingModule {}