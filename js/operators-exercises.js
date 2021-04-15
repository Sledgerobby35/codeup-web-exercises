"use strict";
console.log('1' + 2); //E: 3 A:'12'
console.log(typeof('1' + 2)); //E:number A:string
console.log(6%4); //E:2 A:
console.log('3 + 4 is ' + 3 + 4); //E:error A:'3 + 4 is 34'
//fix console.log('3 + 4 is ' + (3 + 4)); E:'3 + 4 is '7 A:'3 + 4 is '7
console.log(0 < 0);// E: false A: false
console.log('false' == false); //E:true A: false
console.log(true == 'true'); //E:false A:false
console.log(5 >= -5); //E:true A:true
console.log(!false || false); //E:true A:true
console.log(!true && !false); //E:false A:false
console.log(true || "42"); //E:true A:true
console.log(6 % 5); //E:1 A:1
console.log(5 < 4 && 1 === 1); //E:false A:false
console.log(typeof('codeup') === 'string'); //E:true A:true
console.log('codeup' === 'codeup' && 'codeup' === 'Codeup'); //E:false A:false
console.log(4 >= 0 && 1 !== '1'); //E:false A:true
console.log(6 % 3 === 0); //E:true A:true
console.log(5 % 2 !== 0); //E:true A:true