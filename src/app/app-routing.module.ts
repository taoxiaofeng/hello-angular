import { LoginComponent } from './login/login.component';
import { Injectable, ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, Router } from '@angular/router';
import { HomeComponent } from './home.component';

// import { DashboardComponent } from './dashboard/dashboard.component';
// import { DashboardComponent } from './dashboard.component';
// import { HeroesComponent } from './heroes.component';
// import { HeroDetailComponent } from './hero-detail.component';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { } //private userService: UserService,

    canActivate() {

        return true;
    }
}

const routes: Routes = [{
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
}, {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
}, 
{
    path:'login',
    canActivate: [AuthGuard],
    loadChildren: './login/login.module#LoginModule'
},
{
    path: 'assembly',
    canActivate: [AuthGuard],
    loadChildren: './dashboard/dashboard.module#DashboardModule'
},
// {
//     path: 'dashboard',
//     canActivate: [AuthGuard],
//     loadChildren: './dashboard/dashboard.module#DashboardModule'
// }, {
//     path: 'hero',
//     canActivate: [AuthGuard],
//     loadChildren: './hero/heroes.module#HeroesModule',
//     data: { preload: true }
// }, {
//     path: 'dynamic',
//     canActivate: [AuthGuard],
//     loadChildren: './dynamic/dynamic.module#DynamicModule',
//     data: { preload: true }
// }, {
//     path: 'router-demo',
//     canActivate: [AuthGuard],
//     loadChildren: './router-demo/router-demo.module#RouterDemoModule',
//     data: { preload: true }
// }, {
//     path: 'router-demo/:id/:name',
//     canActivate: [AuthGuard],
//     loadChildren: './router-demo/router-demo.module#RouterDemoModule',
//     data: { preload: true }
// }
];

// { path: 'detail/:id', component: HeroDetailComponent },
// { path: 'heroes',     component: HeroesComponent }


export const authProviders = [AuthGuard];
export const appRoutingProviders: any[] = [
    authProviders
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }
