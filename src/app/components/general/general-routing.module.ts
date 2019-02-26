import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconCmpComponent } from "./icon-cmp/icon-cmp.component";
import { ButtonCmpComponent } from "./button-cmp/button-cmp.component";
import { AuthGuard } from '../../app-routing.module';

const routes: Routes = [{
    path:'button',
    component:ButtonCmpComponent,
    data:{ breadcrumb: 'button' }
},{
    path:'icon',
    component:IconCmpComponent,
    data: { breadcrumb: 'icon'}
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GeneralRoutingModule { }
