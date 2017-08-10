$(document).ready(function(){
	$('.gjr_shead').children().each(function(){
		$(this).on('touchstart',function(){
			$('.gjr_shead').find('span').removeClass('gjr_first');
			$(this).addClass('gjr_one').siblings($(this)).removeClass("gjr_one");
			$(this).find('span').addClass('gjr_first');
		})
	})
	$('.gjr_share>img:first').on('touchstart',function(){
		$('body,html').addClass('hidden');
		$('.gjr_alert').show();
	})
	$('.gjr_circle').on('touchstart',function(){
		$('body,html').removeClass('hidden');
		$('.gjr_alert').hide();
	})
//	$('.gjr_gg').on('touchstart',function(){
//	window.location.href='gjr_more.html';
//	})
})
