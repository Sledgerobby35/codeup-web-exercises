(function (){
	"use strict";

// 	var aboutMe = new Object()
// 	console.log(aboutMe);
//
// 	var thisIsMe = {
// 		age: 20,
// 		height: `6'1"`,
// 		name: "Robert Sledge"
// 	}
// 	aboutMe.age = 20;
// 	aboutMe.height = `6'1"`;
// 	aboutMe.name = "Robert Sledge";
// 	aboutMe["sport"] = "Tennis";
// 	aboutMe["eyeColor"] = "Brown";
// 	aboutMe["hairColor"] = "Brown";
// 	console.log(aboutMe);
// 	var nickName = "Robby";
// 	thisIsMe["nickName"] = nickName;
// 	console.log(thisIsMe);
// 	//Difference bracket and DOT notation
// 	//bracket requires quotes
// 	//DOT notation minor differences\ Accesses information directly from object
//
// 	let bracketObj = {
// 		cat: 'meow',
// 		dog: 'woof'
// 	};
// 	var dog = "cat";
// 	let sound = bracketObj[dog];
// 	console.log(sound);
//
//
// // TODO: create an empty 'yourFaveSportsTeam' object using object literals
// // TODO: let's add a 'city', 'coach', and 'sport' property to our 'team' object using dot
// // TODO: let's add 'numOfPlayers', 'numOfChampsWon', and 'isBestTeam' properties to our same 'teams' object using bracket notation
// // TODO: write a function that returns the sport and numOfPlayers from your 'team' object
//
// 	const yourFaveSportsTeam = {}
// 	yourFaveSportsTeam.city = "Philadelphia";
// 	yourFaveSportsTeam.coach = "Nick Sirianni";
// 	yourFaveSportsTeam.sport = "Football";
// 	yourFaveSportsTeam.team = "Eagles";
// 	yourFaveSportsTeam["numOfPlayers"] = 11;
// 	yourFaveSportsTeam["numOfChampsWon"] = 4;
// 	yourFaveSportsTeam["isBestTeam"] = false;
//
// 	function displayInfo(obj){
// 		let sport = obj.sport;
// 		let numOfPLayers = obj.numOfPlayers;
// 		return `The sport is ${sport} with a team size of ${numOfPLayers} players`;
// 	}
// 	function returnInfo(obj){
// 		return [obj.sport, obj.numOfPlayers];
// 	}
// 	//console.log(returnInfo(yourFaveSportsTeam));
// 	//console.log(displayInfo(yourFaveSportsTeam));
//
// 	var theSpurs = {
// 		city: "SA",
// 		coach: "Gregg",
// 		wins: 5,
// 		players: [
// 			"Tim Duncan",
// 			"Manu",
// 		],
// 		playerInfo: {
// 			duncan: {
// 				age: 40,
// 				first: "Tim",
// 				mvp: 3
// 			},
// 			manu: {
// 				age: 38,
// 				first: "Manu",
// 				mvp: 6
// 			}
// 		}
// 	}
// 	console.log(theSpurs.players);
// 	console.log(theSpurs.playerInfo);
// 	var laptop = {
// 		color: `Space Grey`,
// 		make: `Mac`,
// 		size: 13,
// 		shutDown: function () {
// 			return "Laptop is shutting down";
// 		}
// 	}
// laptop.powerOn = function(){
// 			return `Laptop starting up`;
// 		}
// 	console.log(laptop);


	var theSpurs = {
		city: "SA",
		coach: 'gregg',
		wins: 5,
		players: ["one", "two", "tim duncan", "manu", "david robinson"],
		playerInfo: [
			{
				name: "Tim",
				age: 40,
				mvp: 3
			},
			{
				name: "manu",
				age: 38,
				mvp: 6
			}
		],
		otherNBATeams: {
			Jazz: {
				city: "Salt Lake City",
				mascot: "Jazz Bear",
				champsWon: 0
			},
			Mavs: {
				city: "Dallas",
				mascot: "MavsMan & Champ",
				champsWon: 1
			},
			Pistons: {
				city: "Detroit",
				mascot: "Hooper the Horse",
				champsWon: 3
			}
		}
	}
	//console.log(theSpurs.otherNBATeams.Mavs);
// console.log(theSpurs.playerInfo[0].age);
// console.log(theSpurs);
// TODO: using above nested object, log the mascot of the "otherNBATeams", change "manu's" name
//  from "manu" to "Ginobli", print out the 3rd element in the 'players' array, add another
//  'otherNBATeam' team object.
	console.log(theSpurs.otherNBATeams.Jazz.mascot);
	console.log(theSpurs.otherNBATeams.Mavs.mascot);
	console.log(theSpurs.otherNBATeams.Pistons.mascot);
	function changeName(obj){
		for(let i = 0; i < obj.playerInfo.length; i++){
			let newName = "Ginobli";
			let oldName = obj.playerInfo[i].name;
			if(oldName === 'manu'){
				obj.playerInfo[i].name = newName;
				console.log(oldName);
				console.log(obj.playerInfo[i].name);
				return obj.playerInfo[i].name;
			}
		}
	}

	changeName(theSpurs);
	console.log(theSpurs.playerInfo)
})();