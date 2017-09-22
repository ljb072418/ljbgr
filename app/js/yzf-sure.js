$(document).ready(function(){
	
//	颜色变化
	$('.gjr_color > span:first-child ~ span').each(function(index,value){
//		console.log($(this))
		$(this).on('touchstart',function(){
//			console.log($(this))
			$(this).addClass('yzf-active').siblings().removeClass('yzf-active')
			$('.gjr_img img').removeClass('yzf-active2').eq($(this).index()-1).addClass('yzf-active2')
		})
	})
	$('.gjr_color2 > span:first-child ~ span').each(function(index,value){
//		console.log($(this))
		$(this).on('touchstart',function(){
//			console.log($(this))
			$(this).addClass('yzf-active3').siblings().removeClass('yzf-active3')
			$('.gjr_img2 img').removeClass('yzf-active2').eq($(this).index()-1).addClass('yzf-active2')
		})
	})
	$('.gjr_color3 > span:first-child ~ span').each(function(index,value){
//		console.log($(this))
		$(this).on('touchstart',function(){
//			console.log($(this))
			$(this).addClass('yzf-active').siblings().removeClass('yzf-active')
			$('.gjr_img3 img').removeClass('yzf-active2').eq($(this).index()-1).addClass('yzf-active2')
		})
	})
	$('.gjr_color22 > span:first-child ~ span').each(function(index,value){
		console.log($(this))
		$(this).on('touchstart',function(){
//			console.log($(this))
			$(this).addClass('yzf-active3').siblings().removeClass('yzf-active3')
			$('.gjr_img3 img').removeClass('yzf-active2').eq($(this).index()-1).addClass('yzf-active2')
		})
	})
	
	
	//
		$('.shuliang').on('touchstart',function(){
		var value=$('.shuliang span').text();
//		console.log(value)
		$('.shuliang span').html(parseInt(value)+1);
	})
	$('.shuliang2').on('touchstart',function(){
		var value=$('.shuliang2 span').text();
//		console.log(value)
		$('.shuliang2 span').html(parseInt(value)+1);
	})
	$('.shuliang3').on('touchstart',function(){
		var value=$('.shuliang3 span').text();
//		console.log(value)
		$('.shuliang3 span').html(parseInt(value)+1);
	})
	
	
	
	$('.gjr_circle > span').each(function(index,value){
		console.log($('.gjr_circle > span'));
		$(this).on('touchstart',function(){
			$(this).toggleClass('first');
		})
	})
	
	
	$('.gjr_color3 span:nth-child(2)').on('touchstart',function(){
		$('.gjr_color3').toggleClass('active5');
		$('.gjr_color3 > span:nth-child(2) ~ span').toggleClass('active6');
	})
	$('.gjr_color22 span:nth-child(2)').on('touchstart',function(){
		$('.gjr_color22').toggleClass('active5');
		$('.gjr_color22 > span:nth-child(2) ~ span').toggleClass('active7');
	})
})