//JSON
"use strict";
//  {        -------My Attempt--------
// 	firstName: "Robert",
// 	lastName: "Sledge",
// 	age: 20,
// 	occupation: "student",
// 	favoriteMovies: [
// 		{
// 			movieName: "Project Almanac",
// 			movieLength: "1h 46m",
// 			movieDescription: "A group of teens discover secret plans of a time" +
// 				" machine, and construct one. However, things start to get out of control.",
// 		},
// 		{
// 			movieName: "Eragon",
// 			movieLength: "1h 44m",
// 			movieDescription: "Eragon (Ed Speleers), a poor farm boy, lives in" +
// 				" Alagaesia, a kingdom ruled by Galbatorix (John Malkovich), a powerful but evil monarch. One day, Eragon discovers a beautiful stone that he soon realizes is a dragon's egg. When the creature hatches, Eragon sets forth on a path that could restore the glory of his homeland's legendary Dragon Riders and perhaps overthrow Galbatorix.",
// 		}
// 	]
// }

//JSON ------Laura's Example-------
// response === {
// 	"name": "frog",
// 	"color": "green",
// 	"favorite": true
// }

//requests
//jquery .ajax() method
//syntax
// $.ajax("url");
// //url location to go look for something / post something
// console.log($.ajax("https://jsonplaceholder.typicode.com/comments"))
//
// $.ajax("https://jsonplaceholder.typicode.com/comments", {
// 	type: "POST",
// 	data: {
// 		title: "my trip to Antartica"
// 		article: "lorem ipsum"
// 	}
// })

//POST request - adding/sending information to the server adding to it

//DELETE - send info about the thing you want to delete, and then go in and actually
// delete

//PUT
// make an ajax request to the comments endpoint and console it.
// let result = $.ajax("https://jsonplaceholder.typicode.com/posts", {
// 	action: "GET"
// })
//
//
// let newArticle = $.ajax("https://jsonplaceholder.typicode.com/post", {
// 	action: "POST",
// 	data: {
// 		userId: 1,
// 		id: 1,
// 		title: "First Article",
// 		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
// 			"eiusmod tempor incididunt ut labore et dolore magna aliqua. Et egestas " +
// 			"quis ipsum suspendisse ultrices gravida dictum fusce ut. Nullam ac " +
// 			"tortor vitae purus faucibus ornare."
// 	}
// })
// console.log(newArticle);
// console.log(result);

//Successfull
// console.log($.ajax("https://jsonplaceholder.typicode.com/post"));
// $.ajax("https://jsonplaceholder.typicode.com/post").done(function(data, status, jqxhrt){
// 	console.log(data);
// 	console.log(status);
// 	console.log(jqxhrt);
// 	alert("your request has been completed successfully");
// })
//Failed
// $.ajax("https://jsonplaceholder.typicode.com/post", {
// 	type: "POST",
// 	data: {
// 		title: "hello world",
// 		body: "our planet rocks!"
// 	}
// }).fail(function(jqxhrt, status, error){
// 	console.log(jqxhrt);
// 	console.log(status);
// 	console.log(error);
// });
//
// $("#click-me").click(function(){
// 	$.ajax("https://jsonplaceholder.typicode.com/post", {
// 		type: "GET",
// 		success: function(){
// 			alert("this worked")
// 		},
// 		error: function(){
// 			alert("an error has occurred")
// 		}
// 	}).done(function(){
// 		alert("dont method has been fired")
// 	})
// })
$.ajax("https://jsonplaceholder.typicode.com/post").done(function(data) {
	console.log(typeof data);
	let allPosts = data;
	let dataId = allPosts[25].id;
	console.log(dataId)
})