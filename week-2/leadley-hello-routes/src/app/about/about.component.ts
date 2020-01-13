/***********************************
; Title:  leadley-assignment-2.4
; Author: Kurt Leadley
; Date:    13 January 2020
; Description: Routing in Action | About Component
*********************************/
import { Component, OnInit } from '@angular/core';

// component definition with inline styles and template
@Component({
  selector: 'app-about',
  template: `
    <div class='container'>
      <div class='row'>
        <h2>Kurt's About Page</h2>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin:20px 0 0 0;
    }
    h2 {
      color: #FF5733;
    }
  `]
})
export class AboutComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
