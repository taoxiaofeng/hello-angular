import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSidenavComponent } from './mat-sidenav.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        MatSidenavComponent
    ],
    declarations: [
        MatSidenavComponent
    ]
})
export class MatSidenavModule { }
