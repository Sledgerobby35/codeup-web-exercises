//make sure the DOM is loaded first
// document.addEventListener("DOMContentLoaded", function() {
// 	addListeners();
// });
(function(){

	// addListeners();
// //parent method for adding all listeners
// function addListeners(){
// 	//get the elements to add listener and change image
// 	// let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
// 	let cardContainers = Array.from($(".col-md-3"));
// 	// Array.from($(".col-md-3"))
// 	addEvents(cardContainers, '../img/rubberDuck.jpeg', 'mouseover');
// 	addEvents(cardContainers, '../img/questionMark.png', 'mouseout');
// }
// //add mouseover/mouseout events to all selected elements
// function addEvents(cardContainers, imgPath, listenerType){
// 	cardContainers.forEach((cc) => {
// 		let card = cc;
// 		// let cardImg = card.querySelector(".card .card-img-top");
// 		//create listener which will call function change the image
// 		let listener = $("jqClass").hover(function(){
// 			changeImage(cardImg, imgPath);
// 		}, function(){
// 			changeImage(cardImg, imgPath);
// 		});
// 		// let listener = function (event) {
// 		// 	let cardImg = card.querySelector(".card .card-img-top");
// 		// 	changeImage(cardImg, imgPath);
// 		// };
// 		cc.addEventListener(listenerType, listener);
// 	});
// }
// //actual function to swap images
// function changeImage(card, imgPath){
// 	card.setAttribute('src', imgPath);
// }
// function addListeners(){
// 	let cardContainers = $(".col-md-3");
// 	addEvents(cardContainers, "../img/rubberDuck.jpeg", "../img/questionMark.png");
// }
// function addEvents(cardContainers, imgPath1, imgPath2){
//
// 	let handler1 = function (event) {
// 		$(this)
// 			.find(".card-img-top")
// 			.attr('src', imgPath1);
// 	};
//
// 	let handler2 = function (event) {
// 		$(this)
// 			.find(".card-img-top")
// 			.attr("src", imgPath2);
// 	};
//
// 	cardContainers.hover(handler1, handler2);
// }
	// TODO: When an li with the .list-group-item class is clicked, replace the text with the same text, but uppercased
//     -> ALSO, change the background of the li to a new color
//     -> When the li is clicked again, reset the li background color to its original
//   color
//      -> Don't worry about changing the text back
// 	const list = $(".list-group-item");
// 	function addListeners() {
// 		let hoverOn = function () {
// 			list.toUpperCase();
// 			list.css("background-color", "blue");
// 		}
// 		let hoverOff = function () {
// 			list.css("background-color", "");
// 		}
// 		list.hover(hoverOn, hoverOff);
// 	}
// 	list.click(function(){
// 		$(this).css({"background-color": "blue", "text-transform": "uppercase"});
// 	});
// 	list.dblclick(function(){
// 		$(this).css({"background-color": "", "text-transform": ""});
// 	})
	function addEvent2(){
		window.location.href = $("#handleField").val();
	}
	function addEvent() {
		let url = $("#handleField").val();
		if(!url.includes("https")){
			url = "https://" + url;
		}
		window.location.href = url;
	}
	$("#submitBtn").click(addEvent2);
})();