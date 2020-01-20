/***********************************
; Title:  leadley-assignment-3.4
; Author: Kurt Leadley
; Date:    20 January 2020
; Description: Guards
*********************************/
import { CanActivate, Router} from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
// implement the CanActivate guard here
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    // there is no real login mechanism for this exercise, just generate a random number
    let loggedIn = Math.random() < 0.5;

    if (!loggedIn) {
      alert("You're not logged in and will be redirected to Login page");
      this.router.navigate(["/login"]);
    }

    return loggedIn;
  }
}
