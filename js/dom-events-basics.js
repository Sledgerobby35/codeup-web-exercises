// Before coding up an event, let's get some dissection out of the way

//TODO: Event - the type of trigger that will fire off
//  -> click, dblclick, submit, hover, keyup, keydown, mouseover, mouseout, change, and many more!
//  -> https://developer.mozilla.org/en-US/docs/Web/Events

//TODO: Listener - what will *happen* when the event fires off
//  -> Can be whatever you want/need. For example:
//      -> On click, change the background color
//      -> On hover, a description pops up
//      -> On form submission, disable submit button
//      -> On form submission, display user inputs to the screen in a new element

// TODO: Putting it together
//  -> In order to add an event listener to a node, we follow a boilerplate process:
//      -> Pick your element(s) using your desired document method (getElementById, class, selector, selectorAll)
//      -> chain .addEventListener() on to the selected node(s) -> myNode.addEventListener()
//      -> pass two arguments to .addEventListener():
//          -> the type of event (as a string). "click", "hover", etc
//          -> the listener definition either as an inline function or a passed function definition
//      -> Wrap all of this in a function and call that function (your event won't fire unless it's actually called to be added, right?)

// TODO: Your function will end up looking something like this


/*
    function addEvent(){
        var myNode = document.getElementById("myId");
        myNode.addEventListener("click", getListener);
    }

    function getListener(){
        // make changes here
        // maybe append new element nodes, change style, add/remove text, etc
    }
*/


// We have talked about changing content/styles and adding/removing/altering elements in DOM

// Now, we need to think about WHEN and WHY we should make those changes

// In dom-events-basics.html, we have a Boostrap navbar.

// Perhaps the content in the body (below the navbar) should change when a user clicks a sus link

// setSuspectEvent();
//
// function setSuspectEvent() {
//     document.getElementById("sus")
//             .addEventListener("click", appendSusNode);
// }
//
// function appendSusNode() {
//     document.getElementById("sus-group")
//             .appendChild(getImageNode());
// }
//
// function getImageNode() {
//
//     let imageNode = document.createElement("img");
//     imageNode.setAttribute("src", "assets/images/sus.gif");
//     imageNode.setAttribute("class", "col-12 col-sm-6 col-md-4 px-0");
//     // imageNode.setAttribute("class", "col-12");
//
//     return imageNode;
// }
// function getImage() { //creats img element to display
// 	let image = document.createElement("img");
// 	image.setAttribute("src", "img/pexels-quang-nguyen-vinh-2132180.jpg");
// 	image.setAttribute("alt", "Mountain SunSet");
// 	image.setAttribute("class", "col-12 col-sm-6 col-md-4 px-0");
// 	return image;
// }
// function changeBtnColor(){ //changes Background Color of body element
// 	document.body.style.backgroundColor = "#00ff00";
// }
// function appendImage(){ //displays getImage() and appends as child to div element
// 	document.getElementById("sus-group")
// 		.appendChild(getImage());
// }
// function displayImage(){ //adding event listener to button to display image when
// 	// clicked
// 	document.getElementById("myBtn")
// 		.addEventListener("click", appendImage);
// 	onclick();
//
// }
// function onclick(){ //when button clicked background color changes
// 	let btn = document.getElementById("myBtn");
// 	btn.onclick = changeBtnColor;
// }
// displayImage();
let clicked = 0;
function countUp(){
	console.log(clicked);
	return clicked++;
}
function bg1() {
	document.body.style.backgroundColor = "#00ff00";
}
function bg2() {
	document.body.style.backgroundColor = "#0000ff";
}
function bg3() {
	document.body.style.backgroundColor = "#ff0000";
}
function btnClick(){
	let btn = document.getElementById("myBtn");
	btn.onclick = countUp;
	btn.onclick = logic;
}
function logic() {
	switch (countUp()){
		case 0:
			alert("Try clicking the button");
			break;
		case 1:
			bg1();
			break;
		case 2:
			bg2();
			break;
		case 3:
			bg3();
			break;
		default:
			alert("Stop clicking the button. You've had enough surprises");
			let myBtn = document.getElementById("myBtn");
			myBtn.setAttribute("style", "display: none");
			document.body.style.backgroundColor = "#ffffff";
			break;
	}
}
btnClick();

// TODO: comment out the above code and make your own events!
//  -> Document-specific events: https://developer.mozilla.org/en-US/docs/Web/API/Document#events
//  -> You must:
//      -> add at *least* one event and listener
//      -> when that event is fired, your listener should:
//          -> add at *least* one element to the page with content and styling
//  -> It will be helpful to use the bootstrap classes for your layout and styling in this case
//      -> Keeps you from getting bogged down on styling/layout
//  -> BONUS: Don't feel stifled by the above lesson examples
//      -> You can add more than one event to an element
//      -> You can add an event to many elements at once
//      -> You can add events to things other than element nodes (window, document, element, form, and more!)
//          -> Events across object models: https://developer.mozilla.org/en-US/docs/Web/Events
//













