define(function(require,exports,module){
	var U = require('util');
	var header = require('header');
	header.logo('../index.html');
	header.bgFadeIn();
	//form validation
	$('.contact-form .send').click(function(){
		var reg_email = /^\w+@\w{2,8}\.\w+$/,
			reg_name = /(\w+)|([\u4e00-\u9fa5]+)/,
			reg_message = /(\w+)|([\u4e00-\u9fa5]+)/;
		var reg_arr = [reg_name,reg_email,reg_message];
		var access = true;
		$('.contact-form .text_input').each(function(n){
			var value = $(this).val();
			if(!reg_arr[n].test(value)){
				$(this).css({'border':'1px solid #B22512','background':'rgba(178,37,18,.4)'});
				access = false;
			}else{
				$(this).css({'border':'none','background':'rgba(255,255,255,1)'});
			}
		});
		if(access){
			sender_name = $('.contact-form .name .text_input').val();
			sender_time = U.getTime();
			$('.contact-form .text_input').css('border','green');
			$('.contact-form .text_input').val('');
			$('.cheers').html(cheers_html(sender_name,sender_time)).fadeIn();
			$('.contact').fadeOut();
			
		}
		return false;
	});
	function cheers_html(sender_name,sender_time){
		var cheers_html = '\
			<h2>谢谢</h2>\
			<p class="thank-you">谢谢你&nbsp;<span class="sender_name">'+sender_name+'</span></p>\
			<p>我会尽快答复你的留言</p>\
			<p>留言时间：</p>\
			<p class="send_time">'+sender_time+'</p>\
		';
		return cheers_html;
	}
	$('.cheers').css('height',$(window).height());
});