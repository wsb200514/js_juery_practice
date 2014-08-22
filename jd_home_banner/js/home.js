$(function(){
	$("img").css("display","none");
	$("img").eq(0).css("display","block");
	var i=1;
	// play next banner function
	function next(){
		if(i==$("img").length){
			i=0;
		}
		$("img").fadeOut();
		$("img").eq(i).fadeIn();
		$("span").css("background-color","#999999");
		$("span").eq(i).css("background-color","#E4393C");
		i++;
	};

	// open a setInterval
	timer=setInterval(next,1000);

	// mouseover control
	$("span").mouseover(function(){
		clearInterval(timer);
		i=$("span").index(this);
		$("img").css("display","none");
		$("img").eq(i).css("display","block");
		$("span").css("background-color","#999999");
		$("span").eq(i).css("background-color","#E4393C");
	});
	$("img").mouseover(function(){
		clearInterval(timer);
		i=$("img").index(this);
		$("img").css("display","none");
		$("img").eq(i).css("display","block");
		$("span").css("background-color","#999999");
		$("span").eq(i).css("background-color","#E4393C");
	});
	
	// mouseout control
	$("span,img").mouseout(function(){
		i++;
		timer=setInterval(next,1000);
	});
});