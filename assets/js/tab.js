// $(document).on('click', '.nav-tabs a', function (e) {
//   e.preventDefault();
//   $(this).tab('show');
//   chat = $(this).attr('href');
//   $(".ChatLog__entry").removeClass('pop-active');
//   $(chat).children().addClass('pop-active');

// console.log('ya');

$(window).load(function(){

	$('.nav-tabs a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
		chat = $(this).attr('href');
		setTimeout(function(){
			$(".ChatLog__entry").removeClass('pop-active');
			$(chat).children().addClass('pop-active');
		},100);
	});


// 	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
// 		// console.log(e.target);
// 		setTimeout(function(){
// 		  	$($(e.target).attr('href')).children().addClass('pop-active');
// 		},100);
// 	});

// 	$('a[data-toggle="tab"]').on('hide.bs.tab', function (e) {
// 		// console.log(e.target);
// 	  	$($(e.target).attr('href')).children().removeClass('pop-active');
// 	});

});