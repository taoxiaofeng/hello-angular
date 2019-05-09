import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionPointsRoutingModule } from './function-points-routing.module';
import { FunctionPointsComponent } from './points/function-points.component';

@NgModule({
  declarations: [FunctionPointsComponent],
  imports: [
    CommonModule,
    FunctionPointsRoutingModule
  ]
})
export class FunctionPointsModule { }
