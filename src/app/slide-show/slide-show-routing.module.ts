import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app-routing.module';
import { NgContentComponent } from './ng-content/ng-content.component';
import { SwitchViewComponent } from './switch-view/switch-view.component';
import { ChangeDetectorComponent } from './change-detector/change-detector.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';

const routes: Routes = [{
    path: '',
    data: { breadcrumb: 'slide-show' },
    children: [{
        path: 'ng-content',
        canActivate: [AuthGuard],
        component: NgContentComponent,
        data: { breadcrumb: 'ngContent' }
    }, {
        path: 'switch-view',
        canActivate: [AuthGuard],
        component: SwitchViewComponent,
        data: { breadcrumb: 'switchView' }
    }, {
        path: 'change-detector',
        canActivate: [AuthGuard],
        component: ChangeDetectorComponent,
        data: { breadcrumb: 'changeDetector' }
    }, {
        path: 'app-open-close',
        canActivate: [AuthGuard],
        component: OpenCloseComponent,
        data: { breadcrumb: 'app-open-close' }
    }, {
        path: 'app-insert-remove',
        canActivate: [AuthGuard],
        component: InsertRemoveComponent,
        data: { breadcrumb: 'app-insert-remove' }
    }]
}]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class SlideShowRouting { }