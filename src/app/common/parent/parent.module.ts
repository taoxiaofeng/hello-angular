import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent.component';

@NgModule({
    declarations: [ParentComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [ParentComponent]
})
export class ParentModule { }
