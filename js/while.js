"use strict";

// function addNumToItself(num) {
// 	while(num < 65536) {
// 		console.log(num += num);
// 	}
// }
// addNumToItself(2);

// // TODO: MINI EXERCISES
// // TODO: print all even numbers between 0 and 25;
// // TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// // correct password is given.
// hint: start by defining the correct password and don't forget to link your html file
// function loopTO25(num = 0) {
// 	while (num < 25) {
// 		if(num < 24) {
// 			num += 2;
// 			console.log(num);
// 		} else {
// 			num++;
// 			console.log(num);
// 		}
// 	}
// }
// loopTO25();
// const password = "codeup123"
// checkPassword();
//
// function checkPassword() {
// 	var userInput = prompt("Please input your password");
// 	while(userInput.toLowerCase() === password) {
// 		alert("Welcome!!")
// 		return;
// 	}
// 	checkPassword();
// }

// 	var allCones = Math.floor(Math.random() * 50) + 50;
// 	console.log(allCones);
// 	var custSelect = Math.floor(Math.random() * 5) + 1;
// do {
// 	if(allCones - custSelect > 0) {
// 		console.log(`Selling ${custSelect} Cones`);
// 		allCones = allCones - custSelect;
// 		console.log(`We now have ${allCones} cones left`);
// 	} else if(allCones - custSelect < 0) {
// 		console.log(`I am not able to sell you ${custSelect} cones, I only have ${allCones}`);
// 		continue;
// 	} else if (allCones - custSelect === 0) {
// 		console.log("Yay! I've sold all my cones");
// 		break;
// 	}
// } while(allCones !== 0);
function getStartingCones() {
	return Math.floor(Math.random() * 50) + 50;
}
function getWantedCones() {
	return Math.floor(Math.random() * 5) + 1;
}
function conesLogicMessage(wantedCones, conesToSell){

}
function sellIceCreamCones(conesToSell) {
	do{
		var wantedCones = getWantedCones();
		if(wantedCones > conesToSell) {
			console.log(`I'm sorry, you wanted ${wantedCones} cones, but we only have ${conesToSell} cones left.`);
			continue;
		} else if(wantedCones < conesToSell){

		}

	}

}
sellIceCreamCones(getStartingCones());

//Exercises need completion
//House keeping, .js files in js directory. html on root
//Git hub needs Full name, and professional picture