$(function(){
//	$('input').focus(function(){
//		$('.hsf-first-shangpin').css("display","none");		
//		$('.hsf-two-youpin').css("display","block");
//	})
	
	
	
	  $.validator.setDefaults({
   debug: true
})
	  $('#hsf-first-myform').validate({
	  	   errorPlacement:function(error,element) {  
//	error.html(error.html()+"<br/>"); 
  	error.appendTo(".hsf-two-yanzheng p");
 },
	  })
	  	$("#hsf-first-username").rules('add',{
		required:true,
		minlength:4,
        maxlength:20,
		messages:{
			required:'请输入帐号！',
			minlength:'帐号不能小于{0}位！',
            maxlength:'帐号不能小于{0}位！'
		}
	});
	$("#hsf-first-password").rules('add',{
        required:true,
        minlength:6,
        maxlength:20,
        pass:true,
        messages:{
            required:'请输入6-20位密码，数字和字母！',
            minlength:'密码不能小于{0}位！',
            maxlength:'密码不能超过{0}位！',
            pass:'密码不能含数字和字母以外的符号！'
        }
    });
	
	  $.validator.addMethod('pass',function(value,element){
        var pass = /^[\w]+$/
        return this.optional(element)||(pass.test(value));
    });
	
	
	
	
	
	
	
	
})


