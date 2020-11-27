$(document).ready(function(){
	$('.main-content .owl-carousel').owlCarousel({
		stagePadding: 50,
		loop: true,
		margin: 20,
		dots: false,
		nav: true,
		navText: [
			'<i class="fa fa-angle-left" aria-hidden="true"></i>',
			'<i class="fa fa-angle-right" aria-hidden="true"></i>'
		],
		navContainer: '.main-content .custom-nav',
		responsive:{
			0:{
				items: 2
			},
			600:{
				items: 4
			},
			1000:{
				items: 6
			}
		}
	});

});