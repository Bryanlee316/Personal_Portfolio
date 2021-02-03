/*
* ----------------------------------------------------------------------------------------
Author       : PyxelStudio
Template Name: Atlas - Personal Portfolio Template
Version      : 1.0

NOTE: This is the custom jQuery file for the template

* ----------------------------------------------------------------------------------------
*/


(function ($) {
	"use strict";

	var $window = $(window),
	        $body = $('body');


	/*=============================
	        Menu - Toggle button
	==============================*/

	$(".toggle-btn").on("click", function () {
	    $(this).toggleClass("active");
	    $(".main-menu").toggleClass("active");
	});


	/*=============================
	        Sticky header
	==============================*/

	$window.on('scroll', function() {
    	if ($(".navbar").offset().top > 100) {
    	    $(".navbar-fixed-top").addClass("top-nav-collapse");
    	} else {
    	    $(".navbar-fixed-top").removeClass("top-nav-collapse");
    	}
	});


	/*=============================
            Smoothscroll js
    ==============================*/

    $(function() {
		$('.custom-navbar .nav-menu a, a.scroll-btn, .scroll-down').on('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
			    scrollTop: $($anchor.attr('href')).offset().top - 0
			}, 1000);
			event.preventDefault();
		});
    });  

	
	/*=========================================
	        Parallax Js
	=======================================*/

	var parallaxeffect = $(window);
	parallaxeffect.stellar({
	    responsive: true,
	    positionProperty: 'position',
	    horizontalScrolling: false
	});


	/*=========================================
	        jQuery mixItUp
	=======================================*/

	$('#portfolio').mixItUp();


	/*=============================
            Counter up js
    ==============================*/

    $('.count-num').counterUp({
    	delay: 10,
		time: 1000
    });


	/*==================================
            Magnific popup
    =================================*/

	$('.image-popup').magnificPopup({
	  type: 'image',
	  removalDelay: 500, //delay removal by X to allow out-animation
	  callbacks: {
	    beforeOpen: function() {
	      // just a hack that adds mfp-anim class to markup 
	       this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
	       // this.st.mainClass = this.st.el.attr('data-effect');
	       this.st.mainClass = 'mfp-zoom-in';

	    }
	  },
	  closeOnContentClick: true,
	  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	});


	/*=============================
	        Owl Carousel
	==============================*/

  	$(".blog-list").owlCarousel({
  	    items: 3,
  	    autoPlay: true,
  	    navigation: false,
  	    itemsDesktop: [1199, 3],
  	    itemsDesktopSmall: [980, 1],
  	    itemsTablet: [768, 1],
  	    itemsTabletSmall: false,
  	    itemsMobile: [479, 1],
  	    pagination: true,
  	    autoHeight: true,
  	});


	/*=============================
            WOW js
    ==============================*/

	var wow = new WOW(
	  {
	    offset: 100,          // distance to the element when triggering the animation (default is 0)
	    //mobile: false,       // trigger animations on mobile devices (default is true)
	  }
	).init();


	/*=============================
            scrolspy js
    ==============================*/

	$('body').scrollspy({
	    target: '.main-menu',
	    offset: 195
	});
	

	/*=============================
            Contact Form
    ==============================*/

    // init the validator
	$('#contact-form').validator();

	// when form is submitted
	$('#contact-form').on('submit',function(e){
    	// if the validator does not prevent form submit
    	if (!e.isDefaultPrevented()) {

    		var $action = $(this).prop('action');
    		var $data = $(this).serialize();
    		var $this = $(this);

    		$.post( $action, $data, function( data ) {

    		    if( data.response=='error' ){

    		        $this.before( '<div class="alert alert-warning">'+data.message+'</div>' );
    		    }

    		    if( data.response=='success' ){

    		        $this.before( '<div class="alert alert-success">'+data.message+'</div>' );
    		        // empty the form
    		        $this[0].reset();
    		    }

    		}, "json");
    		return false;
    	}
    });


	/*=============================
	        Preloader
	==============================*/

	$(function() {
        $window.on("load", function () {
        	$('.spinner').fadeOut(); 
        	$('.preloader').delay(350).fadeOut(500);
        });
  	});

})(jQuery);