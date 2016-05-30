$(document).on('click', '.fancybox', function(){
	$('#page2 .panel').css("display", "block");
	$('#page2 .infoContainer').addClass("fade-in");
	$('body').css("overflow", "hidden");
});

$(document).on('click','.closeArea', function(){
	$('#page2 .panel').css("display", "none");
	$('#page2 .infoContainer').removeClass("fade-in");
	$('body').css("overflow", "scroll");
});

$(document).on('click','.fancy-close', function(){
	$('#page2 .panel').css("display", "none");
	$('#page2 .infoContainer').removeClass("fade-in");
	$('body').css("overflow", "scroll");
});

window.ytshow = function (data) {
	$("#page4 iframe").hide().attr('src', data).on('load', function() {
		$(this).show();
	});
	$('#page4 .panel').css("display", "block");
	$('#page4 .infoContainer').addClass("fade-in");
	$('body').css("overflow", "hidden");
}; 



// $(document).on('click', '.fancybox-yt', function(){
// });

$(document).on('click','.closeArea', function(){
	$('#page4 .panel').css("display", "none");
	$('#page4 .infoContainer').removeClass("fade-in");
	$('body').css("overflow", "scroll");
});

$(document).on('click','.fancy-close', function(){
	$('#page4 .panel').css("display", "none");
	$('#page4 .infoContainer').removeClass("fade-in");
	$('body').css("overflow", "scroll");
});

