(function (){
	"use strict";
	function getKindOfDog() {
		return prompt("What kind of dog is it?");
	}
	console.log(getKindOfDog());

	function getContactInfo() {
		return prompt("How do I contact you when I find the dog?");
	}
	console.log(getContactInfo());

	function getDogName() {
		return prompt("What is your dog's name?");
	}
	console.log(getDogsName());

	function playTheGreatEscape() {
		//get all the info
		var dogKind = getKindOfDog();
		var dogName = getDogName();
		var contactInfo = getContactInfo();
		//start searching
		alert("Time to search for this doggo");
		seachForDog(dogName, dogKind, contactInfo);
	}
	function searchForDog(dogName, dogKind, contactInfo) {
		//see a dog
		alert("I see a dog");
		var kindOfDogSeen = getKindOfDog();
		//check if the dog matched
		var isTheLostDog = (kindOfDogSeen === dogKind) && confirm("Does dog respond to the name: " + dogName);

		if (isTheLostDog) {
			//return dog to the owner!
			alert("Puts leash on " + dogName);
			alert("Time to call the owner!");
			alert("calling: " + contactInfo);
			alert("Taking the dog to it's worried owner");
		} else {
			alert("That's not the right dog. Keep searching")
			searchForDog(dogName, dogKind, contactInfo);
		}
	}
	playTheGreatEscape();
}
)();
