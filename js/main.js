$(document).ready(function(){
	if($(window).width()<768)
	{
		$("ul.nav").addClass("nav-justified");
    	$("ul.nav").removeClass("nav-content-end");
  	}
  	else
  	{
  		$("ul.nav").addClass("nav-content-end");
    	$("ul.nav").removeClass("nav-justified");
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

