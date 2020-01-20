/***********************************
; Title:  leadley-assignment-3.4
; Author: Kurt Leadley
; Date:    20 January 2020
; Description: Guards
*********************************/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from "./login.guard";
import { UnsavedChangesGuard } from "./unsaved-changes.guard";


const routes: Routes = [
  {path:'', component: HomeComponent},
  // add the guards to this component
  { path: 'product', component: ProductComponent, canActivate:[LoginGuard], canDeactivate: [UnsavedChangesGuard]},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
