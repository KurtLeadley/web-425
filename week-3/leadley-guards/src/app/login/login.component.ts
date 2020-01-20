/***********************************
; Title:  leadley-assignment-3.4
; Author: Kurt Leadley
; Date:    20 January 2020
; Description: Guards
*********************************/
import { Component, OnInit } from '@angular/core';
// placeholder login page with no functionality
@Component({
  selector: 'app-login',
  template: `
  <div class='container'>
    <h1 class="home">Please login here</h1>
  </div>
  `
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
