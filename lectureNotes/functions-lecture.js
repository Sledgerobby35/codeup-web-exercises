"use strict";

// var num = 5;
// num = num + 5;
// console.log(num);
// function add5(number) {
//    return number += 5;
// }
// console.log("The result of add5() is: " + add5(3));
// function add(num1, num2) {
//    return num1 + num2;
// }
// console.log("The result of add() is " + add(12378,12387));

// Returns the difference of subtracting num2 from num1
// function subtract(num1,num2) {
//    return num1 - num2;
// }
// console.log("The result of subtract is: " + subtract(10,2));

//MINI EXERCISE
// function multiply(num1,num2) {
//    return num1 * num2;
// }
// function divide(num1,num2) {
//    return num1 / num2;
// }
// console.log("The product of multiply() is: " + multiply(3,4));
// console.log("The dividend of divide() is: " + divide(8,2));

function add(num1, num2 = 0) {
   return num1 + num2;
}
console.log(add(4));