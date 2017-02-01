$(document).ready(function(){
	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();

		// animation for hobbies & interests
		if (wScroll > ($('.hobby-interests-row').offset().top - $(window).height() / 1.2)){
			// i starts with 0
			$('.hobby-interests-row figure').each(function(i){
				setTimeout(function(){
					// eq means index
					$('.hobby-interests-row figure').eq(i).addClass('is-showing');
				}, 150 * (i+1));
			});
		}		

		// animation for resume
		if (wScroll > ($('.resume-container').offset().top - $(window).height() / 1.2)){
			// i starts with 0
			$('.resume-container figure').each(function(i){
				setTimeout(function(){
					// eq means index
					$('.resume-container figure').eq(i).addClass('is-showing');
				}, 200 * (i+1));
			});
		}		

		// animation for my services
		if (wScroll > ($('.my-services-container').offset().top - $(window).height() / 1.2)){
			// i starts with 0
			$('.my-services-container figure').each(function(i){
				setTimeout(function(){
					// eq means index
					$('.my-services-container figure').eq(i).addClass('is-showing');
				}, 150 * (i+1));
			});
		}

		// animation for skills
		if (wScroll > ($('.skills-container').offset().top - $(window).height())){
			// i starts with 0
			$('.skills-container .percentages-line').each(function(i){
				var percentages_number = $('.skills-container .percentages-line').eq(i).next().text();
				setTimeout(function(){
					if(!$('.skills-container .percentages-line').eq(i).hasClass('animation_complete')){
						$('.skills-container .percentages-line').eq(i).animate({
							'width': percentages_number
						}, 700).addClass('animation_complete');
					}
				}, 300 * (i+1));
			});
		}

		// animation for my works
		if (wScroll > ($('.my-works-row').offset().top - $(window).height() / 1.2)){
			// i starts with 0
			$('.my-works').each(function(i){
				setTimeout(function(){
					if (!$('.my-works').eq(i).hasClass('animation_complete')){
						$('.my-works').eq(i).fadeIn('slow');
					}
				}, 200 * (i+1));
			});
		}

	});
});