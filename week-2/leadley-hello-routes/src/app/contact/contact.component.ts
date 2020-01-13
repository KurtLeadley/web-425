/***********************************
; Title:  leadley-assignment-2.4
; Author: Kurt Leadley
; Date:    13 January 2020
; Description: Routing in Action | Contact Component
*********************************/
import { Component, OnInit } from '@angular/core';

// component definition with inline styles and template
@Component({
  // selector defines what tag will contain the component
  selector: 'app-contact',
  template: `
    <div class='container'>
      <div class='row'>
        <h2>Kurt's Contact Page</h2>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin:20px 0 0 0;
    }
    h2 {
      color: #38526A;
    }
  `]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
