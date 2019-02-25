import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationRoutingModule } from './navigation-routing.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AffixComponent } from './affix/affix.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MenuCmpComponent } from './menu-cmp/menu-cmp.component';
import { PaginationComponent } from './pagination/pagination.component';
import { StepsComponent } from './steps/steps.component';

@NgModule({
  declarations: [ BreadcrumbComponent, AffixComponent, DropdownComponent, MenuCmpComponent, PaginationComponent, StepsComponent ],
  imports: [
    CommonModule,
    NavigationRoutingModule
  ],
  exports:[ BreadcrumbComponent ]
})
export class NavigationModule { }
