$(function(){
	$('.main-nav-list-item--first').hover(function() {
		$('.sub-nav-list').stop().slideDown();
	}, function() {
		$('.sub-nav-list').stop().slideUp();
	});
	$('.main-nav-list-item').eq(2).hover(function() {
		$(this).css('backgroundColor', '#4b4b4b');
		$('.sub-nav-list2').css('display','block')
	}, function() {
		$('.sub-nav-list2').css('display','none');
		$(this).css('backgroundColor', 'transparent');
	});
/*	新品专区列表*/
	$('.brand-list-item').click(function(){
		var i = $(this).index()*142;
		var j = $(this).index()*996;
		$('.hover-box').css('marginLeft',i+'px');
		$('.brand-intro-list').stop().animate({'marginLeft': -j+'px'},1000);
	})
/*精品推荐滑动门*/
	$('.pro-recom-tab-btns li').click(function(){
		$('.pro-recom-tab-list').css('display', 'none');
		$('.pro-recom-tab-list').eq($(this).index()).css('display', 'block');
		$('.pro-recom-tab-btns li').removeClass('current');
		$(this).addClass('current');
	})
})