/**
 * Created by hp1 on 2017/4/18.
 */
window.onload=function(){
        let plp=document.querySelectorAll('.ljb-qqq p')
 let blb=document.querySelectorAll('.olm')
 for(let i=0;i<plp.length;i++){
     plp[i].onmouseover=function(){
         for(let j=0;j<blb.length;j++){
             blb[j].style.display="none";
         }
         blb[i].style.display="block";
     }
 }
    function getFigure(str3, str4, str5) {
        let flag = true;
        let picture = document.querySelectorAll(str3);
        console.log(str3);
        let circles = document.querySelectorAll(str4);
        let div = document.querySelector(str5);
        let n = 0;
        let t = setInterval(move, 3000);//����move������ʹ��ʱ�亯���������Զ��仯��
        function move(way = "right") {//����move��Ĳ���Ĭ����right
            if (way == "right") {//���������Ĭ���������ԭ����������һ������n�Լ�
                n++;
                if (n >= picture.length) {//��ͼƬ�������һ��ʱ�����丳ֵΪ0����ͷ��ʼѭ��
                    n = 0;
                }
            }
            picture.forEach(function (value, index) {//ѭ��ͼƬ
                value.classList.remove("first-two")//�����к���first-one��first-one-one�Ƴ�
                circles[index].classList.remove("first-one")
            });
            picture[n].classList.add("first-two");//����ʱnֵ��������ͼƬ
            circles[n].classList.add("first-one");
        }
        div.onmouseover = function () {//�������ʱ��ֹͣ�ֲ�ͼѭ��
            clearInterval(t)
        }
        div.onmouseout = function () {
            t = setInterval(move, 3000);//���Ƴ���ʱ�򣬵���move��������������ѭ��
        }
        let m;
        circles.forEach(function (value, index) {//
            value.onmouseover = function () {
                clearTimeout(m)
                m = setTimeout(function () {
                    clearTimeout(m);
                    picture.forEach(function (value, index) {
                        value.classList.remove("first-two")
                        circles[index].classList.remove("first-one")
                    })
                    picture[index].classList.add("first-two");
                    value.classList.add("first-one");
                    n = index;
                }, 200)
            }
            value.onmouseout = function () {
                clearTimeout(m)
            }
        });
        picture.forEach(function (value) {
            value.addEventListener('transitionend', function () {
                flag = true;
            })
        });
    }
    getFigure('.tutu','.diandian .changtiao','.z-banner')
    getFigure('.tutu2','.diandian2 .changtiao2','.z-banner2')
}
//С��
$(function(){
    let body=$('body');
    let html=$('html');
    window.onresize=function() {
        let width=$(window).width();
        if(width<=1200){
            $('.z-nav-3').off();
            $('.z-nav-3').click(function(){
                body.toggleClass('buhuadong');
                html.toggleClass('buhuadong');
                $('body > ul').slideToggle(1000,function(){
                    $('body > ul').clearQueue();
                });
                $('body > ul > li').toggleClass('chuxian');
            })
        }else{
            body.attr({class:""});
            html.attr({class:""});
            $('body > ul').css('display','none')
        }
    }
    $(window).triggerHandler('resize');
});