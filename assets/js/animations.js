/* ======= Animations ======= */
jQuery(document).ready(function($) {

    //Only animate elements when using non-mobile devices    
    if (isMobile.any === false) { 
    
        /* Animate elements in #promo */
        $('#promo .heading').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInDown delayp1');}
        });
        $('#promo .intro').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp1');}
        });
    
        /* Animate elements in #services */
        $('#services .custom-icon').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp1');}
        });

        /* Animate elements in #why */
        $('#why .badge-item').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated bounceIn delayp1');}
        });
        
        
    }


});