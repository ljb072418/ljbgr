window.onload=function(){
	function lefthua(box,box1,img){
		var box=document.querySelector(box);
		var box1=document.querySelector(box1);
		var img=document.querySelector(img);
		box.addEventListener('touchstart',function(e){
			e.preventDefault();
			box.addEventListener('touchmove',function(){
				if(box.offsetLeft==0){
					animate(box,{left:-50},200);
				}else if(box.offsetLeft==-50){
					animate(box,{left:0},200);
				}	
			})
		})
		img.addEventListener('touchstart',function(e){
			e.preventDefault();
			box1.style.display='none';
		})
	}	
	lefthua('.zxq-ysjf13','.zxq-bbox','.zxq-bbox .zxq-gb');
	lefthua('.zxq-ysjf','.zxq-bbox2','.zxq-bbox2 .zxq-gb2');
	lefthua('.zxq-ysjf11','.zxq-bbox1','.zxq-bbox1 .zxq-gb1');
	lefthua('.zxq-ysjf12','.zxq-bbox3','.zxq-bbox3 .zxq-gb3');
}

