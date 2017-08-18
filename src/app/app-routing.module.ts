import { NgModule } from '@angular/core';
import { RouterModule, Router} from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';


const routes: Router = [
	{ path:'', redirectTo: '/deshboard', pathMatch: 'full'},
	{ path: 'dashboard', component: DashboardComponent},
	{ path: 'detail/:id', component: HeroesComponent},
	{ path: 'heroes', component: HeroDetailComponent}
];

@NgModule({
	import: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
	
});
export class AppRoutingModule {}

