(function () {
	"use strict";

	// var hasCar;
	// if (hasCar) {
	// 	console.log("Let's get in and go!");
	// } else {
	// 	console.log("We need to call a rideshare!");
	// }

	// function getToDestination(age, isInsured, hasCar, canGetRideshare) {
	// 	var isLicensed = age >= 16;
	// 	var isLegalDriver = isLicensed && isInsured;
	//
	// 	if (isLegalDriver && hasCar) {
	// 		console.log("Let's get in and go!");
	// 	} else if ((!isLegalDriver || !hasCar) && canGetRideshare) {
	// 		console.log("We need to call a rideshare!");
	// 	} else {
	// 		console.log("I think my friend can give us a ride");
	// 	}
	//
	// }

	//MINI EXERCISE
// TODO: MINI EXERCISE -> IF / ELSE IF / ELSE
//  -> Let's augment our getToDestination() function
//  -> Create a function called canGetRideshare() which will *RETURN* a boolean
//      -> It will determine if there are drivers nearby and the person has enough money for the ride
//  -> Now, when you call getToDestination(), your canGetRideshare parameter will be an argument that is
//  -> fulfilled by a call to canGetRideshare() (yes, I know, the whole parameter name vs argument name thing)
//  -> Be sure to log to the user if they can or cannot get a rideshare
// TODO: BONUS -> This exercise will probably get the mind wondering "How can I make this more?.."
//  -> Consider this: What if mileage determined:
//      -> If the rider has enough funds?
//      -> If there is a driver close enough to service the rider?
// 	const destination = prompt("How far is your destination");
// 	function canGetRideShare(canAfford, driverNearby) {
// 		if(canAfford && driverNearby) {
// 			console.log("Your all set to call a rideshare")
// 			return true;
// 		} else {
// 			console.log("Error, please consult terminal for more info");
// 		}
//
// 	}
// 	function canAfford(mile, amountOnCard) {
// 		var pricePerMile = 3.5 * (mile = destination);
// 		var tip = pricePerMile * 0.2;
// 		if(amountOnCard >= pricePerMile + tip) {
// 			console.log("Your Rideshare today will be: " + pricePerMile);
// 			console.log("Your included tip is: " + tip);
// 			return true;
// 		} else {
// 			console.log("Not enough available funds at this times");
// 			return false;
// 		}
// 	}
// 	function driverNearby(searchRadius) {
// 		searchRadius = 20;
// 		if(destination > searchRadius) {
// 			console.log("Driver not found, please try again soon");
// 			return false;
// 		} else {
// 			console.log("Driver found and en route");
// 			return true;
// 		}
// 	}
// getToDestination(20, false, true, canGetRideShare(canAfford(destination,60),driverNearby()));

	// TERNARY - Best used as one line if statement
	//			Improper use multiple conditions to be passed

	// function showFatType() {
	// 	var fatType = "butter";
	//
	// 	var isButter = fatType.toLowerCase() === "butter";
	//
	// 	var loggingStatement;
	//
	// 	if(isButter) {
	// 		loggingStatement = "'Mo' butta, mo' betta' \n\t-Paula Deen";
	// 	} else {
	// 		return "'I can't Believe It's Not Butter!' \n\t-Fangirls of Favio"
	// 	}
	//
	// 	return isButter
	// 	? "'Mo butta, mo' betta!' \n\t-Paula Deen"
	// 		: "'I can't Believe It's Not Butter!' \n\t-Fangirls of Favio";
	// }
	// console.log(showFatType);
	//
	// SWITCH STATEMENTS

// 	function getHeartRangeValues(age) {
// 		age = 26;
// 		var heartRange;
//
// 		switch(true) {
// 			case (age >= 20 && age < 30):
// 				heartRange = "100-170";
// 				break;
// 			case (age >= 30 && age < 35):
// 				heartRange = "95-162";
// 				break;
// 			case (age >= 35 && age < 40):
// 				heartRange = "93-157";
// 				break;
// 			default:
// 				heartRange = "Cannot Determine";
// 		}
// return heartRange;
// 	}
// 	console.log(getHeartRangeValues());

	function isCorrectFruit(fruit) {
		switch(fruit) {
			case "apple":
				console.log("This is an Apple");
				break;
			case "orange":
				console.log("This is an Orange");
				break;
			case "Banana":
				console.log("This is a Banana");
				break;
			default:
				console.log("Chances are not a fruit");
		}
	}
	isCorrectFruit("potato");
	isCorrectFruit("orange");
	isCorrectFruit("kiwi");
	isCorrectFruit("apple");


})();