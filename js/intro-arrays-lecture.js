(function(){
	"use strict";

	//number - 5
	//string - "dog"
	//boolean - false/true
	//null - the absence of
	//undefined - data should exist, but doesn't
	//objects ->
	//arrays contained within "[]"
	//arrays evaluate to typeof object

	// var myArr = ["dog", "cat", "fish"];
	// values in array known as elements
	// console.log(Array.isArray(myArr));

	// var myCharacteristics = ["Robert", "Software Engineering Student", "20"];
	// console.log(myCharacteristics);
	// console.log("The length of the array is: " + myCharacteristics.length);
	// console.log(myCharacteristics[0]);
	// console.log(myCharacteristics.shift());

// TODO: Make a new array which holds elements based on your own characteristics
//  -> In a console.log, output a string which describes yourself based on those elements
//  -> KEEP IN MIND ZERO-INDEXING!

	// var myCharacteristics = ["Robby", "Robert", "Student at Codeup", "Pennsylvania", "Texas"];
	// console.log(`Hello I am a ${myCharacteristics[2]}, my name is ${myCharacteristics[1]} but everyone just calls me ${myCharacteristics[0]}.`);

	// for(let i = 0; i < 10; i++){
	//
	// }

	// var caseyPets = ["Code", "Murphy", "Hondo", "Buddy"];
	// for(let i = 0; i < caseyPets.length; i++){
	// 	console.log(caseyPets[i]);
	// }
	var objectsArray = [
	{
		"name": "Robert Sledge",
		"age": 20,
		"height": `6'1"`
	}
	]
// function loopArray(array){
// 		for(let i = 0; i < array.length; i++){
// 			console.log(objectsArray[i]);
// 		}
// }
// loopArray(objectsArray);

	objectsArray.forEach(function(object)) {
		console.log("The Current user is: " + object);
	}
})();