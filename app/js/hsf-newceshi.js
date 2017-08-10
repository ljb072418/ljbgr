$(function(){
	//$(".registerform").Validform();  //就这一行代码！;
		
	$(".registerform").Validform({
		tiptype:function(msg,o,cssctl){
			var objtip=$("#msgdemo2");
			cssctl(objtip,o.type);
			objtip.text(msg);
		},
		ajaxPost:true
	});
})