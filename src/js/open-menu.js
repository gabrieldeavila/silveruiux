var x = 0
$(".menu").click(()=>{
  if($(".open-menu").hasClass("now")){
    $(".open-menu").removeClass("now")
    $(".menu").removeClass("menu-active")
    x=0
  }
  else{
    $(".open-menu").addClass("now")
    $(".menu").addClass("menu-active")
    x = 1
  }
})



