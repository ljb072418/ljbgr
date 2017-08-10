$(document).ready(function(){
	var appendNumber = 5;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        centeredSlides: false,
        paginationClickable: false,
        spaceBetween: 30,
    })
    
    //点击小圆点删除
    $('.swiper-slide > span >div').click(function(){
    	$(this).parent().parent().css('display','none')
    })
    
    
    
//  获取焦点
	$('.yzf-form input').focus(function(value){
//		console.log(1)
		$(this).attr('value','');
	})
		$('.yzf-form input').keyup(function(){
			let value2=$(this).val();
			console.log(value2)
			if(value2=="经典"){
				$('.yzf-youxuan').css('display','block');
				$('.yzf-sorry').css('display','none');
			}
			if(value2!=="经典"){
				$('.yzf-sorry').css('display','block');
//				$('.yzf-youxuan').css('display','block');
			}
	})
	$('.gjr_voice').on('touchstart',function(){
		$('body,html').addClass('hidden')
		$('.gjr_alert').show();
		
	})
	$('.gjr_alert>a').on('touchstart',function(){
		$('.gjr_alert').hide();
		$('body,html').removeClass('hidden')
		
	})
})