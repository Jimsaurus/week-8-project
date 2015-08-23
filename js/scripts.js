// =============================================================================
// DECLARE GLOBAL APP OBJECT & variables
// =============================================================================

var app = {};



// =============================================================================
// INIT FUNCTION
// =============================================================================
app.init = function(){
	//mobile van menu
	$('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
	    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
	    e.preventDefault();
	  });
	//smooth scroll
	$('a').smoothScroll();
	//nav fly
	$(window).scroll(function () {
	    if($(this).scrollTop() > 50){
	        if (!$('.nav-top').hasClass('main-fly')){

	            $('.nav-top').stop().addClass('main-fly').css('top', '-50px').animate({
	                    'top': '0px'
	                }, 500);
	        }
	    }
	    else
	    {
	        $('.nav-top').removeClass('main-fly');
	    }
	});

	//show on scroll
	var element = document.getElementById("about");
	  $(element).addClass('js-fade-element-hide');

	  $(window).scroll(function() {
	    if( $("#about").length > 0 ) {
	      var elementTopToPageTop = $(element).offset().top;
	      var windowTopToPageTop = $(window).scrollTop();
	      var windowInnerHeight = window.innerHeight;
	      var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
	      var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
	      var distanceFromBottomToAppear = 300;

	      if(elementTopToWindowBottom > distanceFromBottomToAppear) {
	        $(element).addClass('js-fade-element-show');
	      }
	      else if(elementTopToWindowBottom < 0) {
	        $(element).removeClass('js-fade-element-show');
	        $(element).addClass('js-fade-element-hide');
	      }
	    }
	  });
	
}; // end init function

// =============================================================================
// DOC READY RUN app.init()
// =============================================================================
$(function(){
	console.log('document ready!');
	app.init();
}); // end document ready



