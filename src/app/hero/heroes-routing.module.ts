import { Routes, RouterModule, CanActivate, Router } from "@angular/router";
import { Injectable, ModuleWithProviders, NgModule } from "@angular/core";
import { HeroesComponent } from './heroes/heroes.component';
// import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes:Routes = [{
    path:'my-heroes',
    component:HeroesComponent,
    pathMatch:'full'
},
// {
//     path:'hero-search',
//     component:HeroSearchComponent,
//     pathMatch:'full'
// },
{
    path:'hero-detail',
    component:HeroDetailComponent,
    pathMatch:'full'
},{
    path:'hero-detail/:id',
    component:HeroDetailComponent,
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

export class HeroesRoutingModule {}