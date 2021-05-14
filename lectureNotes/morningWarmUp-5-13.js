(function(){
	"use strict";
	function nestedForLoop(){
		let total = 0;
		for(let i = 1; i <= 9; i++){
			for(let x = 0; x < i; x++){
				total += i * Math.pow(10,x);
			}
			console.log(total);
		}
		return total;
	}
	console.log(0 + 2 * Math.pow(10, 1));
	console.log(nestedForLoop());
})();