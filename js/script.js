$(document).ready(function(){
	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();

		if (wScroll > ($('.hobby-interests-row').offset().top - $(window).height() / 1.2)){
			// i starts with 0
			$('.hobby-interests-row figure').each(function(i){
				setTimeout(function(){
					// eq means index
					$('.hobby-interests-row figure').eq(i).addClass('is-showing');
				}, 150 * (i+1));
			});
		}		
	});
});