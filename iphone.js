
$(document).ready(function(){
	let hh=$('.last-three div.ss')
	let ss=$('.last-three ul')
	hh.click(function(){
		$(this).next().slideToggle();
	});
});

$(function(){
	let boxs = $('.img-box');
	// console.log($(boxs[1]).children().eq(3));
	let aa = boxs.children().eq(3).children();
	// console.log(aa);
	
	let ls = $('.heng');
	let lis=$(ls[0]).children();
	let liss=$(ls[0]).children().children();
	let now=0;
	let next=0;
	liss.eq(now).addClass('active');
	
	liss.on("animationend.end",function(){
		next=now+1;
		if(next>=liss.length){
			next=0;
		}
		aa.removeClass();
		aa.eq(next).addClass('one  zIndex');
		aa.eq(now).addClass('three');
		liss.removeClass().eq(next).addClass('active');
		now=next;
	})

	lis.click(function () {
		liss.off('animationend.end');
	})

	$(".left").click(function(){
		liss.off('animationend.end');
	});

	$(".right").click(function(){
		liss.off('animationend.end');
	})

// 下拉
let dd = $('nav .ul  .aaa')
dd.click(function(){
	$(".xiala").slideToggle(1000,function(){
		$('body,html').toggleClass("hidden");

	}).children().toggleClass("active");


})

















})
	
