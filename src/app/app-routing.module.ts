import { Injectable, ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, Router } from '@angular/router';
import { HomeComponent } from './home.component';

import { DashboardComponent } from './dashboard/dashboard.component';
// import { DashboardComponent } from './dashboard.component';
// import { HeroesComponent } from './heroes.component';
// import { HeroDetailComponent } from './hero-detail.component';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { } //private userService: UserService,

    canActivate() {
        // if(this.router.url.indexOf('/my-heroes/') != -1){
        //     return window.confirm('要离开此网站吗? 系统可能不会保存您所做的更改。');
        // }else{
        //     // if (this.userService.isLogin) {
        //     //     return true;
        //     // }
        //     this.router.navigate(['/home']);
        //     return false;
        // }
        return true;
    }
}

const routes: Routes = [{
  path: '', 
  component: HomeComponent,
  pathMatch: 'full'
},{
  path: 'home', 
  component: HomeComponent,
  pathMatch: 'full'
}
// ,{
//   path: 'my-dashboard', 
//   component: DashboardComponent,
//   pathMatch: 'full'
// }
,{
  path: 'dashboard',
  canActivate: [AuthGuard],
  loadChildren:'./dashboard/dashboard.module#DashboardModule'
}
,{
  path: 'hero',
  canActivate: [AuthGuard],
  loadChildren:'./hero/heroes.module#HeroesModule'
}
,{
  path: 'test-home',
  canActivate: [AuthGuard],
  loadChildren:'./test-home/test-home.module#TestHomeModule'
}];

// { path: 'detail/:id', component: HeroDetailComponent },
// { path: 'heroes',     component: HeroesComponent }


export const authProviders = [AuthGuard];
export const appRoutingProviders: any[] = [
    authProviders
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers:[AuthGuard]
})
export class AppRoutingModule {}
