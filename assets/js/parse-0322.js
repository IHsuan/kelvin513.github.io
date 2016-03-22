$(function(){
  var progress_api = "https://taiwanbar.backme.tw/api/projects/219?token=02e8a88dbdc1bdb87f85cb48e82e9f9d";
  $.getJSON( progress_api ).done(function(data){
    var progress = data["money_pledged"] / data["money_goal"] * 100;
    $(".progress-bar").css("width", progress+'%');

    var already_succeed = parseInt(data["money_pledged"] / data["money_goal"])

    var next_show = data["money_goal"] - (data["money_pledged"] % data["money_goal"])

    $(".distance_parent").html("<img class='director-board' src='assets/img/導演板.svg'/>已成功集資 " + already_succeed +" 個節目！距離下一個節目還有<b> $"+ next_show + " </b>元");
  });

  var bar_api = "https://taiwanbar.backme.tw/special_partner/taiwanbar-conf/fields_count"
  $.getJSON( bar_api ).done(function(data){

    var votes = [
      [ "taiwan-history-heart", data[0]["臺灣世界史"] ],
      [ "economic-bar-heart", data[1]["經濟吧"] ],
      [ "law-bar-heart", data[2]["法律吧"] ],
      [ "firefight-bar-heart", data[3]["消防吧"] ]
    ];

    for (var i=0; i<4 ; i++) {
      console.log(votes[i][0]);
      console.log(votes[i][1]);
      if (votes[i][1] > 400) {
        $("#"+votes[i][0]).append("<i class='fa fa-heart'></i> ");
        $("#"+votes[i][0]).append("<i class='fa fa-heart'></i> ");
        $("#"+votes[i][0]).append("<i class='fa fa-heart'></i> ");
        $("#"+votes[i][0]).append("<i class='fa fa-heart'></i> ");
      } else if (votes[i][1] > 300) {
        $("#"+votes[i][0]).append("<i class='fa fa-heart'></i> ");
        $("#"+votes[i][0]).append("<i class='fa fa-heart'></i> ");
        $("#"+votes[i][0]).append("<i class='fa fa-heart'></i> ");
      } else if (votes[i][1] > 200) {
        $("#"+votes[i][0]).append("<i class='fa fa-heart'></i> ");
        $("#"+votes[i][0]).append("<i class='fa fa-heart'></i> ");
      } else if (votes[i][1] > 100) {
        $("#"+votes[i][0]).append("<i class='fa fa-heart'></i>");
      }
    }

  });

});