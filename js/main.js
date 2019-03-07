var width;
$(document).ready(function(){
	width = $(window).width();
	var navWidth = width/3;
	var welcomeHeader = $("#welcomeHeader h1");
	if(width<768)
	{	
		$("ul.nav").removeClass("justify-content-end");
		$("ul.nav").addClass("nav-justified");
  	}
  	else
  	{
  		$(".nav-item").css("width","navWidth");
  		$("ul.nav").addClass("justify-content-end");
  		if(width>992){
  			$("#work .row h3").css("margin-bottom","7");
  		}
  	}
});


$(window).resize(function() {
		var currentWidth = $(window).width();
		var extraWidth = currentWidth - width;
		// alert("width extra:" + extraWidth);

  		if(currentWidth < 768)
  			$("ul.nav").addClass("nav-justified");
  		else{
  			$("ul.nav").removeClass("nav-justified");	
  			$("ul.nav").addClass("justify-content-end");	
  		}
	});

