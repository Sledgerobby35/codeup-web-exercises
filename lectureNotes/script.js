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

let greenBorder = document.getElementsByClassName("border-green")[0];
console.log(greenBorder);

greenBorder.style.border = "4px solid #f0f0f0";
