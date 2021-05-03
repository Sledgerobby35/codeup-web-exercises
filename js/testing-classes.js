"use strict";
class Rectangle{
	constructor(w, h) {
		this.w = w;
		this.h =h;
	}
}
Rectangle.prototype.area = (function(a, b){
	a = this.w;
	b = this.h;
	console.log(a, b);
	return a * b;
});
//var rec = new Rectangle(10,2);
//console.log(rec.area());
class Square extends Rectangle{
	constructor(w, h = 0) {
		super(w);
		this.h = w;
	}
}
var square = new Square(7);
console.log(square.area());