/***********************************
; Title:  leadley-assignment-3.4
; Author: Kurt Leadley
; Date:    20 January 2020
; Description: Guards
*********************************/
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-product',
  template: `
  <div class='container'>
    <h1 class='product'>Kurt's Product Detail Component</h1>
    <input placeholder="Enter Name Here..." type="text" [formControl] ="name">
  </div>
  `
})
// add the form control to the product component class
export class ProductComponent implements OnInit {
  name: FormControl = new FormControl();
  constructor() { }

  ngOnInit() {
  }

}
