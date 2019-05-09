import { LoginComponent } from './login/login.component';
import { Injectable, ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, Router } from '@angular/router';
import { HomeComponent } from './home.component';
import { ChatComponent } from './common/chat/chat.component';
import { LoginGuard } from './guard/login-guard';

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
    pathMatch: 'full',
    data: { breadcrumb: ''}
}, {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    // data: { breadcrumb: 'home'}
}, 
{
    path:'login',
    canActivate: [AuthGuard],
    loadChildren: './login/login.module#LoginModule',
    // data: { breadcrumb: 'login'}
},
{
    path: 'cmp',
    canActivate: [LoginGuard],
    loadChildren: './components/components.module#ComponentsModule',
    // data: { breadcrumb: 'cmp'}
},
{
    path: 'slide-show',
    canActivate: [AuthGuard],
    loadChildren: './slide-show/slide-show.module#SlideShowModule',
    // data: { breadcrumb: 'slide-show'}
},
{
    path: 'function-points',
    canActivate: [AuthGuard],
    loadChildren: './function-points/function-points.module#FunctionPointsModule',
    // data: { breadcrumb: 'slide-show'}
},
{
    path: 'chat',
    canActivate: [AuthGuard],
    component: ChatComponent,
    outlet:'aux'
    // data: { breadcrumb: 'slide-show'}
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
    providers: [AuthGuard,LoginGuard]
})
export class AppRoutingModule { }
