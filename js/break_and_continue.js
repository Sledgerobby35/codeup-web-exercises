'use strict';

function skipUserNumber(randomNumber) {
	do {
		randomNumber = Number(prompt("Please Enter an odd number between 1 and 50"));
	} while (randomNumber % 2 !== 1);
	console.log('Skip Entered Number of: ' + randomNumber);
	return randomNumber;
}
function looping(randomNumber){
	for (var i = 0; i < 50; i++) {
		if (i % 2 == 1 && i !== randomNumber) {
			console.log('Here is an odd number: ' + i)
		} else if (i == randomNumber) {
			console.log('Yikes! Skipping number: ' + i)
		} else {
			continue;
		}
	}
}
function putItTogether(){
	var randomNumber = skipUserNumber(randomNumber);
	looping(randomNumber);
}

putItTogether();