import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app-routing.module';
import { NgContentComponent } from './ng-content/ng-content.component';
import { SwitchViewComponent } from './switch-view/switch-view.component';
import { ChangeDetectorComponent } from './change-detector/change-detector.component';

const routes: Routes = [{
    path: '',
    data: { breadcrumb: 'slide-show'},
    children: [{
        path: 'ng-content',
        canActivate: [AuthGuard],
        component: NgContentComponent,
        data: { breadcrumb: 'ngContent'}
    },{
        path: 'switch-view',
        canActivate: [AuthGuard],
        component: SwitchViewComponent,
        data: { breadcrumb: 'switchView' }
    },{
        path: 'change-detector',
        canActivate: [AuthGuard],
        component: ChangeDetectorComponent,
        data: { breadcrumb: 'changeDetector'}
    }]
}]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class SlideShowRouting { }