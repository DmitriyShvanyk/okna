;(function($){
	
	"use strict";
	
	jQuery.event.special.touchstart = {
		setup: function(_, ns, handle) {
			if (ns.includes("noPreventDefault")) {
				this.addEventListener("touchstart", handle, {
					passive: false
				});
			} else {
				this.addEventListener("touchstart", handle, {
					passive: true
				});
			}
		}
	};	
		
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
			
			var $navbarHeight = $("#navbarMega").height();
	
			$('a.page-scroll').bind('click', function(event) {
				event.preventDefault();
				
				var $navbarPosition = $($(this).attr('href')).offset().top;
				
				$('html, body').stop().animate({
					scrollTop: $navbarPosition - $navbarHeight
				}, 550);
			});
			
			var $scrollspy = $('body').scrollspy({
				target: '.navbar-fixed-top',
				offset: $navbarHeight + 2
			});			
			
			$(window).scroll(function() {
				$('.navbar-collapse.show').collapse('hide');
			});
		}		
		navbarSticky();
	};	
		
		
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
			navText: ['<i class="icon-i-chevron-left"></i>', '<i class="icon-i-chevron-right"></i>'],
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
				navText: ['<i class="icon-i-chevron-left"></i>', '<i class="icon-i-chevron-right"></i>'],
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
	
	
	// lazy load
	var bLazy = new Blazy({
		// Options
		offset: 100
	});		
	
	
})(window.jQuery);									