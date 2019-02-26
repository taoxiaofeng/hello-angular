import { Routes, RouterModule, CanActivate, Router } from "@angular/router";
import { Injectable, ModuleWithProviders, NgModule } from "@angular/core";
import { HeroesComponent } from './heroes.component';
// import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [{
    path: '',
    component: HeroesComponent,
    pathMatch: 'full',
    children: [
        {
            path: 'hero-detail',
            component: HeroDetailComponent,
            pathMatch: 'full'
        }, {
            path: 'hero-detail/:id',
            component: HeroDetailComponent,
            pathMatch: 'full'
        }]
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class HeroesRoutingModule { }