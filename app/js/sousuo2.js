$(document).ready(function(){
//	console.log($('.yzf-form'))
	$('.yzf-form input').focus(function(value){
//		console.log(1)
		$(this).attr('value','');
	})
	
	//链接到经典页面
	$('.yzf-list')
	$('.gjr_voice').on('touchstart',function(){
		$('body,html').addClass('hidden')
		$('.gjr_alert').show();
		
	})
	$('.gjr_alert>a').on('touchstart',function(){
		$('.gjr_alert').hide();
		$('body,html').removeClass('hidden')
		
	})
	
})
