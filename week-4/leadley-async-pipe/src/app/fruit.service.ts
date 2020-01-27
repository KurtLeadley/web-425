/***********************************
; Title:  leadley-assignment-4.4
; Author: Kurt Leadley
; Date:    26 January 2020
; Description: Async Pipe
*********************************/
import { Injectable } from '@angular/core';
// import the fruit interface
import { Fruit } from './fruit';
// This is how you import rxjs for newer versions of Angular
import { Observable } from 'rxjs';
import { of } from 'rxjs';
@Injectable()
// export this fruit service
export class FruitService {
  // fruits is an array of fruit objects defined here
  fruits: Fruit[] = [
    {id:1,name:'Kiwi',pricePerPound:'$2.99',quantity:7},
    {id:2,name:'Raspberry',pricePerPound:'$9.99',quantity:1},
    {id:3,name:'Oranges',pricePerPound:'$1.99',quantity:14},
    {id:4,name:'Apples',pricePerPound:'$.99',quantity:7},
    {id:5,name:'Blueberries',pricePerPound:'$5.99',quantity:2}
  ];
  constructor() { }
  // retrieve the fruits array
  getFruits() : Observable<Fruit[]> {
    return of(this.fruits);
  }
}
