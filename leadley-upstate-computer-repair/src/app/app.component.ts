/***********************************
; Title:  app.module.ts
; Author: Kurt Leadley
; Date:   March 2, 2020
; Description: Application main component
***************************************************************/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
