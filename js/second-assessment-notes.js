(function(){
	"use strict";
	function lowerCase(str){
		if(typeof str === "string")
			return str.toLowerCase();

		return false;
	}
	function numify(v){
		if(typeof v ==="string" || typeof v === "number")
			return Number(v);

		return NaN;
	}
	function subtract(x, y){
		let res = numify(x) - numify(y);
		if(Number.isNaN(res))
			return false;

		return res;
	}
	function multiplyBy2(x){
		let res = numify(x) * 2;
		if(Number.isNaN(res))
			return false;

		return res;
	}
	function getLowestNumber(x, y, z){
		let res = Math.min(numify(x) numify(y), numify(z));
		if(Number.isNaN(res))
			return false;

		return res;
	}
	function isEvenlyDivisible(x, y){
		let res = numify(x) % numify(y);
		if(Number.isNaN(res))
			return false;

		return res === 0;
	}
	function areNums(){
		for(let arg of arguments)
			if(typeof(arg) !== "number")
				return false;

		return true;
	}
	function isBetween(v, l, h){
		if(areNums(v, l, h))
			return v > l && v < h;

		return false;
	}
	function replace(str, find, replace){
		if(typeof str === "string")
			return str.replace(find, replace)

		return false
	}
	function addStringLengths(a, b){
		if(typeof a === "string" && typeof b ==="string")
			return a.length + b.length;

		return false;
	}
	function convertHourToSec(hours){
		if(numify(hours) > 0)
			return hours * 3600;

		return false;
	}
	function calculateChanage(paid, cost){
		if(numify(paid) && numify(cost))
			return `$${(paid - cost).toFixed(2)}`;

		return false;
	}
})();