"use strict";

// var a = 1; //E:1 A:3
// var b = a++;//E:1 A:1
// var c = ++a;//E:3 A:3
// console.log(a);
// console.log(b);
// console.log(c);

// var d = "hello";
// var e = false;
// console.log(d++); //E:NaN A:NaN
// console.log(e++);//E:NaN A:0

// var perplexed;
// console.log(perplexed + 2)//E:Undefined2 A:NaN

// var price = 2.7;
// // console.log(price.toFixed(2)) //E:2.70 A:2.70
// price = "2.7";
// console.log(price.toFixed(2)); //E:NaN A:Error price.toFixed is not a function

// console.log(isNaN(0)); //E:false A:false
// console.log(isNaN(1)); //E:false A:false
// console.log(isNaN("")); //E:true A:false
// console.log(isNaN("string")); //E:true A:true
// console.log(isNaN("0")); //E:true A:false
// console.log(isNaN("1")); //E:true A:false
// console.log(isNaN("3.145")); //E:false A:false
// console.log(isNaN(Number.MAX_VALUE)); //E:false A: false
// console.log(isNaN(Infinity)); //E:false A: false
// console.log(isNaN("true")); //E:true A: true
// console.log(isNaN(true)); //E:true A: false
// console.log(isNaN("false")); //E:true A: true
// console.log(isNaN(false)); //E:true A: false
// console.log(NaN == NaN); //E:true A:false

// console.log(!true); //E:false A:false
// console.log(!false); //E:true A:true
// console.log(!!true); //E:true A:true
// console.log(!!false); //E:false A:false
// console.log(!!0); //E:false A:false
// console.log(!!-0); //E:false A:false
// console.log(!!1); //E:true A:true
// console.log(!!-1); //E:true A:true
// console.log(!!0.1); //E:true A:true
// console.log(!!"hello"); //E:true A:true
// console.log(!!""); //E:false A:false
// console.log(!!''); //E:false A:false
// console.log(!!"false"); //E:true A:true
// console.log(!!"0"); //E:false A:true

var sample = "Hello Codeup";
var length = sample.length;
console.log(length);
var sampleUpperCase = sample.toUpperCase();
var sampleLowerCase = sample.toLowerCase();
console.log(sampleUpperCase);
console.log(sampleLowerCase);
sample += " " + "Students";
console.log(sample);
sample = sample.replace("Students","Class");
console.log(sample);
var c = sample.indexOf("c");
console.log(c);
var C = sample.indexOf("C");
console.log(C);
var subSample = sample.substring(sample.indexOf("C"), sample.indexOf("p"));
console.log(subSample);

// const movies = {
//     price: 3,
//     "selected": [
//     {
//         "title": "The Little Mermaid",
//         "daysBorrowed": 3
//     },
//     {
//         "title": "Brother Bear",
//         "daysBorrowed": 5
//     },
//     {
//         "title": "Hercules",
//         "daysBorrowed": 1
//     }
// ]}
// var selList = "To rent your selection of: ";
// var result = 0;
// for(var i = 0; i < movies.selected.length; i++) {
//    selList = selList.concat(movies.selected[i].title, ", ");
//    result += (movies.price * movies.selected[i].daysBorrowed);
// }
// console.log(selList);
// console.log("The price will be: $" + result);

// const work = [
//     {
//         "company": "Google",
//         "ratePerHour": 400,
//         "hoursWorked": 6
//     },
//     {
//         "company": "Amazon",
//         "ratePerHour": 380,
//         "hoursWorked": 4
//     },
//     {
//         "company": "Facebook",
//         "ratePerHour": 350,
//         "hoursWorked": 10
//     }
// ]
// var result = 0;
// for (var i = 0; i < work.length; i++) {
//     result += (work[i].ratePerHour * work[i].hoursWorked);
// }
// console.log("Pay this week will be: $" + result);

// var result = false;
// if (studentList.length < classSize && classSchedule === newStudentSchedule) {
//     result = true
// }
// console.log(result);

// var result = false;
// if (user.type === "premium" && coupon.date !== expired) {
//     result = true;
// } else if (user.items > 2 && coupon.date !== expired) {
//     result = true
// } else {
//     result = false;
// }
// console.log(result);

var username = 'codeup';
var password = 'notastrongpassword';
var passCheck = (password.includes(username) === false
    && password.length > 5);
var userCheck = (username.length < 20);
var whiteSpace = (username.includes(" ") === false
    && password.includes(" ") === false);
console.log(passCheck);
console.log(userCheck);
console.log(whiteSpace);
