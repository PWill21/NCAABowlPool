$(document).ready(function() {
	// change background color when mouse hovers over team names
	changeColor();
});

/****************Functions*****************************************/

function changeColor() {
	$("tr").hover(function(){
  		$(this).css("background-color","#CBF2ED");
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