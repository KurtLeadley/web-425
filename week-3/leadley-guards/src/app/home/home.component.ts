/***********************************
; Title:  leadley-assignment-3.4
; Author: Kurt Leadley
; Date:    20 January 2020
; Description: Guards
*********************************/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class='container'>
    <h1 class='home'>Kurt's Home Component</h1>
  </div>
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
