import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationRoutingModule } from './navigation-routing.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AffixComponent } from './affix/affix.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MenuCmpComponent } from './menu-cmp/menu-cmp.component';
import { PaginationComponent } from './pagination/pagination.component';
import { StepsComponent } from './steps/steps.component';
import { BreadcrumbItemComponent } from './breadcrumb/breadcrumb-item.component';
import { AddonModule } from '../core/addon/addon.module';

@NgModule({
  declarations: [ BreadcrumbComponent,BreadcrumbItemComponent, AffixComponent, DropdownComponent, MenuCmpComponent, PaginationComponent, StepsComponent ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    AddonModule
  ],
  exports:[ BreadcrumbComponent,BreadcrumbItemComponent, AffixComponent, DropdownComponent, MenuCmpComponent, PaginationComponent, StepsComponent ]
})
export class NavigationModule { }
