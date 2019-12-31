/***********************************
; Title:  shipping.module.ts
; Author: Kurt Leadley
; Date:   December 12, 2019
; Description: Shipping Module
***************************************************************/

// import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';

@NgModule({
  // declare the ShippingComponent in this module
  declarations: [ShippingComponent],
  imports: [
    CommonModule
  ],
  exports: [ShippingComponent]
})
// export this with the name Shipping Module
export class ShippingModule { }
