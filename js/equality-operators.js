"use strict";

//LOOSE EQUALITY (==)
//Loose Inequality (!=)
//Type-Coohersion
var num1 = 5;
var maybeNum2 = "5";
console.log(typeOf(num1 * maybeNum2)); //returns number
console.log(typeOf(num1 + maybeNum2)); //returns number
console.log(typeOf(num1 + maybeNum2)); //with both as string returns string
 if (num1 == maybeNum2) {
     console.log("These are equivalent");
 } else if (num1 === maybeNum2) {
     console.log("These are also equivalent");
 }
 //STRICT EQUALITY (===)
//STRICT INEQUALITY (!==)
//The comparators must be of the same data type AND have the same value