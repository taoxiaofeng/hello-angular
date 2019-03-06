import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconCmpComponent } from "./icon-cmp/icon-cmp.component";
import { ButtonCmpComponent } from "./button-cmp/button-cmp.component";
import { AuthGuard } from '../../app-routing.module';
import { UnsavedGuard } from '../../guard/unsaved.guard';

const routes: Routes = [{
    path:'button',
    component:ButtonCmpComponent,
    data:{ breadcrumb: 'button' },
    canDeactivate:[UnsavedGuard] //添加路由守卫，在页面离开的时候给予提示  守卫，来决定该路由能否停用
},{
    path:'icon',
    component:IconCmpComponent,
    data: { breadcrumb: 'icon'}
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers:[UnsavedGuard]
})
export class GeneralRoutingModule { }
