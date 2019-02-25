import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GridComponent } from './grid/grid.component';
import { AuthGuard } from '../../app-routing.module';
import { LayoutCmpComponent } from './layout-cmp/layout-cmp.component';

const routes: Routes = [{ 
    path: 'grid',
    component: GridComponent,
    data: { breadcrumb: 'grid'}
},{
    path: 'layout-cmp',
    component: LayoutCmpComponent,
    data: { breadcrumb: 'layout-cmp'}
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
