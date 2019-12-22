/***********************************
; Title:  app.components.ts
; Author: Kurt Leadley
; Date:    22 December 2019
; Description: Component that gets placed in app-root tag
***************************************/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = "Hello World!";
}
