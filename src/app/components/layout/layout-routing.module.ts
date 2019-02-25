import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GridComponent } from './grid/grid.component';
import { AuthGuard } from '../../app-routing.module';
import { LayoutCmpComponent } from './layout-cmp/layout-cmp.component';

const routes: Routes = [{ 
    path: 'grid',
    component: GridComponent,
    canActivate:[AuthGuard]
},{
    path: 'layout-cmp',
    component: LayoutCmpComponent,
    canActivate:[AuthGuard]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
