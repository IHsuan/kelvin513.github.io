$(document).on('click', '.fancybox', function(){
	$('#panel').css("display", "block");
	$('body').css("overflow", "hidden");
	$('#infoContainer').addClass("fade-in");
});

$(document).on('click','#closeArea', function(){
	$('#panel').css("display", "none");
	$('#infoContainer').removeClass("fade-in");
	$('body').css("overflow", "scroll");
});

$(document).on('click','#close', function(){
	$('#panel').css("display", "none");
	$('#infoContainer').removeClass("fade-in");
	$('body').css("overflow", "scroll");
});