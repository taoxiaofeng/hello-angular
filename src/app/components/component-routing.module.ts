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
                data: { breadcrumb: 'general' }
            },
            {
                path: 'layout',
                loadChildren: './layout/layout.module#LayoutModule',
                data: { breadcrumb: 'layout' }
            },
            {
                path: "navigation",
                loadChildren: './navigation/navigation.module#NavigationModule',
                data: { breadcrumb: 'navigation' }
            },
            {
                path: "data-entry",
                loadChildren: './data-entry/data-entry.module#DataEntryModule',
                data: { breadcrumb: 'data-entry' }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule { }
