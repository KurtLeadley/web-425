/***********************************
; Title:  leadley-assignment-2.4
; Author: Kurt Leadley
; Date:    13 January 2020
; Description: Routing in Action | Router Module
*********************************/
// make sure to import the RouterModule and also export it from this file
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
// create an array of routes. this is where you want to declare all routes and their components
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // I think the routes array is getting bound to the RouterModule here
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
