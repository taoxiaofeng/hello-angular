import { MyToolbarComponent } from './my-toolbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports:[
        FormsModule,
        CommonModule,
        RouterModule
    ],
    exports:[
        MyToolbarComponent
    ],
    declarations:[
        MyToolbarComponent
    ]
})

export class MyToolbarModule { }
