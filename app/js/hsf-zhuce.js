$(function(){
	$('input').focus(function(){
		$('.hsf-two-youpin').css("display","none");
		$('.hsf-two-xinxi').css("margin-top","0.3rem");
		$('.hsf-two-continue').css("display","none");
		$('.hsf-two-next').css("display","block");
	})
	$('.hsf-two-next').on("click",function(){
		$('.hsf-two-xinxi').removeClass("one");
		$('.hsf-two-xinxi').addClass("two");
		$('.hsf-two-biaodan').css("display","none");
		$('.hsf-two-images').css("display","block");
		$('.hsf-two-next').css("display","none");
		$('.hsf-two-continues').css("display","block");	
	})
	$('.hsf-two-continues').on("click",function(){
         $('.hsf-two-bianhuan').css("display","none");
		$('.hsf-two-bianhuan2').css("display","block");
	})
	$('.zxq-wczc').on("click",function(){
		location.assign("hsf-denglu.html")
	})
		$('.hsf-two-continue').on("click",function(){
		alert("请填写内容！")
	})
	
	
	 
	
	
	
	
	
})
