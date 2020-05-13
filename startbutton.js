
// 「はじめるボタン」をページ途中から表示
$(function(){
	
	var startbutton = $('main');

	$(window).on('scroll' , function(){

		// 表示開始位置
		var targetPos = 550;
		//現在の位置を取得
		var scrollPos = $(window).scrollTop();
		//非表示にさせたい位置を取得
		var topOffset = $('#question-list-wrapper').offset().top;
		//fixedクラスがあるかフラグ
		var fixed_flg = startbutton.hasClass('fixed');


			// ページ上部での表示
			if(scrollPos > targetPos && fixed_flg == false){

				startbutton.addClass('fixed');
			}
			
			else if(scrollPos < targetPos && fixed_flg == true){

				startbutton.removeClass('fixed');
			}
			// ページ下部までスクロールさせたとき
			// if(scrollPos > topOffset){ 

	  //       	startbutton.removeClass('fixed');
	  //       }
	  //       else if(scrollPos < topOffset){

	  //       	startbutton.addClass('fixed');
	  //       }
	});
		

	
});