$('.nav-tabs a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});

// console.log('ya');

$(window).load(function(){

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		// console.log(e.target);
		setTimeout(function(){
		  	$($(e.target).attr('href')).children().addClass('pop-active');
		},100);
	});

	$('a[data-toggle="tab"]').on('hide.bs.tab', function (e) {
		// console.log(e.target);
	  	$($(e.target).attr('href')).children().removeClass('pop-active');
	});

});