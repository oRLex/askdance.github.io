console.log('slick modal');
$(document).ready(function(){
  
 $('.item').slick({
        dots: false,
	    infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		arrows: true, // Adds arrows to sides of slider
		appendArrows: '.slider-nav',
		prevArrow: $('.prev'),
		nextArrow: $('.next')
    });
  
});