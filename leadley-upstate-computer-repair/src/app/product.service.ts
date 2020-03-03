/***********************************
; Title:  app.module.ts
; Author: Kurt Leadley
; Date:   March 2, 2020
; Description: Application HTTP service
***************************************************************/
import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  saveProduct(product){
    return this.http.post('http://localhost:8080/api/saveProduct/', product)
            .map((response: Response) =>response.json());
  }

  getProduct(){
    return this.http.get('http://localhost:8080/api/getProduct/')
            .map((response: Response) => response.json());
  }
  deleteProduct(id){
    return this.http.post('http://localhost:8080/api/deleteProduct/',{'id': id})
            .map((response: Response) => response.json());
  }
}
