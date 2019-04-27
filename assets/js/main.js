(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		
		
		$('.main-menu').slicknav();
		
		
	$(".author-slider-area").owlCarousel({
		items: 1,
		dots: true,
		nav: true,
		loop: true,
		autoplay: true,
		navText: ["<i class='fa fa-arrow-left' aria-hidden='true'></i>", "<i class='fa fa-arrow-right' aria-hidden='true'></i>"]
	});
		
		

		$('.view').magnificPopup({
		  type: 'image',
		   gallery:{
			enabled:true
		  }
		});
		
		
		
	$(".play-btn").magnificPopup({
		type: 'video',
	});
		
		
	
	
	$(".counter span").counterUp({
		delay: 10,
		time: 5000
		
	});
	
	
	$("#header-top-area").sticky({topSpacing:0});
	
	
	
	$(function() {
	 $('html').smoothScroll(1000);
	});
	
	
	
	    $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');
	
	
	
	
		// init Isotope
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item'
		  }
		})
		// filter items on button click
		$('.portfolio-menu').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
	
	
	
	
	

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	