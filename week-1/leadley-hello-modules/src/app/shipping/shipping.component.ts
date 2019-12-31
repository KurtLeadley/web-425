/***********************************
; Title:  shipping.component.ts
; Author: Kurt Leadley
; Date:   December 12, 2019
; Description: Shipping Component
***************************************************************/

// import dependencies
import { Component, OnInit } from '@angular/core';

// this component will be placed in the app-shipping tag.
@Component({
  selector: 'app-shipping',
  // html to place in the app-shipping tag
  template: `
  <div class='component-container'>
    <h1>Welcome!</h1>
    <p>
      Kurt's Shipping Component
    </p>
  </div>
  `,
  // no inline styles for now
  styles: []
})
// export this component
export class ShippingComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}
