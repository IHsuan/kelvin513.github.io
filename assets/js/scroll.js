$(function() {
  $('a.anchor').click(function() {
    var href = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 1100);
    return false;
  });
});