// DOM
// let school = {
// 	teacher: "Casey",
// 	students: 38,
// 	// objects also can be functions
// 	//methods
// 	getNumStudents: function(){
// 		console.log(`num of students is: ${this.students}`)
// 	}
// }
//print teacher's name
// console.log(school.teacher)
// school.getNumStudents();
// //retrieving elements
// //by ids
// let lightGreenElement = document.getElementById("light-green");
// console.log(lightGreenElement);
//whats returned
//by classname
// let red = document.getElementsByClassName("red");
// console.log(red);
// console.log(red[0]);
// for(let i =0; i < red.length; i++)
// 	console.log(red[i]);
//
// //whats returned
// //an array of all the elements containing class name
// //get by Tag Name
// let par = document.getElementsByTagName("p");
// console.log(par);
// let forms = document.forms;
// console.log(forms);
// // remove attributes
// let firstBlue = document.getElementsByClassName("background-blue")[0];
// console.log(firstBlue);
// firstBlue.removeAttribute("class");
// firstBlue.setAttribute("class", "col-3");
//STYLE ELEMENTS

// let greenBorder = document.getElementsByClassName("border-green")[0];
// console.log(greenBorder);
//
// greenBorder.style.border = "4px solid #f0f0f0";
// let newEl = document.createElement("p");
// console.log(newEl);

// let pizzaForm = document.getElementsByClassName("pizza")
function changeList() {
	let exisDiv = document.getElementsByTagName("body")[0];
	console.log(exisDiv);
	let newDiv = document.createElement("div");
	newDiv.innerText = "List Number 2";
	let newChild = document.createElement("ul");
	for (let i = 0; i < 5; i++) {
		let child = document.createElement("li");
		child.setAttribute("id", `li${i + 1}`);
		child.innerText = `List Item ${i + 1}`;
		newChild.appendChild(child);
	}
	newDiv.appendChild(newChild);
	exisDiv.appendChild(newDiv);
}

let newDiv = document.createElement("div");
console.log(newDiv);
newDiv.innerText = 'This is a brand new Div';
console.log(newDiv);
// newDiv.innerText = " ";
// console.log(newDiv);
//Grady Example
var newEl = document.createElement('ul');

newEl.setAttribute('class', 'pizza');
for (let i = 0; i < 5; i++) {
	let smallEl = document.createElement('li');
	smallEl.setAttribute('id', `li${i + 1}`);
	smallEl.innerText = `List item ${i + 1}`;
	newEl.appendChild(smallEl);
}
let button = document.getElementById("myBtn")
	.addEventListener("click", removeChild);

function removeChild() {
	let deleteItem = document.querySelector("#foodList");
	console.log(deleteItem);
	let item = document.getElementById("pizza");
	deleteItem.removeChild(item);
}
