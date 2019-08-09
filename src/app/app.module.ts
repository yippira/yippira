import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule, MatButtonModule} from '@angular/material';
import { PersonalStatementComponent } from './personal-statement/personal-statement.component';
import { LatestProjectsComponent } from './latest-projects/latest-projects.component';

const material = [
  MatToolbarModule,
  MatButtonModule
]
  


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    HeaderComponent,
    PersonalStatementComponent,
    LatestProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MglTimelineModule,
    material
     
  ],
  exports: [material],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
