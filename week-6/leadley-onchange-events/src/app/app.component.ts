/*
Author: Kurt Leadley
Date: 2/15/2020
Description: Main component definition
Assignment: 6.4 Web 425, Professor Eltayeb
*/
import { Component } from '@angular/core';

// choose the template selector, template url and stylesheet url
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// declare the data to export to the child component
export class AppComponent {
  title = "Kurt's App";

  myGreeting = 'hello';
  myUser: { fname: string } = { fname: 'Kurt'};
}
