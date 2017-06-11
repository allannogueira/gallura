$(document).ready(function(){
	$("section").css("min-height", $(window).height());
  $(".altura-100").css("min-height", $(window).height());


$('a[href*="#"]:not([href="#"])').click(function() {
	$('.navbar li.active').removeClass('active');
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        if($(".navbar-header button").attr("aria-expanded") == "true"){
          $(".navbar-header button").click();
        }
        return false;
      }
    }


  });

})