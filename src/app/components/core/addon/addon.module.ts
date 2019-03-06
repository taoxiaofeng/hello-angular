import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppStringTemplateOutletDirective } from './string_template_outlet';

@NgModule({
	declarations: [ AppStringTemplateOutletDirective ],
	imports: [ CommonModule, FormsModule ],
	exports: [ AppStringTemplateOutletDirective ],
	providers: [],
})
export class AddonModule {}