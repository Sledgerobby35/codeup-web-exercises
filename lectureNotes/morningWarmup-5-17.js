(function () {
	"use strict";
	//TODO's
	// Write a function named secondToLast(arr)
	// that returns the data type of the second to last element of
	// the array parameter.When you call the
	// function ,pass in an array of your choosing
	function secondToLast(arr){
		return typeof(arr[arr.length-2]);
	}
	let newArr = [5,6,"Hello", true, false, "hi", 4, "JavaScript", 'Mysql'];
	console.log(newArr.length)
	console.log(secondToLast(newArr));
})();