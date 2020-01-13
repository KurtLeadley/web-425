/***********************************
; Title:  leadley-assignment-2.4
; Author: Kurt Leadley
; Date:    13 January 2020
; Description: Routing in Action | Home Component
*********************************/
import { Component, OnInit } from '@angular/core';

// component definition with inline template and styles
@Component({
  selector: 'app-home',
  template: `
    <div class='container'>
      <div class='row'>
        <h2>Kurt's Home Page</h2>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin:20px 0 0 0;
    }
    h2 {
      color: #476A38;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
