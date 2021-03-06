(function () {
	"use strict";

	/* ########################################################################## */

	/**
	 * TODO:
	 * Create a function named `analyzeColor` that accepts a string that is a color
	 * name as input. This function should return a message that related to that
	 * color. Only worry about the colors defined below, if the color passed is not
	 * one of the ones defined below, return a message that says so
	 *
	 * Example:
	 *  > analyzeColor('blue') // returns "blue is the color of the sky"
	 *  > analyzeColor('red') // returns "Strawberries are red"
	 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
	 *
	 * You should use an if-else-if-else block to return different messages.
	 *
	 * Test your function by passing various string literals to it and
	 * console.logging the function's return value
	 */
// function analyzeColor(color) {
// 		if (color === "blue") {
// 			return "Blue is the color of the sky";
// 		} else if(color === "red") {
// 			return "Strawberries are red";
// 		} else if (color === "cyan") {
// 			return "I don't know anything about cyan";
// 		} else {
// 			return "That color doesn't seem match any I know of";
// 		}
//
// }

//console.log(analyzeColor("orange"));
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
	var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
	var randomColor = colors[Math.floor(Math.random() * colors.length)];
	/**
	 * TODO:
	 * Pass the `randomColor` variable to your function and console.log the results.
	 * You should see a different message every time you refresh the page
	 */
	console.log(analyzeColor(randomColor));
	/**
	 * TODO:
	 * Refactor your above function to use a switch-case statement
	 */
	function analyzeColor(color) {
		color = color.toLowerCase();
		switch(color) {
			case "blue":
				return "Blue is the color of the sky";
				break;
			case "red":
				return "Strawberries are red";
				break;
			case"cyan":
				return "I don't anything about cyan";
				break;
			case "yellow":
				return "Yellow is the color of the sun";
				break;
			default:
				return "Error: Can't Recognize Color";
				break;
		}
	}
	/**
	 * TODO:
	 * Prompt the user for a color when the page loads, and pass the input from the
	 * user to your `analyzeColor` function. Alert the return value from your
	 * function to show it to the user.
	 */
	// function userColor(color) {
	// 	color = prompt("Please Input a Color");
	// 	return color;
	// }
	// alert(analyzeColor(userColor()));
	/* ########################################################################## */

	/**
	 * TODO:
	 * Suppose there's a promotion in Walmart, each customer is given a randomly
	 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
	 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
	 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
	 * all for free!.
	 *
	 * Write a function named `calculateTotal` that accepts a lucky number and total
	 * amount, and returns the discounted price.
	 *
	 * Example:
	 * calculateTotal(0, 100) // returns 100
	 * calculateTotal(4, 100) // returns 50
	 * calculateTotal(5, 100) // returns 0
	 *
	 * Test your function by passing it various values and checking for the expected
	 * return value.
	 */
	function calculateTotal(luckyNumber, totalAmount) {
		if(luckyNumber === 0) {
			return totalAmount;
		} else if (luckyNumber === 1) {
			return totalAmount - (totalAmount * 0.1);
		} else if (luckyNumber === 2) {
			return totalAmount - (totalAmount * 0.25);
		} else if (luckyNumber === 3) {
			return totalAmount - (totalAmount * 0.35);
		} else if (luckyNumber === 4) {
			return totalAmount - (totalAmount * 0.5);
		} else if (luckyNumber === 5) {
			return 0;
		}
	}
	//const luckyNumber = Math.floor(Math.random() * 5);


	/**
	 * TODO:
	 * Uncomment the line below to generate a random number between 0 and 6.
	 * Prompt the user for their total bill, then use your `calculateTotal` function
	 * and alerts to display to the user what their lucky number was, what their
	 * price before the discount was, and what their price after the discount is.
	 */
//Generate a random number between 0 and 6
 	var luckyNumber = Math.floor(Math.random() * 6);
	var totalBill = prompt("What was the total of the bill?")
	alert("Your Lucky number was: " + luckyNumber  + "\nBefore applying discount total is: $" + totalBill);
	alert("After applying discount you will only be paying: $" + calculateTotal(luckyNumber, totalBill));
	/**
	 * TODO:
	 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
	 * would like to enter a number. If they click 'Ok', prompt the user for a
	 * number, then use 3 separate alerts to tell the user:
	 *
	 * - whether the number is even or odd
	 * - what the number plus 100 is
	 * - if the number is negative or positive
	 *
	 * if what the user enters is not a number, use an alert to tell them that, and
	 * do *not* display any of the above information.
	 *
	 * Can you refactor your code to use functions?
	 * HINT: The way we prompt for a value could be improved
	 */
	function numberIsEvenOrOdd(number) {
		if(number % 2 === 0) {
			return "Even";
		} else {
			return "Odd";
		}
	}
	function plus100(number) {
		return Number(number) + 100;
	}
	function isPositiveOrNegative(number) {
		if(number >= 0) {
			return "Positive";
		} else {
			return "Negative";
		}
	}
	function isNumber(string) {
		console.log(Number(string) + 3);
		if(isNaN(Number(string))) {
			alert("Please enter a number instead");
			return false;
		} else {
			return true;
		}
	}
	function userInteract() {
		if(confirm("Would you like to enter a number?")) {
			const userNumber = prompt("Please input number here");
			if(isNumber(userNumber)) {
				alert(numberIsEvenOrOdd(userNumber));
				alert(plus100(userNumber));
				alert(isPositiveOrNegative(userNumber));
			} else {
				userInteract();
			}
		}
	}
	userInteract();
})();