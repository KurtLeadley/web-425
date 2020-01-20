/***********************************
; Title:  leadley-assignment-3.3
; Author: Kurt Leadley
; Date:    20 January 2020
; Description: Child Routes
*********************************/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// place a link to the seller info inside of this components template
@Component({
  selector: 'app-product-detail',
  template: `
    <div class="product">
      <h1>Product Details for Product #: {{productId}}</h1>
      <router-outlet></router-outlet>
      <p><a [routerLink] ="['./seller', sellerId]">Seller Info</a></p>
    </div>
  `
})
// export the product detail class to it's template
export class ProductDetailComponent implements OnInit {
  productId: string;
  sellerId = 1212;
  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
