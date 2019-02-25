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
            {
                path: 'layout',
                loadChildren: './layout/layout.module#LayoutModule',
                data: { preload: true }
            },
            {
                path: "navigation",
                loadChildren: './navigation/navigation.module#NavigationModule',
                data: { preload: true }
            },
            {
                path: "data-entry",
                loadChildren: './data-entry/data-entry.module#DataEntryModule',
                data: { preload: true }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule { }
