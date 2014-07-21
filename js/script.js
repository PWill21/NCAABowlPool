$(document).ready(function() {
	// change background color when mouse hovers over team names
	changeRowColor();
	changeButtonColor();
	fadeInOnHover();
});

/****************Functions*****************************************/

function changeRowColor() {
	$(".game_info").hover(function(){
  		$(this).css("background-color","#ABDAEA");
  	},function(){
  		$(this).css("background-color","#F2F9FC");
	});
}

function changeButtonColor() {
	$("button").hover(function(){
		$(this).css("background-color","#4DB9DD");
		},function(){
			$(this).css("background-color","#ABDAEA");
	});
}
/*
function fadeInOnHover() {
	$("radio").hover(function() {
		$(this).fadeTo("slow", 1.0);
	},function() {
		$(this).fadeTo("slow", 0);
	});
}
*/
/*
function changeTeamBackground() {
	$("td").mouseover(function() {
		$(this).css("background-color", "#999")
	});
}
*/
