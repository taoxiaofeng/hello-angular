import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconCmpComponent } from "./icon-cmp/icon-cmp.component";
import { ButtonCmpComponent } from "./button-cmp/button-cmp.component";
import { AuthGuard } from '../../app-routing.module';

const routes: Routes = [{
    path:'button',
    component:ButtonCmpComponent,
    canActivate:[AuthGuard]
},{
    path:'icon',
    component:IconCmpComponent,
    canActivate:[AuthGuard]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GeneralRoutingModule { }
