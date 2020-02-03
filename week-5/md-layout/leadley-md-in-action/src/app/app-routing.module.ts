/*
Author: Kurt Leadley
Date: 2/3/2020
Description: Router
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// include both our pages / componenets to route to
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  // set default path to home
  {path: '', component: HomeComponent },
  // add other button routes from nav bar
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
