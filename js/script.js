$(document).ready(function() {
	// change background color when mouse hovers over team names
	changeRowColor();
	changeButtonColor();
	//fadeInOnHover();
	//changePickBackground();
});

/****************Functions*****************************************/

function changeRowColor() {
	$(".game_row").hover(function(){
  		$(this).css("background-color","#ABDAEA"); // color when hovered over row
  	},function(){
  		$(this).css("background-color","#F2F9FC"); // normal background color; matches table{background-color}
	});
}

function changeButtonColor() {
	$("button").hover(function(){
		$(this).css("background-color","#06ABD8"); // color when hovered over button; matches color of submit button
		},function(){
			$(this).css("background-color","#ABDAEA"); // normal background color of button
	});
}

/*
function changePickBackground() {   // currently this function works, but if user changes mind and picks other team, both cells are highlighted
	$(document).ready(function() {
		$("input[type='radio']").click(function(){		// when radio button is clicked
			$(this).parent().css("background-color", "#963737")    // use css to change background color of parent <td> elemet
		});
	});
}
*/
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
