/***********************************
; Title:  leadley-assignment-3.2
; Author: Kurt Leadley
; Date:    20 January 2020
; Description: Passing data to routes
*********************************/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    <div class='container'>
      <div class='row'>
        <h2>User Detail for Kurt: {{userId}} </h2>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin-top:20px;
    }
    h2 {
      color:teal;
    }
    `]
})
export class UserComponent implements OnInit {
  userId:string;
  constructor(route: ActivatedRoute) {
    this.userId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
