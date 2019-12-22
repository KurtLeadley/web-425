/***********************************
; Title:  leadley-assignment-1.4.ts
; Author: Kurt Leadley
; Date:    22 December 2019
; Description: Component that gets placed in app-root tag
*********************************/
// two string variables
var firstName = "Kurt";
var lastName = "Leadley";
// string concat function
// typescript requires type declarations it appears and the return type needs to be declared too
function stringConcat(stringOne, stringTwo) {
    return firstName + ' ' + lastName;
}
console.log(stringConcat(firstName, lastName));
