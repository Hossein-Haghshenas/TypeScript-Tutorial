/* simple variable like to js*/

let age = 10;

console.log(age);

/* variable with a Specified type */

let user: String = "hi";

console.log(user);

/* Create a custom type */

enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;

console.log(mySize);
