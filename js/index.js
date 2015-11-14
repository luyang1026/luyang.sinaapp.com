define(function(require,exports,module){
	var U = require('util');
	var header = require('header');
	header.logo();;
	header.bgFadeIn();
	var loader = $('.loader').get(0);
	var loaderIcon = $('.loader .loader-icon').get(0);
	var loaded = getCookie('loaded');
	if(loaded){$('.loader').hide()}else{setTimeout(loaderGo,3000);}
	function loaderGo(){
		U.move(loaderIcon,{'top':350},{'easing':'ease-out','complete':function(){
			U.move(loaderIcon,{'top':-400},{'easing':'ease-in','duration':600,'complete':function(){
				$('.loader').fadeOut(1000);
			}})
		}});
		document.cookie = 'loaded = true';
	}
	function getCookie(name){
		var arr = document.cookie.split('; ');
		for (var i = 0; i < arr.length; i++) {
			var tmp = arr[i].split('=');
			if(tmp[0]==name)return tmp[1];
		};
	}
	// cover
	/*;(function(){
		function createGrids(){
			var zIndex = 0;
			function fall(){
				var _this = this;
				this.css('zIndex',zIndex++);
				var speedY = 0;
				var cur = _this.position().top;
				var maxT = $(window).height()-_this.outerHeight();
				this.timer = setInterval(function(){
					speedY += 5;
					cur += speedY;
					if(cur>=maxT){
						speedY *= -0.8;
						_this.css('top',maxT);
					}
					if(Math.abs(speedY)<1) speedY=0;
					if(_this.css('top')==maxT&&speedY==0)clearInterval(_this.timer);
					_this.css('top',cur+'px');
				},30);
			}
			var R = 10;
			var C = 16;
			var rgb;
			for (var i = 0; i < R; i++) {
				for (var j = 0; j < C; j++) {
					var grid = $('<div></div>');
					var w = $(window).width()/C;
					var h = $(window).height()/R;
					grid.css({'width':w,'height':h,'left':j*w,'top':i*h});
					grid.css({'position':'absolute','zIndex':50,'background':'url(img/cover1280.png) no-repeat -'+j*w+'px -'+i*h+'px'});
					grid.addClass('grid');
					grid.appendTo('#bg-grid');
					grid.fall = fall;
					grid.r = i;
					grid.c = j;
					(function(grid){
						grid.click(function(){
							grid.fall();
						});
					})(grid);
				};
			};
		}
		createGrids();
	})();*/
});
