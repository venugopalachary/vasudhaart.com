/*-----------------------------------------------------------------------------------

    CUSTOM JS - FRONT-END SCRIPTS
 
-----------------------------------------------------------------------------------*/

(function ($) {

'use strict';

$(function() {  //same as $(document).ready(); (Document is ready when the only HTML DOM is loaded, NOT its content e.g Images, Videos etc)


/*-----------------------------------------------------------------------------------*/
/*  FOUNDATION FRAMEWORK
/*-----------------------------------------------------------------------------------*/

    $('code').each(function() {
        $(this).text($(this).html());
    });

	/*-----------------------------------------------------------------------------------*/
	/*  SMOOTH SCROLLING
	/*-----------------------------------------------------------------------------------*/

	var $root = $('html, body');

	$('a[href^="#"]').click(function() {
		var href = $.attr(this, 'href');

		$root.animate({
			scrollTop: $(href).offset().top
		}, 800, function () {
			window.location.hash = href;
		});

		return false;
	});

	function headerStuff() {
		if ($(window).scrollTop() > 500) {
			$('#sidebar').addClass('fixed');
		} else {
			$('#sidebar').removeClass('fixed');
		}
	};

	$(document).ready(function () {
		headerStuff();
		$(window).scroll(function () {
			headerStuff();
		});
	});


});

    
})(jQuery);