/***********************************
; Title:  leadley-assignment-4.4
; Author: Kurt Leadley
; Date:    26 January 2020
; Description: Async Pipe
*********************************/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import the Fruit Service
import { FruitService } from './fruit.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  // make sure to provide the fruit service
  providers: [FruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
