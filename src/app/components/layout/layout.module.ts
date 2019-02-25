import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { GridComponent } from './grid/grid.component';
import { LayoutCmpComponent } from './layout-cmp/layout-cmp.component';

@NgModule({
  declarations: [GridComponent, LayoutCmpComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports:[GridComponent, LayoutCmpComponent]
})
export class LayoutModule { }
