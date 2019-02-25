import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AuthGuard } from '../../app-routing.module';
import { AffixComponent } from './affix/affix.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MenuCmpComponent } from './menu-cmp/menu-cmp.component';
import { PaginationComponent } from './pagination/pagination.component';
import { StepsComponent } from './steps/steps.component';

 const routes:Routes = [{
    path: 'affix',
    component: AffixComponent,
    canActivate:[AuthGuard]
 },{
    path: 'breadcrumb',
    component: BreadcrumbComponent,
    canActivate:[AuthGuard]
 },{
    path: 'dropdown',
    component: DropdownComponent,
    canActivate:[AuthGuard]
 },{
    path: 'menu-cmp',
    component: MenuCmpComponent,
    canActivate:[AuthGuard]
 },{
    path: 'pagination',
    component: PaginationComponent,
    canActivate:[AuthGuard]
 },{
    path: 'steps',
    component: StepsComponent,
    canActivate:[AuthGuard]
 }]
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule]
})
export class NavigationRoutingModule {}