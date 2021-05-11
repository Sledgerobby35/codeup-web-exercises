"use strict";

function showMulitplcationTable(num){
	for(let i = 1; i <= 10; i++){
		console.log(`${num} * ${i} = ${num * i}`);
	}
}
showMulitplcationTable(7)

// function generateRandomNumber(arr){
// 	for(let i = 1; i <= 10; i++) {
// 		arr.push(Math.floor(Math.random() * 180) + 20);
// 	}
// }
// function evenOrOdd(){
// 	var arr = [];
// 	generateRandomNumber(arr);
// 	for(let i = 0; i < arr.length; i++){
// 		if(arr[i] % 2 === 0){
// 			console.log(`${arr[i]} is even`);
// 		} else {
// 			console.log(`${arr[i]} is odd`);
// 		}
// 	}
// }
// evenOrOdd();

function constructNum(num){
	var total = 0;
	for(let i = 0; i < num; i++) {
		total = total + num * Math.pow(10,i);
	}
	console.log(total);
}
function countUp() {
	for(let i = 1; i <= 9; i++){
		constructNum(i);
	}
}
//countUp();


function countDown(){
	for(let i = 100; i > 0; i -= 5){
		console.log(i);
	}
}
//countDown();