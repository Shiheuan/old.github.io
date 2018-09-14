var News = {};
News.num = [
	'cardC4',
	'cardC3',
	'cardC2',
	'cardCA', 	
];

$(function(){
	$("#right").click(goToBoard);
	$("#left").click(goToNews);
});

function goToBoard() {
	$("#board").css("visibility", "visible");
	$("#news").css("visibility", "hidden");
	$("#left").css("visibility", "visible");
	$("#right").css("visibility", "hidden");
}

function goToNews() {
	$("#board").css("visibility", "hidden");
	$("#news").css("visibility", "visible");
	$("#left").css("visibility", "hidden");
	$("#right").css("visibility", "visible");
}

$(function(){
for(var i=0;i<3;i++){
		$(".card:first-child").clone().appendTo("#cards");
	}
	$("#cards").children().each(function(index) {		
		$(this).css({
			"left" : 40 ,
			"top"  : ($(this).height() + 40) *(index) + 20
		});

		var pattern = News.num.pop();
		$(this).find(".back").addClass(pattern);
		$(this).mouseover(concelCard);
		$(this).mouseout(selectCard);
	});	
});

function selectCard() {
	$(this).addClass("card-flipped");
}

function concelCard() {
	$(this).removeClass("card-flipped");
}