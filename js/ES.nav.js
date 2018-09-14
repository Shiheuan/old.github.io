var ES = {};
ES.nav = [
	'cardAA',
	'cardBA',
	'cardCA',
	'cardDA', 	
];

$(function(){
/*	switch (randomBg())
 *	{
	case 1: 
		$("body").css( {
						background: "url(images/bg.jpg)",
						color: "#ccc"
					});
		break;
	case 2:
		$("body").css( {                               
						background: "url(images/bg1.jpg)",
						color: "#fff"                    
					});                                
		break;
	case 3:
		$("body").css( {                                  
				 		background: "url(images/bg2.jpg)",
				 		color: "#969696"                   
				 	});                                   
		break;
	case 4:
		$("body").css( {                                  
				 		background: "url(images/bg3.jpg)",
				 		color: "#83ffa9"                     
				 	});                                   
		break;
	}
 *	*	*	*/
	ES.nav.sort(shuffle);
	for(var i=0;i<3;i++){
		$(".card:first-child").clone().appendTo("#cards");
	}
	$("#cards").children().each(function(index) {		
		$(this).css({
			"left" : ($(this).width()  + 40) * (index % 2),
			"top"  : ($(this).height() + 40) * Math.floor(index / 2)
		});

		var pattern = ES.nav.pop();
		$(this).find(".back").addClass(pattern);
		$(this).attr("data-pattern",pattern);
		$(this).mouseover(selectCard);
		$(this).mouseout(concelCard);
		$(this).click(goTo);
	});	
});

function selectCard() {
	$(this).addClass("card-flipped");
	if ($(this).attr("data-pattern") == "cardAA")
	{
		$(".tipA").css("visibility", "visible");

	}
	if ($(this).attr("data-pattern") == "cardBA")
	{
		$(".tipO").css("visibility", "visible");
	}
	if ($(this).attr("data-pattern") == "cardCA")
	{
		$(".tipN").css("visibility", "visible");
	}
	if ($(this).attr("data-pattern") == "cardDA")
	{
		$(".tipD").css("visibility", "visible");
	}
}

function concelCard() {
	$(this).removeClass("card-flipped");
	$(".tipA").css("visibility", "hidden");
	$(".tipD").css("visibility", "hidden");
	$(".tipO").css("visibility", "hidden");
	$(".tipN").css("visibility", "hidden");
	
	
}

function goTo() {
	if ($(this).attr("data-pattern") == "cardAA")
	{
		window.location.href = "html/Abouts.html";
	}
	if ($(this).attr("data-pattern") == "cardBA")
	{
		window.location.href = "html/Games.html";
	}
	if ($(this).attr("data-pattern") == "cardCA")
	{
		window.location.href = "html/News.html";
	}
	if ($(this).attr("data-pattern") == "cardDA")
	{
		alert('not ready to show you,sorry.');
		window.location.href = "html/Down.html";
	}
}
function shuffle() {
	return 0.5 - Math.random();
}                           
/* function randomBg() {                         
 * 	return Math.floor(Math.random()* 4)+1;    
 * }                                             
 *			*			*			*/