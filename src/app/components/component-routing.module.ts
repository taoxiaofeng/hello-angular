import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../app-routing.module";
import { IconCmpComponent } from "./icon-cmp/icon-cmp.component";
import { ButtonCmpComponent } from "./button-cmp/button-cmp.component";

const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "general/button",
                canActivate: [AuthGuard],
                component: ButtonCmpComponent
            },
            {
                path: "general/icon",
                canActivate: [AuthGuard],
                component: IconCmpComponent
            }
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule { }
