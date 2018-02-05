import { HighlightDirective } from './highlight.directive';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
    imports:[
        // FormsModule,
        // CommonModule
    ],
    exports:[
        HighlightDirective
    ],
    declarations:[
        HighlightDirective
    ],
    providers:[
    ]
})
export class HighlightDirectiveModule {}