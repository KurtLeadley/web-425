/***********************************
; Title:  leadley-assignment-3.3
; Author: Kurt Leadley
; Date:    20 January 2020
; Description: Child Routes
*********************************/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-info',
  template: `
    <p>The seller is Tammy Sue, id {{sellerID}}</p>
  `
})
export class SellerInfoComponent implements OnInit {
  sellerID : string
  constructor(route: ActivatedRoute) {
    this.sellerID = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
