/***********************************
; Title:  leadley-assignment-3.2
; Author: Kurt Leadley
; Date:    20 January 2020
; Description: Passing data to routes
*********************************/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
  <div class='container'>
    <div class='row'>
      <h2>PAGE NOT FOUND!</h2>
    </div>
  </div>
  `,
  styles: [`
    .container {
      margin-top:20px;
    }
    h2 {
      color:red;
      font-weight:bold;
    }
  `]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
