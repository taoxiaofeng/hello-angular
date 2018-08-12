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
import { HomeComponent } from './home.component';

//首页用的组件
import { MyToolbarModule } from './common/my-toolbar/my-toolbar.module';
import { AioTopMenuModule } from './common/aio-top-menu/aio-top-menu.module';

//动态组件相关
import { AdBannerModule } from './add-banner/ad-banner.module';
import { HeroJobAdComponent } from './add-banner/hero-job-ad.component';
import { HeroProfileComponent } from './add-banner/hero-profile.component';
// import { AdBannerComponent } from './add-banner/ad-banner.component';
// import { AdService } from './add-banner/ad.service'; 
// import { AdDirective } from './add-banner/ad.directive';

//指令
// import { HighlightDirective } from './attribute-directive/highlight.directive';
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
        AppRoutingModule,
        MyToolbarModule,
        AioTopMenuModule,
        AdBannerModule
    ],
    exports:[
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        // DashboardComponent,
        // HeroDetailComponent,
        // HeroesComponent,
        // HeroSearchComponent
        HomeComponent,
        // HighlightDirective
        // HeroJobAdComponent,
        // HeroProfileComponent,
        // AdBannerComponent,
        // AdDirective
    ],
    /**
     * 通常，Angular编译器会为模板中所引用的每个组件都生成一个ComponentFactory类。 但是，对于动态加载的组件，模板中不会出现对它们的选择器的引用。
     * 要想确保编译器照常生成工厂类，就要把这些动态加载的组件添加到NgModule的entryComponents数组中：
     */
    entryComponents: [HeroJobAdComponent, HeroProfileComponent],
    providers: [
        HeroService,
        // AdService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
