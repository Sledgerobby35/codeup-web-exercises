"use strict";
// console.log("Above my fetch request")
//
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// 	.then(response => {
// 		console.log(response.json())
// 	})
// 	.then(data => {
// 		console.log(data)
// 	})
//
// console.log("Below my fetch request")

// fetch("https://jsonplaceholder.typicode.com/posts", {
// 	method: "POST",
// 	headers: {},
// 	body: "Cupcakes can sometimes be delicious without any chocolate"
// })
// 	.then(response => console.log(response))
// 	.catch(err => {
// 		console.log(`error: ` + err);
// 	});
let newImage = fetch("https://dog.ceo/api/breeds/image/random", {
	method: "GET",

}).then(response => response.json())
	.then(data => {
		console.log(data);
		console.log(data.message);
		$("#random-dog-image").attr("src", data.message);
	})
.catch(error => console.log(error));