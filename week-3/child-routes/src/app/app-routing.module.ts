/***********************************
; Title:  leadley-assignment-3.3
; Author: Kurt Leadley
; Date:    20 January 2020
; Description: Child Routes
*********************************/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  // create a route with two children
  {path:'product/:id', component:ProductDetailComponent,
    children: [
      {path:'',component:ProductDescriptionComponent},
      {path:'seller/:id', component:SellerInfoComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
