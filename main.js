//ヘッダーメニュー装飾
$(function(){

	// ヘッダーメニュー選択色づけ
	$('.header-menu-list li a').each(function(){
		var $href = $(this).attr('href')
		if(location.href.match($href)){
			$(this).addClass('active');
		}else{
			$(this).removeClass('active');
		}
	$('.header-menu-list li:has(a.active)').addClass('parent');

	});
	//メニューオープン
	$('#icons').click(function(){
		$('header').toggleClass('menu-open');
		$('html').toggleClass('scroll-prevent');
	});

	//スクロールでメニュー色を緑にする

	$(window).on('scroll', function(){

		var airbnbIcon = $('#icons .fa-airbnb');
		var angleIcon = $('.fa-angle-down')
		//アイコンの色を変化させるポイント
		var iconChaPos = $('#checkform p').offset().top;
		//現在の位置を取得
		var scrollPos = $(window).scrollTop();

		if(scrollPos > iconChaPos){
			airbnbIcon.addClass('changeColor');
			angleIcon.addClass('changeColor');
		}else{
			airbnbIcon.removeClass('changeColor');
			angleIcon.removeClass('changeColor');
		}

	});
});
