/***********************************
; Title:  leadley-assignment-3.3
; Author: Kurt Leadley
; Date:    20 January 2020
; Description: Child Routes
*********************************/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class='home-container'>
      <h1>Welcome to Kurt's store!</h1>
    </div>
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
