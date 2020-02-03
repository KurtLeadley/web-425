/*
Author: Kurt Leadley
Date: 2/3/2020
Description: Main component definition
Assignment: 5.4 Web 425, Professor Eltayeb
*/
import { Component } from '@angular/core';

// place this main component into the app-root selector, call the html and css
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leadley-md-in-action';
}
