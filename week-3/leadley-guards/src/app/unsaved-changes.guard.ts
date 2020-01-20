/***********************************
; Title:  leadley-assignment-3.4
; Author: Kurt Leadley
; Date:    20 January 2020
; Description: Guards
*********************************/
import { CanDeactivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
// import the component the candeactivate guard will be applied to
import { ProductComponent } from "./product/product.component";

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductComponent> {

  canDeactivate(component: ProductComponent) {
    if (component.name.dirty) {
      // have a javascript popup when the user tries to leave the product page
      return window.confirm("You have unsaved changes.  Still want to leave?");
    } else {
      return true;
    }
  }
}
