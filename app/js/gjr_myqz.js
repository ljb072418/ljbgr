$(function(){
	$('.gjr_voice').on('touchstart',function(){
		$('body,html').addClass('hidden')
		$('.gjr_alert').show();
		
	})
	$('.gjr_alert>a').on('touchstart',function(){
		$('.gjr_alert').hide();
		$('body,html').removeClass('hidden')
		
	})
	$('.zaixian').on('touchstart',function(){
		$(this).parent().parent().hide();
		$(this).parent().parent().parent().find('#gjr_active').show();
	})
//	$('#gjr a').on('touchstart',function(){
//		
//		$(this).parent().parent().hide();
//		$(this).parent().parent().parent().find('#gjr_active').show();
//	})
	$('.back').on('touchstart',function(){
		$(this).parent().parent().hide();
		$(this).parent().parent().parent().find('#gjr').show();
	})
	$('.meile').on('touchstart',function(){
		$(this).parent().parent().parent().remove()
//		$('#gjr').hide();
		
	})
	$('body').on('touchstart',function(e){
		if(e.target!=$('.gjr_input').get(0)){
			$('.gjr_input').blur()
		}
	})
})
