(function() {
	"use strict";
	// var days = ["Monday", "Tuesday", "Wednesday"];
	// var daysRemaining = ["Thursday", "Friday", "Saturday", "Sunday"];
	// console.log(days);
	// daysRemaining.forEach(function(day){
	// 	if(day === "Sunday") {
	// 		days.unshift(day);
	// 	} else {
	// 		days.push(day);
	// 	}
	// });
	// console.log(days);
	//
	//.unshift(valueToAdd)

	//Start 0, 1, 2, 3
	//Unshift   0, 1, 2, 3
	// w/ New 0, 1, 2, 3, 4


	//console.log(numArray.indexOf(1)); //beginning index

	//numArray.unshift(6);
	//console.log(numArray.indexOf(1)); //ending index

	// var numArray = [6, 1, 2, 3, 4, 5];
	// console.log(numArray);
	// var sortedArray = numArray.sort()
	// console.log(numArray);
	// console.log(sortedArray);

	// var daysInMonth = [...Array(32).keys()];
	// console.log(daysInMonth);
	// var removedDay = daysInMonth.shift();
// TODO - MINI EXERCISE
//  -> Let's reverse engineer our days of the week array
//  -> Make sure to console.log in order to see your code's behavior!
//  -> Write a function which takes in your complete days of the week array
//      -> It will eventually return your reverse-engineered array
//  -> Using a FOR LOOP (not .forEach())
//      -> pop() each item off the days array
//      -> use the returned value from pop() to unshift the element
//      -> on to the new array
//  -> HINT: You may find that the loop doesn't behave as expected
//      -> console.log EVERY possible thing which could change as your loop runs
//          -> consider how the methods you are using change state of the array
	var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var engineeredDays = [];

	function reverseEngineer(array) {
		for (let i = 0; i < array.length + 1; i++) {
			engineeredDays.unshift(array.pop());
			i = 0;
		}
		console.log(engineeredDays);
	}

	//reverseEngineer(daysOfTheWeek);

	// function sortMyNums(num1, num2, num3){
	// 	var numArray = [num1, num2, num3];
	// 	console.log(numArray);
	// 	numArray.sort(function(num1, num2){
	// 		return num1 - num2;
	// 	});
	// 	console.log(numArray);
	// 	return numArray;
	// }
	// sortMyNums(13, 1, 1009);

	function giveMissyJustice(notASuspectString){
		var musicalGenius = notASuspectString.split(' ');
		console.log(musicalGenius);
	}
	//giveMissyJustice('I put my string down, flip it and reverse it');
	function revEng(days) {
		for ( ; days.length > 0;){
			engineeredDays.unshift(days.pop());
		}
		console.log(engineeredDays);
	}
	revEng(daysOfTheWeek);
})();

