"use strict";
// let redBorder = document.getElementsByClassName("border-red");
// console.log(redBorder[0]);
// let darkGreen = document.getElementsByClassName("color-darkGreen");
// console.log(darkGreen);
// let paragraph = document.getElementsByTagName("p");
// console.log(paragraph);
let greenBorder = document.getElementsByClassName("border-green")[0];
console.log(greenBorder);
greenBorder.style.border = "4px solid #f0f0f0";
greenBorder.style.color = "#0000ff";

console.log(greenBorder.childNodes[0]);

let greenPar = document.getElementById("none");
greenPar.innerText = "Hello World";

let lineBreak = document.createElement("br");
greenPar.innerText = `Hello World${lineBreak} If working, This should be a new line`;