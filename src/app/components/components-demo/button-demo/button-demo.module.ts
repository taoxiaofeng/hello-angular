import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDemoComponent } from './button-demo.component';

@NgModule({
  declarations: [
    ButtonDemoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      ButtonDemoComponent
  ]
})
export class ButtonDemoModule { }
