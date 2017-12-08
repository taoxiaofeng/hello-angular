import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeroesComponent } from './hero/heroes/heroes.component';
// import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
// import { HeroSearchComponent } from './hero/hero-search/hero-search.component';
import { HeroService } from './hero.service';
import { HomeComponent } from "./home.component";
/**
 * declarations - 声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道。
  exports - declarations 的子集，可用于其它模块的组件模板。
  imports - 本模块声明的组件模板需要的类所在的其它模块。
  providers - 服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
  bootstrap - 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性。
 */
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    // DashboardComponent,
    // HeroDetailComponent,
    // HeroesComponent,
    // HeroSearchComponent
    HomeComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
