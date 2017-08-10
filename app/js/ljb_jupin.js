$(function(){
	$('.ljb_fenleitwo ul li a').click(function(){
		$('.ljb_fenleitwo ul li a').css({'color':"#6c6c6c","background":"#fff"});
		$(this).css({'color':"#fff","background":"#ccc"});

	})
	


	var ljb_jia=document.querySelector(".ljb_jiajian .ooo img");
	var ljb_zi=document.querySelector(".ljb_jiajian p");
	var ljb_jian=document.querySelector(".ljb_jiajian .ooc img");
	var aa=parseInt(ljb_zi.innerHTML)
	console.log(parseInt(aa))
	ljb_jia.onclick=function(){
		ljb_zi.innerHTML=++aa
	}
	ljb_jian.onclick=function(){
		if(aa<=1){
		ljb_zi.innerHTML=1
	}else{
		ljb_zi.innerHTML=aa--
		}
	}
	


})
	
		

































