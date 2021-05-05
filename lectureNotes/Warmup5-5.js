function last(input) {
	if (typeof input === "string") {
		var stringArr = input.split("");
		return stringArr.pop();
	} else {
		return "Please input a string";
	}
}
console.log(last(""));