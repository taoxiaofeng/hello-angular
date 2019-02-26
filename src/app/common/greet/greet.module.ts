import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GreetComponent } from './greet.component';

@NgModule({
    declarations: [
        GreetComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports:[GreetComponent]
})
export class GreetModule { }
