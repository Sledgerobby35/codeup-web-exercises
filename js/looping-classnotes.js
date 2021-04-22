
"use strict";

//DO WHILE Looping
// Will run code at least once before checking against condition
// do {
// 	//execute code
// } while(condition);
// // Examples

// var numStudents = 0;
// var deskAvailable = 20;
// do {
// 	console.log(`We have ${deskAvailable} amount of desks left`);
// 	numStudents++;
// 	deskAvailable--;
// } while(numStudents <= 20)
//
// console.log("Sorry, class is full")

//Example, singing happy bday, change song based on age

// var age = 0;
// do {
// 	age++;
// 	console.log(`Happy birth-day to you, your now ${age} years old`);
// } while(age <= 14);
// age++;
// console.log(`Sorry you're too old for songs, we got you a car instead, happy ${age}th birthday`)

var parkingLot = 30;
var usedParking = 0;
do {
	usedParking += 2;
	if(parkingLot !== 2) {
		parkingLot -= 2;
		console.log(`Available parking: We have ${parkingLot} spots open`);
	} else {
		parkingLot -= 2;
		console.log(`This parking lot is now full`);
	}
} while(parkingLot > 0);
