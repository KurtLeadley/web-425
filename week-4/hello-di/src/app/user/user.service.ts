import { Injectable } from '@angular/core';
// import User class
import { User } from "./user";

@Injectable()
export class UserService {
  getUser(): User {
    return new User (0,"Kurt","Leadley","NonYa USA");
  }
}
