import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../app-routing.module";


const routes: Routes = [
    {
        path: '',
        data: { breadcrumb: 'cmp'},
        children: [
            {
                path: 'general',
                loadChildren: () => import('./general/general.module').then(m => m.GeneralModule),
                data: { breadcrumb: 'general' }
            },
            {
                path: 'layout',
                loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
                data: { breadcrumb: 'layout' }
            },
            {
                path: "navigation",
                loadChildren: () => import('./navigation/navigation.module').then(m => m.NavigationModule),
                data: { breadcrumb: 'navigation' }
            },
            {
                path: "data-entry",
                loadChildren: () => import('./data-entry/data-entry.module').then(m => m.DataEntryModule),
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
