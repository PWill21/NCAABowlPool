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
  		$(this).css("background-color","#9DE0A1");
  	},function(){
  		$(this).css("background-color","#F2F9FC");
	});
}

function changeButtonColor() {
	$("button").hover(function(){
		$(this).css("background-color","#0F7A18");
		},function(){
			$(this).css("background-color","#ABDAEA");
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
