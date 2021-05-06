(function(){
	"use strict";
	function remainder(number, divisor){
		if(Number(number) === !NaN && Number(divisor) === !NaN){
			return "Please input a number instead."
		} else {
			return number % divisor;
		}
	}
	console.log(remainder(240, 12));
})();



