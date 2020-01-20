/***********************************
; Title:  leadley-assignment-3.2
; Author: Kurt Leadley
; Date:    20 January 2020
; Description: Passing data to routes
*********************************/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { E404Component } from './e404/e404.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'user/:id', component: UserComponent},
  {path:'**', component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
