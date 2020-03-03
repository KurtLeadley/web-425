/***********************************
; Title:  app.module.ts
; Author: Kurt Leadley
; Date:   March 2, 2020
; Description: Order Component
***************************************************************/
import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private newService :ProductService) {   }
  productData;
  service_name: string;
  price : number;
  // https://stackoverflow.com/questions/34997128/angular-2-get-values-of-multiple-checked-checkboxes
  get selectedOptions() {
    return this.productData
              .filter(opt => opt.checked)
              .map(opt => opt.value)
  }
  ngOnInit(): void {
    this.newService.getProduct().subscribe(data =>  this.productData = data)
  }
}
