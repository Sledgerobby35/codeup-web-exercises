//make sure the DOM is loaded first
// document.addEventListener("DOMContentLoaded", function() {
// 	addListeners();
// });
$(document).ready(function() {
	addListeners();
})
//parent method for adding all listeners
function addListeners(){
	//get the elements to add listener and change image
	// let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
	let cardContainers = Array.from($(".col-md-3"));
	addEvents(cardContainers, '../img/rubberDuck.jpeg', 'mouseover');
	addEvents(cardContainers, '../img/questionMark.png', 'mouseout');
}
//add mouseover/mouseout events to all selected elements
function addEvents(cardContainers, imgPath, listenerType){
	cardContainers.forEach((cc) => {
		let card = cc;
		//create listener which will call function change the image
		let listener = function (event) {
			// let cardImg = card.querySelector(".card .card-img-top");
			let cardImg = $(".card .card-img-top");
			changeImage(cardImg, imgPath);
		};
		cc.addEventListener(listenerType, listener);
	});
}
//actual function to swap images
function changeImage(card, imgPath){
	card.setAttribute('src', imgPath);
}