import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app-routing.module';
import { NgContentComponent } from './ng-content/ng-content.component';
import { SwitchViewComponent } from './switch-view/switch-view.component';

const routes: Routes = [{
    path: '',
    children: [{
        path: 'ng-content',
        canActivate: [AuthGuard],
        component: NgContentComponent
    },{
        path: 'switch-view',
        canActivate: [AuthGuard],
        component: SwitchViewComponent
    }]
}]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class SlideShowRouting { }