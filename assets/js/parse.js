$(function(){
  var backme_api = "https://taiwanbar.backme.tw/api/projects/219?token=02e8a88dbdc1bdb87f85cb48e82e9f9d";
  $.getJSON( backme_api ).done(function(data){
    var progress = data["money_pledged"] / data["money_goal"];
    $(".progress-bar").css("width", progress)
  });
});