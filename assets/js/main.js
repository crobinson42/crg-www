$(document).ready(function() {
    
    
    /* ======= Scrollspy ======= */
   $('body').scrollspy({ target: '#topbar', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -50, 'axis':'y'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	}); 
	
	/* ======= Fixed Header animation ======= */   
    $(window).on('scroll load', function() {
         
         if ($(window).scrollTop() > 50 ) {
             $('#topbar').addClass('topbar-scrolled');
         }
         else {
             $('#topbar').removeClass('topbar-scrolled');             
         }
    }); 
    
	
    /* ======= Owl Carousel ======= */    
    /* Ref: https://github.com/OwlCarousel2/OwlCarousel2 */
    $('#reviews-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    
    /* ======= jQuery Responsive equal heights plugin ======= */
    /* Ref: https://github.com/liabru/jquery-match-height */
    
     $('#services .item-desc').matchHeight(); 
     $('#reviews .quote').matchHeight(); 
    
    
    /* ======= jQuery form validator ======= */ 
    /* Ref: http://jqueryvalidation.org/documentation/ */   
    $("#contact-form").validate({
		messages: {
		
		    name: {
    			required: 'Please enter your name' //You can customise this message
			},
			email: {
				required: 'Please enter your email' //You can customise this message
			},	
			phone: {
				required: 'Please enter your phone number' //You can customise this message
			},	
			zipcode: {
				required: 'Please enter your zip code' //You can customise this message
			},	
			message: {
				required: 'Please provide your project info' //You can customise this message
			}
			
		}
		
	});
    
    
    

});