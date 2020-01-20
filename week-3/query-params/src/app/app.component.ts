/***********************************
; Title:  leadley-assignment-3.2
; Author: Kurt Leadley
; Date:    20 January 2020
; Description: Passing data to routes
*********************************/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'query-params';
  userId = 12;
}
