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
	/* Every time the window is scrolled ... */
   $(window).scroll( function(){
       /* Check the location of each desired element */
       $('.hideme').each( function(i){
           
           var bottom_of_object = $(this).offset().top + $(this).outerHeight();
           var bottom_of_window = $(window).scrollTop() + $(window).height();
           
           /* If the object is completely visible in the window, fade it in */
           if( bottom_of_window > (bottom_of_object - 200) ){
               
               $(this).animate({'opacity':'1'},500);
                   
           }
       }); 
   });

   $(".typing").typed({
               strings: ["LEARN", "LAUGH", "TEACH", "CREATE"],
               typeSpeed: 150,
               backSpeed: 70,
               startDelay: 800,
               backDelay: 1500,
               showCursor: true,
               callback: function() {
               		$('.typed-cursor').css('opacity', 0);
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



