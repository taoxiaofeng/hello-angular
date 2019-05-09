import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../app-routing.module';
import { FunctionPointsComponent } from './points/function-points.component';

const routes: Routes = [{
    path: '',
    data: { breadcrumb: 'function-points' },
    children: [{
        path: 'points',
        canActivate: [AuthGuard],
        component: FunctionPointsComponent,
        data: { breadcrumb: 'points' }
    }]
}]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class FunctionPointsRoutingModule { }