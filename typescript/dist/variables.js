"use strict";
/* simple variable like to js*/
let age = 10;
console.log(age);
/* variable with a Specified type */
let user = "hi";
console.log(user);
/* Create a custom type */
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
//# sourceMappingURL=variables.js.map