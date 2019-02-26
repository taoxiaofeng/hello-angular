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
    data: { breadcrumb: 'affix'}
 },{
    path: 'breadcrumb',
    component: BreadcrumbComponent,
    data: { breadcrumb: 'breadcrumb'}
 },{
    path: 'dropdown',
    component: DropdownComponent,
    data: { breadcrumb: 'dropdown'}
 },{
    path: 'menu-cmp',
    component: MenuCmpComponent,
    data: { breadcrumb: 'menu-cmp'}
 },{
    path: 'pagination',
    component: PaginationComponent,
    data: { breadcrumb: 'pagination'}
 },{
    path: 'steps',
    component: StepsComponent,
    data: { breadcrumb: 'steps'}
 }]
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule]
})
export class NavigationRoutingModule {}