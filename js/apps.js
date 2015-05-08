$(document).ready(function(){
    
    //Fades in navbar on down scroll, fades out at top of page                     
    $(window).scroll(function(){  
        if ($(this).scrollTop() > 500) {
            $('.navbar').addClass('navbar-moved');
        } else {
            $('.navbar').removeClass('navbar-moved');
        }
    });

    // Smooth scroll to each section
   $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top
	            }, 1000);
	            return false;
	        }
	    }
	}); 

   //Submits form mail through Formspree.io and includes success message
   $(function() {
    $("#contactForm").submit(function(e) {
      e.preventDefault();
      $.ajax({
        url: "//formspree.io/phaesporiamovie@gmail.com", 
        method: "POST",
        data: $(this).serialize(),
        dataType: "json",
        success: function(data){
          // Success message
          $('#success').append('<div class="alert alert-success">Message sent!</div>');

          //clear all fields
          $('#contactForm').trigger("reset");
        },
        error: function(){
          // Fail message
          $('#success').append('<div class="alert alert-danger">Sorry, there was an error sending your message. Please try again later.</div>');

          //clear all fields
          $('#contactForm').trigger("reset");
        }
      });
    });
   });

});