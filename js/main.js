$(document).ready(function(){
	var width = $(window).width();
	var navWidth = width/3;
	if(width<768)
	{
		$("ul.nav").removeClass("justify-content-end");
		$("ul.nav").addClass("nav-justified");
  	}
  	else
  	{
  		$(".nav-item").css("width","navWidth");
  		$("ul.nav").addClass("justify-content-end");
  	}
});


$(window).resize(function() {
  		if($(window).width()< 768)
  			$("ul.nav").addClass("nav-justified");
  		else{
  			$("ul.nav").removeClass("nav-justified");	
  			$("ul.nav").addClass("justify-content-end");	
  		}
	});

