import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../app-routing.module";


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'general',
                loadChildren: './general/general.module#GeneralModule',
                data: { preload: true }
            },
            // {
            //     path: "general/icon",
            //     canActivate: [AuthGuard],
            //     component: IconCmpComponent
            // }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule { }
