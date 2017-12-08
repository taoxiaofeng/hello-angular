import { MyToolbarComponent } from './my-toolbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
    imports:[
        FormsModule,
        CommonModule
    ],
    exports:[
        MyToolbarComponent
    ],
    declarations:[
        MyToolbarComponent
    ]
})

export class MyToolbarModule { }
