$(function(){
	$("#right").click(goToES);
	$("#left").click(goToGGS);
});

function goToES() {
	$("#ES").css("visibility", "visible");
	$("#GGS").css("visibility", "hidden");
	$("#left").css("visibility", "visible");
	$("#right").css("visibility", "hidden");
}

function goToGGS() {
	$("#ES").css("visibility", "hidden");
	$("#GGS").css("visibility", "visible");
	$("#left").css("visibility", "hidden");
	$("#right").css("visibility", "visible");
}

