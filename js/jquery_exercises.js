"use strict";
// $(document).ready(function(){
// 	alert("The DOM has finished loading");
// });
// let pizzaContent = $("#pizza").html();
// alert(pizzaContent);
// let siopaoContent = $("#siopao").html();
// alert(siopaoContent);
// let listContent = $("#list-item").html();
// alert(listContent);
// $(".codeup").css("border", "1px solid red");
// $("li").css("font-size", "20px");
// $("h1").css("background-color", "rgba(255,255,102,0.5)");
// $("p").css("background-color", "rgba(255,255,102,0.5)");
// $("li").css("background-color", "rgba(255,255,102,0.5)");
$("h1").click(function(){
	$("h1").css("background-color", "blue");
});
$("p").dblclick(function (){
	$("p").css("font-size", "18px")
});
$("li").hover(
	function(){
		$(this).css("color", "red");
	},
	function(){
		$(this).css("color", "black");
	}
)