$(document).ready(function(){
	$('ul').children().each(function(){
		$(this).on('touchstart',function(){
			$('ul').find('input').removeClass('active');
			$(this).addClass('active').siblings($(this)).removeClass("active");
			$(this).find('input').addClass('active');
		})
	})
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
    });
})
