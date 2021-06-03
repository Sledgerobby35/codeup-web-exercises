"use strict"
let searchBar = document.getElementById("button");
searchBar.addEventListener("click", getSearch);
function getSearch(e) {
	e.preventDefault();
	let userSearch = document.getElementById("searchBar");
	console.log(userSearch.value);
	let div = document.createElement("div");
	div.setAttribute("class", "col-12");
	div.innerText = userSearch.value
	console.log(div)
	document.getElementById("post-container")
		.appendChild(div);
}
