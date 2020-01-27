/***********************************
; Title:  leadley-assignment-4.4
; Author: Kurt Leadley
; Date:    26 January 2020
; Description: Async Pipe
*********************************/
import { Component } from '@angular/core';
// import the fruit interface and the fruit service
import { FruitService } from './fruit.service';
import { Fruit } from './fruit';
// this is how you import observables from rxjs in newer versions of angular
import {Observable} from "rxjs";

// create this componenet in the app-root selector
@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Contact Us</a></li>
      </ul>
    </nav>
    <div class="main-container">
      <h1>Kurt's Produce Store</h1>
      <table class="table table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price/lb</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let fruit of fruits | async">
            <td>{{fruit.id}}</td>
            <td>{{fruit.name}}</td>
            <td>{{fruit.pricePerPound}}</td>
            <td>{{fruit.quantity}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  // styles located here
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leadley-async-pipe';
  fruits: Observable<Fruit[]>;
  // make a local instance of the FruitService
  constructor(private fruitService: FruitService) {}
  // get the fruits from the fruit service on initialization
   ngOnInit() {
    this.fruits = this.fruitService.getFruits();
  }
}
