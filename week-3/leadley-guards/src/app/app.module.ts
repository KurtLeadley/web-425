/***********************************
; Title:  leadley-assignment-3.4
; Author: Kurt Leadley
; Date:    20 January 2020
; Description: Guards
*********************************/

// make sure to import the guards we created and the hash location strategy
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import {UnsavedChangesGuard} from "./unsaved-changes.guard";
import {LoginGuard} from "./login.guard";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // had to add ReactiveFormsModule to get this to work
    ReactiveFormsModule
  ],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy}, LoginGuard, UnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
