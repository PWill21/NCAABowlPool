$(document).ready(function() {
	// change background color when mouse hovers over team names
	changeRowColor();
	changeButtonColor();
});

/****************Functions*****************************************/

function changeRowColor() {
	$("tr").hover(function(){
  		$(this).css("background-color","#CBF2ED");
  	},function(){
  		$(this).css("background-color","#fff");
	});
}

function changeButtonColor() {
	$("button").hover(function(){
		$(this).css("background-color","#4DB9DD");
		},function(){
			$(this).css("background-color","#fff");
	});
}
/*
function changeTeamBackground() {
	$("td").mouseover(function() {
		$(this).css("background-color", "#999")
	});
}
*/