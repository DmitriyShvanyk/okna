;(function($){
	
	"use strict";
	
		
	// navbar menu	
	if($('.navbar').length){
		var navbarSticky = function(){		
			var stickyTop = $('.navbar').offset().top;
			$(window).scroll(function() {    
				var scroll = $(window).scrollTop();
				
				if (scroll >= stickyTop) {
					$("body").addClass("fixed");
					} else {
					$("body").removeClass("fixed");
				}
			});
		}
		navbarSticky();
	};	
	
	$('#navbarMega .navbar-nav a').on('click', function(){ 
		if($('.navbar-toggle').css('display') !='none'){
			$(".navbar-toggle").trigger( "click" );
		}
	});
	
			
	
	// carousel-product
	if($(".owl-carousel-product").length){			
		$('.owl-carousel-product').owlCarousel({
			loop:true,
			margin: 0,
			nav: false,
			dots: true,
			touchDrag: false,
			mouseDrag: false,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});
		
		
	};	
	
	
	// carousel-images
	if($(".carousel-images").length){			
		$('.carousel-images').owlCarousel({
			loop:true,
			margin: 0,
			nav: true,
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
			dots: true,	
			lazyLoad:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});				
	};
	
	
	// carousel-production
	if($(".carousel-production").length){			
		
		var carouselImg = $('.carousel-production');
		carouselImg.each(function(){
			$(this).owlCarousel({
				loop:true,
				margin: 4,
				nav: true,
				navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
				dots: true,	
				lazyLoad:true,
				responsive:{
					0:{
						items:1,
						stagePadding: 0
					},
					400:{
						items:1,
						stagePadding: 0
					},
					576:{
						items:3,
						stagePadding: 0
					},
					1000:{
						items:2,
						stagePadding: 100
					},
					1300:{
						items:3,
						stagePadding: 150
					},
					1500:{
						items:3,
						stagePadding: 300
					},
					1920:{
						items:3,
						stagePadding: 380
					}
					
				}
			});			
		});
		
	};
	
	// owl-dot add attr aria-label
	if($(".owl-carousel").length){
		$('.owl-carousel').each(function() {
			$(this).find('.owl-dot').each(function(index) {
				$(this).attr('aria-label', 'Dot');
			});
			$(this).find('.owl-prev').each(function(index) {
				$(this).attr('aria-label', 'Prev');
			});
			$(this).find('.owl-next').each(function(index) {
				$(this).attr('aria-label', 'Next');
			});
		});
	}
	
		
	// scroll anchor
	$('a.page-scroll').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 52
				}, 600);
				return false;
			}
		}
	});
	
	
	// title product - add hidden field
	$('a[data-src="#modalProduct"]').on('click', function() {
		var hiddenFieldForm = $(this).parents('.product').find('.product-content-title').text();
		$("#nameProduct").val(hiddenFieldForm);
	});
	
	
	// lazy load
	var bLazy = new Blazy({
		// Options
		offset: 100
	});		
		
	
})(window.jQuery);									