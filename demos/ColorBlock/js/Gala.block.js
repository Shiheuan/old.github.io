var Block = {};
Block.color = [
	"blockA",
	"blockB",
	"blockC",
	"blockD",
	"blockE",
	"blockF",
	"blockG",

];
Block.next = [];

$(function(){
	Block.color.sort(shuffle);
	for(var i=0;i<2;i++){
		$(".nextblock:first-child").clone().appendTo("#nav");
	}
	$("#nav").children().each(function(index){
		$(this).css({
			"left" : $(this).width() * (index % 3),
		});
		var pattern = Block.color.pop();
		Block.next[index] = pattern;
		$(this).find(".back").addClass(pattern);
		$(this).addClass("block-flipped");
		$(this).attr("data-pattern",pattern);
		//$(this).mouseover(selectCard);
	});	
});
$(function(){
	for(var i=0;i<80;i++){
		$(".block:first-child").clone().appendTo("#blocks");
	}
	$("#blocks").children().each(function(index){
		$(this).css({
			"left" : $(this).width() * (index % 9),
			"top"  : $(this).height() * Math.floor(index / 9)
		});
	});	
	$("#nav").click(blockUp);
	$("#nav").click(concel);
	//setTimeout(reblockNext,5000);
});

function shuffle() {
	return 0.5 - Math.random();
}  
//function concel() {             
//	$(this).find(".back").removeClass("block-flipped");
//}                                   


/*
 *function selectCard() {                
 *	$(this).addClass("block-flipped"); 
 *}
 
function reblockNext(){
	Block.color.sort(shuffle);
	$("#nav").children().each(function(index){
		$(this).css({
			"left" : $(this).width() * (index % 3),
		});
		var pattern = Block.color.pop();
		var oldPattern = Block.next[index];
		$(this).removeClass("block-flipped");
		$(this).find(".back").removeClass(oldPattern).addClass(pattern);
		$(this).find(".back").addClass(pattern);
		$(this).addClass("block-flipped");
		$(this).attr("data-pattern",pattern);
		Block.next[index] = pattern;
	});	
}
**************/
function blockUp(){                                
	var number = [
		Math.floor(Math.random() * 80),
		Math.floor(Math.random() * 80),
		Math.floor(Math.random() * 80),
		];
	$("#blocks").children().each(function(index){     
		
		for(var i=0;i<3;i++){
			if (index==number[i])                            
			{ 
				var pattern = Block.next.pop();
				$(this).find(".back").addClass(pattern);   
				$(this).addClass("block-flipped");        
			}   
		}
	});                                               
}                                                     
                                                       

