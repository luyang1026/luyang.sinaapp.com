define(function(require,exports,module){
	var U = require('util');
	return {
		//spin-logo
		logo:function(href){
			$('.spin-logo').click(function(){
				if(href)window.location.href = href;
			});
			$('.spin-logo').each(function(index){
				this.style.webkitTransform = 'translateZ('+(-1+index)+'px)';
			});
			var n = 0;
			var timer;
			function clockwise(){
				n++;
				if(n>87&&n<93||n>267&&n<273)n+=6;
				$('.spin-stage').css('webkitTransform','rotateY:('+n%360+'px)');
				$('.spin-stage').get(0).style.webkitTransform = 'rotateY('+n+'deg)';
				if(n>=360)n=0;
			}
			clearInterval(timer);
			timer = setInterval(clockwise,20);
			$('.spin-stage').hover(function(){
				clearInterval(timer);
			}, function() {
				timer = setInterval(clockwise,20);
			});;
		},
		//sub-menu-item slide in
		subMenu:function(n){
				$('.nav-sub-list').eq(n).show();
				var aLi = $('.nav-sub-list').eq(n).find('.nav-sub-list-item');
				var n = 0;
				timer = setInterval(function(){
					U.move(aLi[n],{'marginLeft':0},{'easing':'ease-out','duration':200});
					n++;
					if(n==aLi.length)clearInterval(timer);
				},100);
			},
		//bg-fadein images
		bgFadeIn:function (){
			var n = 0;
			var length = $('.bg-fadein-item').length;
			function next(){
				n++;
				$('.bg-fadein-item').fadeOut(2000);
				$('.bg-fadein-item').eq(n%length).fadeIn(2000);
			}
			setInterval(next,5000)
		},
		//header slidetoLeft
		headerToLeft:function(){
			var header = $('#header').get(0);
			var content = $('#content').get(0);
			function frameShow(){
				U.move(header,{'left':-180});
				U.move(content,{'marginLeft':60})
			}
			function headerShow(){
				U.move(header,{left:0});
				U.move(content,{'marginLeft':260})
			}
			$('#header').bind('mouseover',headerShow);
			$('#show-case-iframe').bind('mouseover',frameShow);
		},
		//toTop hide/show
		toTop:function(){
			setTimeout(function(){
				var winHeight = $(window).height();
				var documentHeight = $(document).outerHeight();
				var sTop = ($(window).scrollTop());
				if(winHeight==documentHeight){
					$('.toTop').stop().animate({'bottom':-67});
					return;
				}
				if(sTop+winHeight>=documentHeight-20){
					$('.toTop').stop().animate({'bottom':0});
				}else{
					$('.toTop').stop().animate({'bottom':-67});
				}
			},200)
		}
	}
});

			