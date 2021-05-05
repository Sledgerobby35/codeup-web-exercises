function last(input) {
	if (typeof input === "string") {
		var stringArr = input.split("");
		return stringArr.pop();
	} else {
		return "Please input a string";
	}
}

let last = (input) => {
	return input
		.split("")
		.pop();
}
console.log(last(""));