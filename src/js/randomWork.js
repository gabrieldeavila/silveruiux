var res = Math.floor(Math.random()*10%2);

if(res == 0){
  $("#changeThisClass").addClass("round-tool");
  $("#changeThisText").text("Manutenção")
  $(".working").css("display", "none")
}
else{
  $("#changeThisClass").addClass("round-check");
  $("#changeThisText").text("Normal")
  $(".notWorking").css("display", "none")

}
