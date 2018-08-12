import { RouterDemoComponent } from './router-demo.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [{
    path: '',
    component: RouterDemoComponent,
    // pathMatch: 'full'
},
    // {
    //     path: '/:id',
    //     component: RouterDemoComponent,
    //     // pathMatch: 'full'
    // },
    // {
    //     path: '/:id/:name',
    //     component: RouterDemoComponent,
    //     // pathMatch: 'full'
    // }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class RouterDemoRoutingModule { }