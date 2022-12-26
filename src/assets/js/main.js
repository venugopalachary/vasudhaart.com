/*********************************************************************************

	Version: 1.4

    Note: This is scripts js. All custom scripts here.

**********************************************************************************/

/*===============================================================================

    [ INDEX ]
	|
    |___ Affix Navbar fixed on scroll
    |___ loadMoreResults
    |___ Touch Swipe mobile menu
    |___ Loading overlay
    |___ Carousel Slider filter
	|___ Search panel
	|___ AOS Animate
	|___ Swipe Carousel slider
	|___ Datepicker
	|___ Fancybox
	|___ ScrollUp
	|___ Slick slider
	|___ Init Yandex Map
	|___
    |
	[END INDEX ]

================================================================================*/


"use strict";

$(document).ready(function() {

    //======= START Affix Navbar fixed on scroll ========

    $(window).on('scroll', function (event) {
        var scrollValue = $(window).scrollTop();
        if (scrollValue > 85) {
            $('.navbar-container').addClass('affix');
        } else{
            $('.navbar-container').removeClass('affix');
        }
    });

    //======= END Affix Navbar fixed on scroll ========

    //======= START jQuery loadMoreResults ========

    $(".btn-load-more").click(function(){
        $(".load-dots").addClass('visible'); 
        $(".btn-load-more").hide();   
        setTimeout(function(){
            $("#loadMore").show().css("display","flex");
            $(".load-dots").removeClass('visible');     
        }, 5000);
    });
    
    //======= END jQuery loadMoreResults ========


    //======= START Touch Swipe mobile menu ========

    //open left menu clicking the left menu icon
    $('.left_menu_icon').on('click', function(event){
        event.preventDefault();
        toggleLeftNav(true);
        $("body").css({'overflow':'hidden'});
    });
    
    //open right menu clicking the right menu icon
    $('.right_menu_icon').on('click', function(event){
        event.preventDefault();
        toggleRightNav(true);
        $("body").css({'overflow':'hidden'});
    });
    
    $('.cd-close-nav, .cd-overlay').on('click', function(event){
        event.preventDefault();
        toggleLeftNav(false);
        toggleRightNav(false);
        $("body").css({'overflow':'auto'});
    });
    //select a new section
    $('.cd-nav li').on('click', function(){

    });

    function toggleLeftNav(bool) {
        $('.left_menu, .cd-overlay').toggleClass('is-visible', bool);
        $('main').toggleClass('scale-down', bool);
    }

    function toggleRightNav(bool) {
        $('.right_menu, .cd-overlay').toggleClass('is-visible', bool);
        $('main').toggleClass('scale-down', bool);
    }

    //======= END Touch Swipe mobile menu ========


    //======= START Loading overlay ========

    $(window).on('load', function () {
        $('.loading-overlay').fadeOut(100);
    });

    //======= END Loading overlay ========


    //======= START Carousel slider ========

    $('.carousel').carousel({
      arrows: true,
      interval: 5000,
    })

    //======= END Carousel slider ========


    //======= START Search panel ========

    // Hide search panel
    function hideNavbarSearch() {
        $('.top_addr').fadeIn();
        $('#navbar_search').fadeOut();
    }

    // Show search panel
    $(document).on('click', '#search', function () {
        $('.top_addr').fadeOut();
        $('#navbar_search').fadeIn();
        $('#navbar_search input').focus();
    });

    // Trigger hideNavbarSearch() when click close button on search panel
    $(document).on('click', '#search_close', function () {
        hideNavbarSearch();
        $('#navbar_search').find('.form-control').val('');
    })

    // Trigger hideNavbarSearch() when press ESC
    $( document ).on( 'keydown', function ( e ) {
        if ( e.keyCode === 27 ) { // ESC
            hideNavbarSearch()
        }
    });

    //======= END Search panel ========


    //======= START AOS Animate ========

    // Init AOS Animate On Scroll Library
    AOS.init({
        duration: 1200,
        startEvent: 'DOMContentLoaded',
        once: true,
    });

    //======= END AOS Animate ========


    //======= START Swipe Carousel slider ========

    // Add swipe mod to bootstrap carousel
    $(".carousel").swipe({

      swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

        if (direction === 'left') $(this).carousel('next');
        if (direction === 'right') $(this).carousel('prev');

      },
      allowPageScroll:"vertical"

    });

    //======= END Swipe Carousel slider ========

});


    //======= START Datepicker ========

    $(document).ready(function() {
        $('#reserv_date').datepicker();
    });

    $(document).ready(function() {
        $('#reserv_time').datetimepicker({
            format: 'LT'
        });
    });

    //======= END Datepicker ========


    //======= START Fancybox ========

    $('[data-fancybox]').fancybox({
        protect: true
    });

    jQuery(document).ready(function($) {
        $('.fancybox')
            .fancybox({                     
            beforeShow: function () {
                if (this.title) {
                    // New line
                    this.title += '<br />';
                }
            },
            afterShow: function () {
            },  
            helpers: {
                title: {
                    type: 'inside'
                }, //<-- add a comma to separate the following option
                buttons: {} //<-- add this for buttons
            },
            closeBtn: true, // you will use the buttons now
            arrows: true
        });  
    });   

    //======= END Fancybox ========


    //======= START ScrollUp ========

	$(document).on( 'scroll', function(){
		if ($(window).scrollTop() > 400) {
			$('.scroll-up').addClass('show');
		} else {
			$('.scroll-up').removeClass('show');
		}
	});

	$('.scroll-up').on('click', scrollToTop);
	 
	function scrollToTop() {
		var verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0,
		element = $('body'),
		offset = element.offset(),
		offsetTop = offset.top;
		$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
    }

    //======= END ScrollUp ========


    //======= START Slick slider ========

    $('#chef-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        infinite: false,
        draggable: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                 settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                 settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    //======= END Slick slider ========


    //======= START Init Yandex Map ========

    ymaps.ready(init);
    var myMap, 
        myPlacemark;

    var iconBase = 'src/assets/img/map-marker.png';
    
    function init(){ 
        myMap = new ymaps.Map("map", {
            center: [40.372488, 49.954121],
            zoom: 13,
    });
    
    myPlacemark = new ymaps.Placemark([40.372488, 49.954121], { 
        // hintContent: 'Moscow!', 
        // balloonContent: 'Capital of Russia'
    },{
        iconLayout: 'default#image',
        iconImageHref: 'src/assets/img/map-marker.png',
        iconImageSize: [26, 40],
    });
        
        myMap.geoObjects.add(myPlacemark);
        // myMap.controls.remove('zoomControl');
        myMap.controls.remove('rulerControl');
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.behaviors.disable('scrollZoom');
    }

    //======= END Init Yandex Map ========