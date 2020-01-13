/***********************************
; Title:  leadley-assignment-2.2
; Author: Kurt Leadley
; Date:    13 January 2020
; Description: One way binding example
*********************************/

// import Component from angular core
import { Component } from '@angular/core';

// give this component inline styles and an html template
@Component({
  selector: 'app-root',
  template:
  `<h1>{{name}}</h1>
   <button (click) = "changeName()">Change Name</button>
  `,
  styles: [`h1 {color: red;}`]
})
export class AppComponent {
  title = 'one-way-binding';

  // declare name as a string, give it value
  name:string = "Kurt Leadley";

  // function to change the name string variable
  changeName() {
    this.name = "Kurt";
  }
}
