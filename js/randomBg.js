$(function(){
	switch (randomBg())
	{
	case 1: 
		$("body").css( {
						background: "url(../images/bg.jpg)",
						color: "#ccc"
					});
		break;
	case 2:
		$("body").css( {                               
						background: "url(../images/bg1.jpg)",
						color: "#fff"                    
					});                                
		break;
	case 3:
		$("body").css( {                                  
				 		background: "url(../images/bg2.jpg)",
				 		color: "#a0a0a0"                     
				 	});                                   
		break;
	case 4:
		$("body").css( {                                  
				 		background: "url(../images/bg3.jpg)",
				 		color: "#83ffa9"                     
				 	});                                   
		break;
	}
});

function randomBg() {
	return Math.floor(Math.random()* 4)+1;
}