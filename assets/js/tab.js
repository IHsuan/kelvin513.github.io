$(document).on('click', '.nav-tabs a', function (e) {
  e.preventDefault();
  $(this).tab('show');
  chat = $(this).attr('href');
  $(".ChatLog__entry").removeClass('pop-active');
  $(chat).children().addClass('pop-active');
});