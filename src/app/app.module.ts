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
