define(function(require,exports,module){
	var U = require('util');
	var header = require('header');
	header.logo('../index.html');
	header.subMenu(0);
	//nav-buttons
	var toRightPlace = null;
	;(function(){
		var all = $('.nav-sub-list-item').eq(0);
		var webpage = $('.nav-sub-list-item').eq(1);
		var effects = $('.nav-sub-list-item').eq(2);
		var interact = $('.nav-sub-list-item').eq(3);
		var aLi = $('#content .show-case-item');
		var aLiHeight = aLi.eq(0).height() + parseInt(aLi.eq(0).css('marginBottom'));
		$('.show-case').css('height',(aLiHeight*aLi.length)/2+40);
		toRightPlace = function (sName){
			var n = 0;
			var UlHeight = 0;
			var aLiShown = aLi.length;
			aLi.each(function() {
				if($(this).hasClass(sName)){
					var _this = this;
					U.move(_this,{'width':460,'height':300,'marginTop':0,'marginLeft':0,'left':aPos[n].left,'top':aPos[n].top},{'duration':60});
					n++;
				}else{
					U.move(this,{'width':0,'height':0,'marginTop':150,'marginLeft':230},{'duration':60});
					aLiShown--;	
				}
			});
			UlHeight = (aLiHeight*aLiShown)/2+40;
			U.move($('.show-case').get(0),{'height':UlHeight},{'duration':100});
		}
		$('.nav-sub-list-item a').click(function(){
			$('.nav-sub-list-item a').removeClass('active');
			$(this).addClass('active');
		});
		$('.nav-sub-list .nav-sub-list-item a').live('click',function(){
			$('#show-case-iframe').fadeOut(1000).css({'width':0,'height':0});
			$('.show-case').fadeIn(2000);
			header.toTop();
		});
		all.click(function(){
			toRightPlace('show-case-item');
		});
		webpage.click(function(){
			toRightPlace('webpage');
		});
		effects.click(function(){
			toRightPlace('effects');
		});
		interact.click(function(){
			toRightPlace('interact');
		});
	})();
	//content
	var aPos = [];
	;(function(){
			var aLi = $('#content .show-case-item');
			aLi.each(function(){
				aPos.push({'left':$(this).position().left,'top':$(this).position().top})
			});
			aLi.each(function(i){
				$(this).css(aPos[i]);
				$(this).css({'position':'absolute'});
				var introBanner = $(this).find('.intro-banner').get(0);
				$(this).hover(function() {
					U.move(introBanner,{left:0},{duration:100});
				}, function() {
					U.move(introBanner,{left:460},{duration:100});
				});
			});
	})();
	//current on refresh
	;(function(){
		$(function(){
			var aLi = $('#content .show-case-item');
			var hash = window.location.hash;
			if(hash!='#all'&&hash)toRightPlace(hash.substring(1));
			switch(hash.substring(1)){
				case 'webpage':
					$('.nav-sub-list-item a').removeClass('active');
					$('.nav-sub-list-item a').eq(1).addClass('active');
					break;
				case 'effects':
					$('.nav-sub-list-item a').removeClass('active');
					$('.nav-sub-list-item a').eq(2).addClass('active');
					break;
				case 'plugin':
					$('.nav-sub-list-item a').removeClass('active');
					$('.nav-sub-list-item a').eq(3).addClass('active');
					break;
				case 'interact':
					$('.nav-sub-list-item a').removeClass('active');
					$('.nav-sub-list-item a').eq(4).addClass('active');
					break;
			}
		})
	})();
	//show-case-item 
	;(function(){
		$('.show-case-item a').click(function(){
			var _this = $(this);
			$('.show-case').fadeOut(800);
			var iframe = $('#show-case-iframe').attr('src',_this.attr('href')).css('display','block');
			iframe.load(function(){
				var h = $(this).contents().find('body').height();
				var w = $(this).contents().find('.wrapper').width();
				$(this).fadeIn(2000);
				header.headerToLeft();
				$(this).css({'width':w+80,'height':h});
			});
			return false;
		});
	})();
	//toTop
	;(function(){
		$(window).scroll(header.toTop);
		$('.toTop').click(function(){
			$('body').stop().animate({scrollTop:0},500);
		});
	})();
});