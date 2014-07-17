$(document).ready(function() {
	// change background color when mouse hovers over team names
	changeColor();
});

/****************Functions*****************************************/

function changeColor() {
	$(".date").mouseover(function() {
		$(this).css("background-color", "#DCF2F1")
	});
}

/*
function changeTeamBackground() {
	$("td").mouseover(function() {
		$(this).css("background-color", "#999")
	});
}
*/