window.onload=function(){
	var ljb_box=document.querySelectorAll('.ljb_banner')
	var ljb_li=document.querySelectorAll('.ljb_banner ul')
	var ljb_li_img=document.querySelectorAll('.ljb_banner li img')
	console.log(ljb_li_img)
	var n=0;
	var t =setInterval(move,2500)
	function move(){
		n++;
		if (n >= ljb_li_img.length) {
			n = 0;
		}
		for (i = 0; i < ljb_li_img.length; i++) {
			ljb_li_img[i].style.opacity = 0;
		}
		ljb_li_img[n].style.opacity = 1;
	}
	// ljb_li_img.touchstart=function(){
	// 	clearInterval(t)
	// }
	// // ljb_box.touchstart=function(){
	// // 	t=setInterval(move,2500)
	// // }



}