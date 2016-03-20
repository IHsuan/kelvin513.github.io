$(function(){
  var progress_api = "https://taiwanbar.backme.tw/api/projects/219?token=02e8a88dbdc1bdb87f85cb48e82e9f9d";
  $.getJSON( progress_api ).done(function(data){
    var progress = data["money_pledged"] / data["money_goal"] * 100;
    $(".progress-bar").css("width", progress+'%')
  });

  var bar_api = "https://taiwanbar.backme.tw/api/project_rewards/915/custom_fields.json?token=02e8a88dbdc1bdb87f85cb48e82e9f9d"
  $.getJSON( bar_api ).done(function(data){
    var taiwan_history_progress = data[0]["custom_field_options"][3]["backer_count"] / 500;
    var economic_bar_progress = data[0]["custom_field_options"][2]["backer_count"] / 500;
    var law_bar_progress = data[0]["custom_field_options"][1]["backer_count"] / 500;
    var firefight_bar_progress = data[0]["custom_field_options"][0]["backer_count"] / 500;
    $("#taiwan-history .progress-bar-fill").css("width", taiwan_history_progress);
    $("#economic-bar .progress-bar-fill").css("width", economic_bar_progress);
    $("#law-bar .progress-bar-fill").css("width", law_bar_progress);
    $("#firefight-bar .progress-bar-fill").css("width", firefight_bar_progress);

    console.log(data[0]["custom_field_options"]);
  });

});