jQuery(document).ready(function () {
	sticky_header();
	var header_height = $('.site-header .navbar').innerHeight();
	$('body').css('padding-top' , header_height);
});
jQuery(window).load(function () {
	sticky_header();
});
jQuery(window).resize(function () {
	sticky_header();
});


function sticky_header() {

	var shrinkHeader = 300;
	var header_height = $('.site-header .navbar').innerHeight();

	scroll_activity();
}

function scroll_activity() {
	var shrinkHeader = 300;
	var header_height_orig = $('.site-header .navbar').innerHeight();
	var header_height = $('.site-header .navbar').innerHeight();
	
	if (window.innerWidth < 992) {
		shrinkHeader = 100;
	}

	$(window).scroll(function() {
		var scroll = getCurrentScroll();
		header_height = $('.site-header .navbar').innerHeight();

		if ( scroll >= shrinkHeader ) {
			$('body').addClass('stuck').css('padding-top' , header_height);
		}
		else {
			$('body').removeClass('stuck').css('padding-top' , header_height_orig);
		}
	});
}


function getCurrentScroll() {
	return window.pageYOffset || document.documentElement.scrollTop;
}