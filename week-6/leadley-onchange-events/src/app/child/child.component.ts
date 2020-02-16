/*
Author: Kurt Leadley
Date: 2/15/2020
Description: Child component template
Assignment 6.4, Professor Eltayeb
*/
import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

// choose the template selector and add some template html, styles handled by parent grid selector
@Component({
  selector: 'app-child',
  template: `
      <h2>Child</h2>
      <div>Greeting: {{ greeting }}</div>
      <div>User name: {{ user.fname }}</div>
  `,
  styles: []
})
export class ChildComponent implements OnChanges {
  // take in the greeting and user variables from the parent component
  @Input() greeting: string;
  @Input() user: { fname: string };

  constructor() { }
  // whenever the inputs change, log some info to the console
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }
}