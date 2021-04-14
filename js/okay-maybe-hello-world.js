"use strict";
//Alert
/*
 alert("I swear I won't make you see 'hello world'");
 alert("I hope my dogs don't get out again");
 alert("How are you doing?");
 alert("I am doing awesome bro");
 alert("Life is but a peach");
 alert("I'm tired of silk");
 alert("I don't care if it's spiders");
 alert("Don't care if it's worms")
*/
// Confirm
/*
var userChoice = confirm("Would you like to continue?");
if(userChoice) {
    console.log("Let's Continue");
} else {
    console.log("Alright be like that")
}
*/
// Prompt
var userInput = prompt("What is your favorite movie?");

if (userInput.toLowerCase() === "eragon") {
    alert("'I don't understand.' 'Of course you don't... That's why I'm teaching you and not the other way around.'")
} else {
    alert("Your favorite movie is " + userInput);
}