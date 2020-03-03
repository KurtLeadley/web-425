import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';
import {ProductService} from '../product.service';

import {Http,Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private newService :ProductService,) {   }
  productData;
  valbutton ="Save";
  id : number;
  item_id : number;
  service_name: string;
  price : number;
  ngOnInit() {
    this.newService.getProduct().subscribe(data =>  this.productData = data)
  }

  onSave = function(product,isValid: boolean) {
    product.mode= this.valbutton;
    this.newService.saveProduct(product).subscribe(data =>  {
      // create a popup
      //alert(data.data);
      this.ngOnInit();
    }, error => this.errorMessage = error )
  }

  edit = function(prd) {
    this.id = prd._id;
    this.item_id= prd.item_id;
    this.service_name= prd.service_name;
    this.price= prd.price;
    this.valbutton ="Update";
  }

  delete = function(id) {
    this.newService.deleteProduct(id).subscribe(data =>   {
      // creates popup
      //alert(data.data) ;
       this.ngOnInit();}, error => this.errorMessage = error )
    }
  }
