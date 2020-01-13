/***********************************
; Title:  leadley-assignment-2.4
; Author: Kurt Leadley
; Date:    13 January 2020
; Description: Routing in Action | Main application module
*********************************/
// make sure the three components and router are imported here
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';

// include the three components we made and also the default AppComponent
// this is the applications main module that holds all our components
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
