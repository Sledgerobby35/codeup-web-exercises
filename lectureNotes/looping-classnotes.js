
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

//Example, singing happy birthday, change song based on age

// var age = 0;
// do {
// 	age++;
// 	console.log(`Happy birth-day to you, your now ${age} years old`);
// } while(age <= 14);
// age++;
// console.log(`Sorry you're too old for songs, we got you a car instead, happy ${age}th birthday`)

// var parkingLot = 30;
// var usedParking = 0;
// do {
// 	usedParking += 2;
// 	if(parkingLot !== 2) {
// 		parkingLot -= 2;
// 		console.log(`Available parking: We have ${parkingLot} spots open`);
// 	} else {
// 		parkingLot -= 2;
// 		console.log(`This parking lot is now full`);
// 	}
// } while(parkingLot > 0);


//FOR LOOPS
//SYNTAX
//for, telling javascript starting a for loop
//(startingPoint; stoppingPoint; howToIterate)
//{Code to be executed at EACH ITERATION}



// for(let i = 1; i > 0 && i <= 10; i++) {
// 	console.log("Hello from CodeUp " + i);
// }

// for(let x = 10; x <= 25; x++) {
// 	console.log(x * 2);
// }
// var carton = 0;
// function putAwayEggs(numOfEggs) {
// 	for(let eggs = numOfEggs; eggs >= 0; eggs - 12) {
// 		if(eggs % 12 === 0) {
// 			carton++;
// 		}
// 	}
// 	console.log(carton);
// }
// putAwayEggs(72);

// for(let i = 1; i <=5; i++){
// 	console.log("first :" + i);
// 	for(let x = 5; x > 0; x--){
// 		console.log("second: " + x);
// 	}
// }
// for(let i = 1; i <= 5; i++) {
// 	console.log("first: " + i);
// 	if(i === 5) {
// 		countDown();
// 	}
// }

// function countDown(counter) {
// 	for(let i = counter; i > 0; i--) {
// 		console.log("second: " + i);
// 	}
// }
// function countUpAndDown () {
// 	for(let i = 0; i <= 5; i++) {
// 		console.log("first: " + i);
// 		var counter = i;
// 		if(i === 5) {
// 			countDown(counter);
// 		}
// 	}
// }
//
// countUpAndDown();


// function loop() {
// 	for (let i = 0; i <= 30; i++) {
// 		if (i % 2 === 0) {
// 			let num = i * 2;
// 		}
// 		console.log("odd");
// 	}
// }
// loop();

// for(let i = 0; i <= 40; i++){
// 	var num = i;
// 	if(marcoPolo()){
// 	} else if(marco()){
// 	} else if(polo()){
// 	} else {
// 		console.log("I'm not playing")
// 	}
// }
function marcoPolo(){
	if(number % 3 === 0 && number % 5 === 0){
		console.log("Marco Polo");
	}
}
function marco(){
	if(number % 3 === 0){
		console.log("Marco");
	}
}
function polo(){
	if(number % 5 === 0){
		console.log("Polo");
	}
}
function loop(number = 0){
	for(let i = 0; i <= 40; i++){
		number = i;
		console.log(number)
		if(marcoPolo()){
		} else if(marco()){
		} else if(polo()){
		} else {
			console.log("I'm not playing")
		}
	}
}
loop();